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
      title: "Lesson 1: First Aid Basics",
      length: "10 min",
      link: "/lessonpage2",
    },
    {
      title: "Lesson 2: Emergency Response",
      length: "15 min",
      link: "/lesson/2",
    },
    {
      title: "Lesson 3: CPR & Life-Saving Techniques",
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
        
        <div className="flex-1 p-8">

          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              First Aid & Basic Emergency Response
            </h1>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1">
              About this course
            </h2>
            <p className="mb-2">
              This course teaches essential life-saving skills such as CPR, wound care, and how to respond calmly in emergencies. You will learn how to assess situations, ensure safety, and provide immediate assistance until professional help arrives.
            </p>
            <p>
              <strong>Instructor:</strong> Annie Lawson, with experience in emergency response training.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">
              Announcements
            </h2>

            <div className="mb-3">
              <h3 className="text-xl">Welcome!</h3>
              <p>Please review basic safety guidelines before starting.</p>
            </div>

            <div>
              <h3 className="text-xl">Reminder</h3>
              <p>Practice CPR techniques in upcoming lessons.</p>
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

        <div className="fixed top-[76px] right-0 h-[calc(100vh-76px)] w-80">
          <FriendsList />
        </div>

        <Footer />

      </div>
    </>
  )
}