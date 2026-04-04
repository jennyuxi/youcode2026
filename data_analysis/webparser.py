from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import string
import time
import random
import os

# ----------------------------
# SETUP
# ----------------------------
BASE_URL = "https://www.sap.com/uk/products/a-z.html"
CSV_FILE = "sap_products_full.csv"
XLSX_FILE = "sap_products_full.xlsx"

options = Options()
# comment this out if you want to watch the browser
options.add_argument("--headless=new")
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_argument("--start-maximized")
options.add_argument(
    "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/123.0.0.0 Safari/537.36"
)

driver = webdriver.Chrome(options=options)
wait = WebDriverWait(driver, 20)

# ----------------------------
# HELPERS
# ----------------------------
def safe_get(url, sleep_min=2.0, sleep_max=4.0):
    driver.get(url)
    time.sleep(random.uniform(sleep_min, sleep_max))

def try_accept_cookies():
    try:
        buttons = driver.find_elements(By.TAG_NAME, "button")
        for button in buttons:
            txt = button.text.strip().lower()
            if any(word in txt for word in ["accept", "agree", "allow"]):
                try:
                    button.click()
                    time.sleep(2)
                    break
                except:
                    pass
    except:
        pass

def clean_text(text):
    if not text:
        return ""
    return " ".join(text.split())

def is_product_link(name, href):
    if not name or not href:
        return False
    if "sap.com" not in href:
        return False
    if "/products/" not in href:
        return False

    bad_starts = [
        "https://www.sap.com/uk/products/a-z.html",
        "https://www.sap.com/products/a-z.html"
    ]
    if any(href.startswith(x) for x in bad_starts):
        return False

    # skip obvious junk
    bad_names = {
        "overview", "back to top", "learn more", "read more",
        "contact us", "sign up", "log in"
    }
    if name.strip().lower() in bad_names:
        return False

    return True

def get_description():
    # Try meta description first
    try:
        meta = driver.find_element(By.XPATH, "//meta[@name='description']")
        content = clean_text(meta.get_attribute("content"))
        if content:
            return content
    except:
        pass

    # Try og:description
    try:
        meta = driver.find_element(By.XPATH, "//meta[@property='og:description']")
        content = clean_text(meta.get_attribute("content"))
        if content:
            return content
    except:
        pass

    # Try common paragraph/hero text locations
    xpaths = [
        "//main//p",
        "//article//p",
        "//section//p",
        "//div[contains(@class,'hero')]//p",
        "//div[contains(@class,'banner')]//p"
    ]

    for xp in xpaths:
        try:
            elements = driver.find_elements(By.XPATH, xp)
            for el in elements:
                text = clean_text(el.text)
                if len(text) > 40:
                    return text
        except:
            pass

    return "No description found"

# ----------------------------
# COLLECT PRODUCTS FROM A-Z
# ----------------------------
all_products = []

print("Opening SAP A-Z page...")
safe_get(BASE_URL, 4, 6)
print("Page title:", driver.title)
try_accept_cookies()

for letter in string.ascii_uppercase:
    url = f"{BASE_URL}#{letter}"
    print(f"Loading letter {letter} ...")
    safe_get(url, 3, 5)

    # wait for links to exist on page
    try:
        wait.until(EC.presence_of_all_elements_located((By.TAG_NAME, "a")))
    except:
        print(f"Could not fully load page for letter {letter}")
        continue

    links = driver.find_elements(By.TAG_NAME, "a")
    found_this_letter = 0

    for link in links:
        try:
            name = clean_text(link.text)
            href = link.get_attribute("href")
            if is_product_link(name, href):
                all_products.append({
                    "Letter": letter,
                    "Product Name": name,
                    "Link": href
                })
                found_this_letter += 1
        except:
            pass

    print(f"Raw product links found for {letter}: {found_this_letter}")

# Remove duplicates
unique_map = {}
for item in all_products:
    key = (item["Product Name"], item["Link"])
    if key not in unique_map:
        unique_map[key] = item

products = list(unique_map.values())
products.sort(key=lambda x: (x["Letter"], x["Product Name"].lower()))

print("Unique products found:", len(products))

if len(products) == 0:
    print("No products were found.")
    print("Try running without headless mode by commenting out:")
    print('options.add_argument("--headless=new")')
    driver.quit()
    raise SystemExit

# Save links-only backup immediately
pd.DataFrame(products).to_csv("sap_products_links_only.csv", index=False)
print("Saved backup: sap_products_links_only.csv")

# ----------------------------
# VISIT EACH PRODUCT PAGE FOR DESCRIPTION
# ----------------------------
results = []
seen_links = set()

for i, product in enumerate(products, start=1):
    name = product["Product Name"]
    link = product["Link"]
    letter = product["Letter"]

    if link in seen_links:
        continue
    seen_links.add(link)

    print(f"{i}/{len(products)} - {name}")

    try:
        safe_get(link, 2, 4)
        description = get_description()
    except Exception as e:
        description = f"Error loading page: {str(e)}"

    results.append({
        "Letter": letter,
        "Product Name": name,
        "Link": link,
        "Description": description
    })

    # save progress every 10 products
    if i % 10 == 0:
        pd.DataFrame(results).to_csv(CSV_FILE, index=False)
        print(f"Progress saved at item {i}")

# ----------------------------
# STEP 3: FINAL SAVE
# ----------------------------
df = pd.DataFrame(results)
df.to_csv(CSV_FILE, index=False)
print(f"CSV saved: {os.path.abspath(CSV_FILE)}")

try:
    df.to_excel(XLSX_FILE, index=False)
    print(f"Excel saved: {os.path.abspath(XLSX_FILE)}")
except Exception as e:
    print("Could not save Excel file.")
    print("Reason:", e)
    print("Install openpyxl with: pip install openpyxl")

driver.quit()
print("Done.")