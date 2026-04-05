"use client"

import React, { useState } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import FriendsList from "@/components/FriendsList"

type Answer = {
  text: string
  isCorrect: boolean
}

type Question = {
  text: string
  answers: Answer[]
}

export default function CourseHomepage() {
  // Sample lesson questions
  const module1Lesson1Questions: Question[] = [
    {
      text: "What is motion?",
      answers: [
        { text: "A type of food", isCorrect: false },
        { text: "Change in position over time", isCorrect: true },
        { text: "Speed times distance", isCorrect: false },
        { text: "A force acting on an object", isCorrect: false },
      ],
    },
    {
      text: "Calculate speed given distance/time",
      answers: [
        { text: "Distance + Time", isCorrect: false },
        { text: "Distance / Time", isCorrect: true },
        { text: "Distance - Time", isCorrect: false },
        { text: "Time / Distance", isCorrect: false },
      ],
    },
  ]

  const QuestionBlock = ({ question }: { question: Question }) => {
    const [selected, setSelected] = useState<number | null>(null)

    return (
      <div className="mb-6">
        <p className="font-semibold">{question.text}</p>
        <div className="flex flex-col gap-2 mt-2">
          {question.answers.map((ans, idx) => {
            const isSelected = selected === idx
            let className = "justify-start"

            if (isSelected) {
              className =
                ans.isCorrect
                  ? "justify-start bg-green-500 text-white hover:bg-green-500"
                  : "justify-start bg-red-400 text-white hover:bg-red-400"
            }

            return (
              <Button
                key={idx}
                variant="outline"
                className={`${className} hover:bg-gray-100`}
                onClick={() => setSelected(idx)}
              >
                {ans.text}
              </Button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Navbar fixed at top */}
      <div className="hero p-1 border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content with padding to avoid navbar + space for friends list */}
      <div className="flex pt-[76px] mr-80 h-[calc(100vh-76px)] overflow-y-auto">
        {/* Left side: course content */}
        <div className="flex-1 p-8">
          {/* COURSE NAME */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Introduction to Modern Physics</h1>
          </header>

          {/* COURSE INTRO & INSTRUCTOR */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1">About this course</h2>
            <p className="mb-2 text-base">
              This course provides a comprehensive introduction to modern physics, covering classical mechanics to quantum phenomena. Students will learn principles of motion, energy, waves, and particles, and how to apply these concepts to solve real-world problems.
            </p>
            <p className="text-base">
              <strong>Instructor:</strong> Dr. Jane Doe, with 15+ years of university-level teaching experience, specializes in quantum mechanics and experimental physics.
            </p>
          </section>

          {/* KEY ANNOUNCEMENTS */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">Announcements</h2>
            <div className="mb-3">
              <h3 className="text-xl mb-1">Welcome!</h3>
              <p className="mb-0">This course will start next week. Make sure you have a notebook and calculator ready.</p>
            </div>
            <div className="mb-3">
              <h3 className="text-xl mb-1">Reminder</h3>
              <p className="mb-0">Assignment 1 is due Friday. Check the lessons for resources and exercises.</p>
            </div>
          </section>

          {/* LESSON SCHEDULE */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">Lesson Schedule</h2>
            <Accordion type="single" collapsible>
              {/* Module 1 - Lesson 1 */}
              <AccordionItem value="module1-lesson1">
                <AccordionTrigger>Lesson 1: Overview (10 min)</AccordionTrigger>
                <AccordionContent className="mt-2">
                  {module1Lesson1Questions.map((q, i) => (
                    <QuestionBlock key={i} question={q} />
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* Module 1 - Lesson 2 */}
              <AccordionItem value="module1-lesson2">
                <AccordionTrigger>Lesson 2: Basics (15 min)</AccordionTrigger>
                <AccordionContent className="mt-2">
                  <QuestionBlock
                    question={{
                      text: "Define force",
                      answers: [
                        { text: "Push or pull on an object", isCorrect: true },
                        { text: "Distance over time", isCorrect: false },
                        { text: "Energy of motion", isCorrect: false },
                        { text: "Change in position", isCorrect: false },
                      ],
                    }}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        {/* Right side: FriendsList fixed */}
        <div className="fixed top-[76px] right-0 h-[calc(100vh-76px)] w-80">
          <FriendsList />
        </div>
      </div>
    </>
  )
}