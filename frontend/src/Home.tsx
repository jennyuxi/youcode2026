"use client"

import reactLogo from './assets/react.svg'
import Course from './components/course.tsx'
import SearchBar from './components/searchbar.tsx'
import Filter from './components/filter.tsx'
import { Link } from 'react-router-dom'
import courses from './data/courses.json'
import Navbar from './components/navbar.tsx'
import FriendsList from './components/FriendsList.tsx'
import Footer from "./components/footer"

function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-gray-300 bg-white">
        <Navbar />
      </div>

      <div className="flex pt-[76px] mr-80">
        <div className="flex-1 m-2 p-4 border border-black overflow-y-auto">
          <div className="flex gap-4 items-center mb-4">
            <div>
              <SearchBar />
            </div>
            <div>
              <Filter />
            </div>
          </div>

          <h1>Courses</h1>
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

      <div className="fixed top-[76px] right-0 h-[calc(100vh-76px)] w-80">
        <FriendsList />
      </div>

      <Footer />
    </>
  )
}

export default Home