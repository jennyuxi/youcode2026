"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import FriendsList from "@/components/FriendsList"
import Footer from "@/components/footer"
import { useNavigate } from "react-router-dom"

const lesson = {
  title: "Lesson 1: Community Outreach",
  content: `In this lesson, we will explore the fundamentals of community outreach and engagement.
You'll learn how to build trust, connect with diverse groups, and organize initiatives that positively impact communities.`,
  questions: [
    {
      text: "What is community outreach?",
      answers: [
        "A way to build relationships and support communities",
        "A type of business advertising",
        "A school grading system",
        "A private fundraising method only",
      ],
      correct: 0,
      hint: "Think about connecting with and helping people in a community.",
      explanation:
        "Community outreach is about building relationships, understanding needs, and creating support within communities.",
    },
    {
      text: "Why is trust important in community outreach?",
      answers: [
        "It helps communities feel respected and willing to engage",
        "It makes events more expensive",
        "It removes the need for communication",
        "It only matters in schools",
      ],
      correct: 0,
      hint: "Trust helps people feel safe participating.",
      explanation:
        "Trust is essential because it encourages participation, cooperation, and stronger long-term relationships.",
    },
    {
      text: "Which of the following is an example of community outreach?",
      answers: [
        "Hosting a neighborhood clean-up event",
        "Ignoring local concerns",
        "Only posting online without interaction",
        "Working alone without community input",
      ],
      correct: 0,
      hint: "Think of an activity that directly involves and benefits the community.",
      explanation:
        "A neighborhood clean-up event is a direct form of community outreach because it engages people and supports local wellbeing.",
    },
  ],
}

export default function LessonPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const navigate = useNavigate()

  const handleClick = (qIndex: number, aIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: aIndex }))
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
        <Navbar />
      </div>

      {/* ✅ CHANGED: layout + green background */}
      <div className="flex flex-col pt-[76px] min-h-screen mr-80 bg-green-50">

        <div className="flex flex-1">
          
          <div className="w-1/2 overflow-y-auto p-8 border-r">
            
            <Button
              variant="outline"
              className="mb-4"
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>

            <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>

            {lesson.content.split("\n").map((para, idx) => (
              <p key={idx} className="mb-4 text-base">
                {para}
              </p>
            ))}
          </div>

          <div className="w-1/2 overflow-y-auto p-8">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
              Questions
            </h2>

            {lesson.questions.map((q, qIndex) => {
              const selected = selectedAnswers[qIndex]

              return (
                <div key={qIndex} className="mb-6">
                  <p className="font-semibold">{q.text}</p>

                  <div className="flex flex-col gap-2 mt-2">
                    {q.answers.map((ans, aIndex) => {
                      const isSelected = selected === aIndex
                      let className = "justify-start"

                      if (isSelected) {
                        className =
                          aIndex === q.correct
                            ? "justify-start bg-green-500 text-white"
                            : "justify-start bg-red-400 text-white"
                      }

                      return (
                        <Button
                          key={aIndex}
                          variant="outline"
                          className={className}
                          onClick={() => handleClick(qIndex, aIndex)}
                        >
                          {ans}
                        </Button>
                      )
                    })}
                  </div>

                  {selected !== undefined && (
                    <div className="mt-3 p-3 rounded-md bg-gray-100 text-sm">
                      {selected === q.correct ? (
                        <p className="text-green-700"> {q.explanation}</p>
                      ) : (
                        <p className="text-red-600"> {q.hint}</p>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

        {/* ✅ FOOTER */}
        <Footer />

      </div>

      <div className="fixed top-[76px] right-0 h-[calc(100vh-76px)] w-80">
        <FriendsList />
      </div>
    </>
  )
}