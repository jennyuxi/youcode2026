"use client"

import React from "react"
import Navbar from "@/components/navbar"
import FriendsList from "@/components/FriendsList"
import LessonButton from "@/components/lessonButton"

// 🔧 REPLACE: lesson list with real course lessons
type Lesson = {
  title: string
  length: string
  link: string
}

export default function CourseHomepage() {

  // 🔧 EDIT HERE: Add/remove lessons, update titles, durations, and links
  const lessons: Lesson[] = [
    {
      title: "Lesson 1: Overview",
      length: "10 min",
      link: "/lessonPage",
    },
    {
      title: "Lesson 2: Basics",
      length: "15 min",
      link: "/lesson/2",
    },
    {
      title: "Lesson 3: Forces",
      length: "12 min",
      link: "/lesson/3",
    },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
        <Navbar />
      </div>

      <div className="flex pt-[76px] mr-80 h-[calc(100vh-76px)] overflow-y-auto">
        
        <div className="flex-1 p-8">

          {/* 🔧 REPLACE: Course title */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Introduction to Modern Physics
            </h1>
          </header>

          {/* 🔧 REPLACE: Course description + instructor */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1">
              About this course
            </h2>
            <p className="mb-2">
              This course provides a comprehensive introduction to modern physics.
            </p>
            <p>
              <strong>Instructor:</strong> Dr. Jane Doe
            </p>
          </section>

          {/* 🔧 REPLACE: Announcements */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">
              Announcements
            </h2>

            <div className="mb-3">
              <h3 className="text-xl">Welcome!</h3>
              <p>This course will start next week.</p>
            </div>

            <div>
              <h3 className="text-xl">Reminder</h3>
              <p>Assignment 1 due Friday.</p>
            </div>
          </section>

          {/* 🔧 LESSON LIST: auto renders from lessons array above */}
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

        <div className="fixed top-[76px] right-0 h-[calc(100vh-76px)] w-80">
          <FriendsList />
        </div>
      </div>
    </>
  )
}