"use client"

import reactLogo from './assets/react.svg'
import Course from './components/course.tsx'
import SearchBar from './components/searchbar.tsx'
import Filter from './components/filter.tsx'
import { Link } from 'react-router-dom'
import courses from './data/courses.json'
import Navbar from './components/navbar.tsx'
import FriendsList from './components/FriendsList.tsx'

function Home() {
  return (
    <>
      {/* Navbar fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-black-300 bg-white">
        <Navbar />
      </div>

      {/* Main content with padding to avoid navbar + space for friends list */}
      <div className="flex pt-[76px] mr-80">
        {/* LEFT: main content */}
        <div className="flex-1 m-2 p-4 border-1 border-black overflow-y-auto">
          <div className="flex gap-4 items-center mb-4">
            <div>
              <SearchBar />
            </div>
            <div>
              <Filter />
            </div>
          </div>

        <h1 className="mb-3 text-xl font-bold">Courses</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {courses.map((c, idx) => (
              <Course
                key={idx}
                link={c.link}
                name={c.name}
                description={c.description}
                number={c.number}
                length={c.length}
                teacher={c.teacher}
                tags={c.tags}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Friends list fixed on right */}
      <div className="fixed top-[76px] right-0 h-[calc(100vh-76px)] w-80">
        <FriendsList />
      </div>

      {/* Bottom sections */}
      <footer className="border-t border-gray-300 mt-30 px-6 py-10 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-xl font-bold mb-2">BEADB</h2>
            <p> Built by students for volunteers.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/About" className="hover:underline">About</Link>
              </li>
              <li>
                <Link to="/Forum" className="hover:underline">Forum</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank">
                  X.com
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank">
                  Bluesky
                </a>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Home