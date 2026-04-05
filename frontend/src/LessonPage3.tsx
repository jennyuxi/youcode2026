"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import FriendsList from "@/components/FriendsList"
import Footer from "@/components/footer"
import { useNavigate } from "react-router-dom"

const lesson = {
  title: "Lesson 1: Communication & Active Listening",
  content: `In this lesson, we will explore the basics of clear communication and active listening.
You'll learn how to understand others, respond thoughtfully, and build stronger connections through empathy and attention.`,
  questions: [
    {
      text: "What is active listening?",
      answers: [
        "Fully focusing on and understanding the speaker",
        "Waiting for your turn to talk",
        "Ignoring body language",
        "Interrupting with advice",
      ],
      correct: 0,
      hint: "It involves paying close attention to the speaker.",
      explanation:
        "Active listening means fully concentrating, understanding, and responding thoughtfully to what someone is saying.",
    },
    {
      text: "Why is empathy important in communication?",
      answers: [
        "It helps you understand another person's feelings and perspective",
        "It makes conversations shorter",
        "It helps you avoid listening",
        "It replaces the need for clear speaking",
      ],
      correct: 0,
      hint: "Think about understanding emotions.",
      explanation:
        "Empathy improves communication by helping you connect with how another person feels and respond with care.",
    },
    {
      text: "Which of the following shows good listening skills?",
      answers: [
        "Making eye contact and asking thoughtful questions",
        "Checking your phone while someone speaks",
        "Interrupting often",
        "Only thinking about your response",
      ],
      correct: 0,
      hint: "Good listening shows attention and engagement.",
      explanation:
        "Making eye contact and asking thoughtful questions shows that you are engaged and genuinely listening.",
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

      {/* ✅ FIXED LAYOUT + GREEN BACKGROUND */}
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
                        <p className="text-green-700">{q.explanation}</p>
                      ) : (
                        <p className="text-red-600">{q.hint}</p>
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