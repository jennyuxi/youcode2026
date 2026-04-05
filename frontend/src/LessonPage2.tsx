"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import FriendsList from "@/components/FriendsList"
import Footer from "@/components/footer"
import { useNavigate } from "react-router-dom"

const lesson = {
  title: "Lesson 1: First Aid Basics",
  content: `In this lesson, we will cover the fundamentals of first aid and emergency response.
You'll learn how to recognize emergencies, ensure safety, and provide immediate care until professional help arrives.`,

  questions: [
    {
      text: "What is first aid?",
      answers: [
        "Immediate care given before professional help arrives",
        "Advanced hospital treatment",
        "A type of surgery",
        "Long-term medical care",
      ],
      correct: 0,
      hint: "It happens before doctors or paramedics arrive.",
      explanation:
        "First aid is the immediate care provided to someone injured or ill until professional medical help is available.",
    },
    {
      text: "What should you do first in an emergency?",
      answers: [
        "Ensure the scene is safe",
        "Call a friend",
        "Ignore the situation",
        "Take a photo",
      ],
      correct: 0,
      hint: "Your safety comes first.",
      explanation:
        "Always check that the environment is safe before helping others to avoid putting yourself in danger.",
    },
    {
      text: "What does CPR stand for?",
      answers: [
        "Cardiopulmonary Resuscitation",
        "Critical Patient Response",
        "Cardiac Pulse Recovery",
        "Controlled Pressure Routine",
      ],
      correct: 0,
      hint: "It’s used when someone stops breathing.",
      explanation:
        "CPR stands for Cardiopulmonary Resuscitation, a life-saving technique used when breathing or heartbeat has stopped.",
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