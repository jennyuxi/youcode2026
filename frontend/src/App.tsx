import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Course from './components/course.tsx'
import SearchBar from './components/searchbar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <div className="hero p-1 border-1 border-black">
            navbar with logo and name and (clickable) profile logo
        </div>

        <div className="m-2 p-4 border-1 border-black">
          <SearchBar></SearchBar>
          insert filters (under searchbar)
          <h1>Courses</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            <Course 
            link="https://icma.org/sites/default/files/2021-04/AdobeStock_406571643.jpg"
            name="Community Outreach & Engagement" 
            description="Teaches how to effectively connect with diverse communities, build trust, and organize outreach initiatives that encourage participation."
            teacher="Mergen Tuguldur"
            tags={["sggs", "sdha"]}
            ></Course>
            <Course
            link="https://hseretailshop.com/wp-content/uploads/2019/06/Basic-First-Aid-for-Medical-Emergencies.jpg"
            name="First Aid & Basic Emergency Response"
            description="Covers essential life-saving skills like CPR, wound care, and how to respond calmly during emergencies."
            teacher="Mergen Tuguldur"
            tags={["sggs", "sdha"]}
            ></Course>
            <Course
            link="https://cdn-kggkn.nitrocdn.com/YZlskfpjyzvMlKrqErRKTLEylbscnFjo/assets/images/optimized/rev-f3fa24c/www.tssg.ca/wp-content/uploads/2023/04/Active-Listening.jpg"
            name="Communication & Active Listening"
            description="Focuses on interpersonal skills, including empathy, conflict resolution, and how to communicate clearly with people in need."
            teacher="Mergen Tuguldur"
            tags={["sggs", "sdha"]}
            ></Course>
            <Course
            link="https://www.sterlingvolunteers.com/wp-content/uploads/2021/06/TSK-366-730x580-1.jpg"
            name="Leadership in Volunteer Settings"
            description="Develops leadership skills such as team coordination, decision-making, and motivating others in non-profit environments."
            teacher="Mergen Tuguldur"
            tags={["sggs", "sdha"]}
            ></Course>
            <Course
            link="https://static.wixstatic.com/media/11062b_2cb2c16f2bd0467ead35d31a1ea960f8~mv2.jpeg/v1/fill/w_680,h_490,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_2cb2c16f2bd0467ead35d31a1ea960f8~mv2.jpeg"
            name="Event Planning for Non-Profits"
            description="Teaches how to organize fundraisers, community events, and awareness campaigns efficiently and effectively."
            teacher="Mergen Tugulder"
            tags={["sggs", "sdha"]}
            ></Course>
            <Course
            link="https://www.teacheracademy.eu/wp-content/uploads/2021/06/environmental_stewardship-608x405.jpg"
            name="Environmental Stewardship"
            description="Focuses on sustainability practices, conservation efforts, and how volunteers can contribute to environmental protection."
            teacher="Mergen Tuguldur"
            tags={["sggs", "sdha"]}
            ></Course>
          </div>
        </div>
      </section>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
