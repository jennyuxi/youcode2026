"use client"

import { useState } from "react"
import Navbar from './components/navbar.tsx'
import Course from './components/course.tsx'
import SearchBar from './components/searchbar.tsx'
import Filter from './components/filter.tsx'
import courses from './data/courses.json'
import FriendsList from './components/FriendsList.tsx'
import Footer from "./components/footer"

function Home() {
    const [query, setQuery] = useState("")
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const filteredCourses = courses.filter((course) => {
        const matchesSearch =
          course.name.toLowerCase().includes(query.toLowerCase()) ||
          course.description.toLowerCase().includes(query.toLowerCase())
      
        const matchesTag =
          selectedTags.length == 0 || selectedTags.some(tag => course.tags.includes(tag))
      
        return matchesSearch && matchesTag
    })
    
    return (
        <>
        {/* Navbar fixed at top */}
        <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
        </div>

        {/* Main content with padding to avoid navbar + space for friends list */}
        <div className="flex pt-[76px] mr-80 bg-green-50">
            {/* LEFT: main content */}
            <div className="flex-1 m-2 p-4 overflow-y-auto">
            <div className="flex gap-4 items-center mb-4">
                <div>
                <SearchBar query={query} setQuery={setQuery}/>
                </div>
                <div>
                <Filter selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
                </div>
            </div>

            <h1 className="mb-3 text-xl font-bold">Courses</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                {filteredCourses.map((c, idx) => (
                <Course
                    key={idx}
                    classLink={c.classLink}
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
        <Footer/>
    </>
  )
}

export default Home