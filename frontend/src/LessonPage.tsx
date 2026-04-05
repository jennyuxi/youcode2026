"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"

const lesson = {
  title: "Lesson 1: Forces",
  content: `In this lesson, we will cover the basics of forces and Newton's laws.
You'll understand how forces affect motion and learn to calculate net force.`,
  questions: [
    {
      text: "Define force",
      answers: ["Push or pull on object", "Distance over time", "Energy of motion", "Change in position"],
      correct: 0,
      hint: "Think basic physics definition.",
      explanation: "A force is simply a push or pull acting on an object.",
    },
    {
      text: "Newton's 1st law is also known as?",
      answers: ["Law of Inertia", "Law of Gravity", "Law of Acceleration", "Law of Action-Reaction"],
      correct: 0,
      hint: "It describes resistance to change in motion.",
      explanation: "Objects resist changes in motion unless acted on by a net force.",
    },
    {
      text: "Which force keeps planets in orbit?",
      answers: ["Friction", "Magnetism", "Gravity", "Tension"],
      correct: 2,
      hint: "Think about attraction between masses.",
      explanation: "Gravity is the force that keeps planets orbiting stars.",
    },
  ],
}

export default function LessonPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})

  const handleClick = (qIndex: number, aIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: aIndex }))
  }

  return (
    <div className="h-screen flex">
      
      {/* LEFT: Lesson Content */}
      <div className="w-1/2 h-full overflow-y-auto p-8 border-r">
        <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>

        {lesson.content.split("\n").map((para, idx) => (
          <p key={idx} className="mb-4 text-base">
            {para}
          </p>
        ))}
      </div>

      {/* RIGHT: Questions */}
      <div className="w-1/2 h-full overflow-y-auto p-8">
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
                        ? "justify-start bg-green-500 text-white hover:bg-green-500"
                        : "justify-start bg-red-400 text-white hover:bg-red-400"
                  }

                  return (
                    <Button
                      key={aIndex}
                      variant="outline"
                      className={`${className} hover:bg-gray-100`}
                      onClick={() => handleClick(qIndex, aIndex)}
                    >
                      {ans}
                    </Button>
                  )
                })}
              </div>

              {/* Feedback */}
              {selected !== undefined && (
                <div className="mt-3 p-3 rounded-md bg-gray-100 text-sm">
                  {selected === q.correct ? (
                    <p className="text-green-700">
                      ✅ {q.explanation}
                    </p>
                  ) : (
                    <p className="text-red-600">
                      ❌ {q.hint}
                    </p>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}