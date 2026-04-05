"use client"

import reactLogo from './assets/react.svg'
import Course from './components/course.tsx'
import SearchBar from './components/searchbar.tsx'
import Filter from './components/filter.tsx'
import { Link } from 'react-router-dom'
import courses from '@/data/courses.json'
import Navbar from './components/navbar.tsx'
import FriendsList from './components/FriendsList.tsx'

function Home() {
  return (
    <>
      {/* Navbar fixed at top */}
      <div className="hero p-1 border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
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
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <Link to="/About">About</Link>
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
    </>
  )
}

export default Home