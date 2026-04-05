import { useNavigate } from "react-router-dom"
import Navbar from "./components/navbar.tsx"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Footer from "./components/footer.tsx"
import aliceAvatar from "./assets/alice.jpg"

function Profile() {    
  const navigate = useNavigate()

  const tags = ["Senior Volunteer", "Mentor", "Social Good", "Community Outreach"]
  const certifications = [
    "Food Save Level 5",
    "Senior Volunteer Management",
    "CPR & First Aid",
    "Mental Health First Aid",
    "Leadership Program Training",
    "Youth Program Training",
  ]

  return (
    <>
      {/* Fixed navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Page content */}
      <main className="pt-[76px] min-h-screen bg-gray-50 px-6 py-8 bg-green-50">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-100"
          >
            ← Go Back
          </button>

          {/* Top profile card */}
          <section className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <Avatar className="h-28 w-28 border border-gray-300">
                <AvatarImage src={aliceAvatar} alt="Profile picture" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h1 className="text-3xl font-bold">Alice</h1>
                <p className="mt-1 text-lg text-gray-600">Senior Volunteer</p>

                <p className="mt-4 text-sm text-gray-700 max-w-2xl">
                  Reach out to me to learn more about volunteering opportunites at Sean Sun Charity!
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="min-w-[180px] rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Email</p>
                <p className="mb-3 font-medium">volunteeralice@gmail.com</p>

                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Delta, BC</p>
              </div>
            </div>
          </section>

          {/* Lower grid */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Certifications */}
            <section className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm md:col-span-2">
              <h2 className="mb-4 text-xl font-semibold">Certifications</h2>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </section>

            {/* Stats */}
            <section className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Profile Stats</h2>
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Courses Completed</p>
                  <p className="text-2xl font-bold">34</p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Volunteer Hours</p>
                  <p className="text-2xl font-bold">678</p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Certifications</p>
                  <p className="text-2xl font-bold">{certifications.length}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Extra section */}
          <section className="mt-6 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
            <div className="space-y-3">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                Published "Volunteer Basics"
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                Joined the Senior Volunteer forum
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                Joined the Community Outreach forum
              </div>
            </div>
          </section>
        </div>
        
      </main>
      <Footer/>
    </>
  )
}

export default Profile