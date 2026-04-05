"use client"

import React, { useState } from "react"
import Navbar from "@/components/navbar"
import FriendsList from "@/components/FriendsList"
import LessonButton from "@/components/lessonButton"
import Footer from "@/components/footer"
import FriendsMindMap from "./components/FriendsMindMap"

type Lesson = {
  title: string
  length: string
  link: string
}

export default function CourseHomepage() {
    const [showMindMap, setShowMindMap] = useState(false);
  const lessons: Lesson[] = [
    {
      title: "Lesson 1: Communication & Active Listening",
      length: "10 min",
      link: "/lessonpage3",
    },
    {
      title: "Lesson 2: Empathy in Conversations",
      length: "15 min",
      link: "/lesson/2",
    },
    {
      title: "Lesson 3: Listening Skills in Practice",
      length: "12 min",
      link: "/lesson/3",
    },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
        <Navbar />
      </div>

      <div className="flex flex-col pt-[76px] min-h-screen mr-80 bg-green-50">
        <div className="flex flex-1">
          <div className="flex-1 p-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Communication & Active Listening
              </h1>
            </header>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2 border-b pb-1">
                About this course
              </h2>
              <p className="mb-2">
                This course focuses on interpersonal skills, including empathy, conflict resolution, and how to communicate clearly with people in need. You will learn how to listen actively, respond thoughtfully, and build stronger connections through effective communication.
              </p>
              <p>
                <strong>Instructor:</strong> Rachel Hartsfield, with 5+ years of experience in communication training.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-3 border-b pb-1">
                Announcements
              </h2>

              <div className="mb-3">
                <h3 className="text-xl">Welcome!</h3>
                <p>Be ready to participate in discussion-based exercises and listening activities.</p>
              </div>

              <div>
                <h3 className="text-xl">Reminder</h3>
                <p>Practice active listening in your daily conversations this week.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 border-b pb-1">
                Lesson Schedule
              </h2>

              <div className="flex flex-col gap-3">
                {lessons.map((lesson, idx) => (
                  <LessonButton
                    key={idx}
                    title={lesson.title}
                    length={lesson.length}
                    link={lesson.link}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Friends list fixed on right */}
        <div className="fixed top-[76px] right-0 h-[calc(100vh-76px)] w-80">
            <FriendsList onShowMindMap={() => setShowMindMap(true)} />
        </div>
        {showMindMap && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-[80vw] max-w-4xl p-4 relative">
            <button
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                onClick={() => setShowMindMap(false)}
            >
                ✕
            </button>
            <h2 className="text-lg font-semibold mb-2">Friends Mind Map</h2>
            <FriendsMindMap />
            </div>
        </div>
        )}
        </div>

        <Footer />
      </div>
    </>
  )
}