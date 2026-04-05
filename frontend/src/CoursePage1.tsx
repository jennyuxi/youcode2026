"use client"

import React from "react"
import Navbar from "@/components/navbar"
import FriendsList from "@/components/FriendsList"
import LessonButton from "@/components/lessonButton"
import Footer from "@/components/footer.tsx"

type Lesson = {
  title: string
  length: string
  link: string
}

export default function CourseHomepage() {

  const lessons: Lesson[] = [
    {
      title: "Lesson 1: Introduction to Community Outreach",
      length: "10 min",
      link: "/lessonPage1",
    },
    {
      title: "Lesson 2: Building Relationships to Support Communities",
      length: "15 min",
      link: "/lesson/2",
    },
    {
      title: "Lesson 3: Types of Volunteering",
      length: "12 min",
      link: "/lesson/3",
    },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-green-50">
        <Navbar />
      </div>

      {/* ✅ CHANGED: layout wrapper */}
      <div className="flex flex-col pt-[76px] min-h-screen mr-80 bg-green-50">
        
        {/* MAIN CONTENT */}
        <div className="flex flex-1">

          <div className="flex-1 p-8">

            <header className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Community Outreach & Engagement
              </h1>
            </header>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2 border-b pb-1">
                About this course
              </h2>
              <p className="mb-2">
                This course teaches how to effectively connect with diverse communities, build trust, and organize outreach initiatives that encourage participation. Learners will develop communication strategies, partnership-building skills, and methods to create meaningful community impact.
              </p>
              <p>
                <strong>Instructor:</strong> Abdul Kassab, with 8+ years of experience in community development and outreach programs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-3 border-b pb-1">
                Announcements
              </h2>

              <div className="mb-3">
                <h3 className="text-xl">Welcome!</h3>
                <p>Get ready to explore real-world outreach strategies and community engagement techniques.</p>
              </div>

              <div>
                <h3 className="text-xl">Reminder</h3>
                <p> First activity involves mapping a local community and identifying outreach opportunities.</p>
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

          {/* RIGHT SIDEBAR */}
          <div className="fixed top-[76px] right-0 h-[calc(100vh-76px)] w-80">
            <FriendsList />
          </div>

        </div>

        {/* ✅ ADDED FOOTER */}
        <Footer />

      </div>
    </>
  )
}