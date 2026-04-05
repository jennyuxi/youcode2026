"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"

// Example lesson data
const lesson = {
  title: "Lesson 1: Forces",
  content: `In this lesson, we will cover the basics of forces and Newton's laws.
You'll understand how forces affect motion and learn to calculate net force.`,
  questions: [
    {
      text: "Define force",
      answers: ["Push or pull on object", "Distance over time", "Energy of motion", "Change in position"],
      correct: 0,
    },
    {
      text: "Newton's 1st law is also known as?",
      answers: ["Law of Inertia", "Law of Gravity", "Law of Acceleration", "Law of Action-Reaction"],
      correct: 0,
    },
    {
      text: "Which force keeps planets in orbit?",
      answers: ["Friction", "Magnetism", "Gravity", "Tension"],
      correct: 2,
    },
  ],
}

export default function LessonPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})

  const handleClick = (qIndex: number, aIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: aIndex }))
  }

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      {/* Lesson Header */}
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>{lesson.title}</h1>
      </header>

      {/* Lesson Content */}
      <section style={{ marginBottom: "40px" }}>
        {lesson.content.split("\n").map((para, idx) => (
          <p key={idx} style={{ fontSize: "16px", marginBottom: "15px" }}>{para}</p>
        ))}
      </section>

      {/* Questions */}
      <section>
        <h2 style={{ fontSize: "28px", marginBottom: "15px", borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>Questions</h2>
        {lesson.questions.map((q, qIndex) => {
          const selected = selectedAnswers[qIndex] ?? null
          return (
            <div key={qIndex} style={{ marginBottom: "20px" }}>
              <p style={{ fontWeight: 600 }}>{q.text}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                {q.answers.map((ans, aIndex) => {
                  let style: React.CSSProperties = { backgroundColor: "white", color: "black", border: "1px solid #ccc" }
                  if (selected === aIndex) {
                    style.backgroundColor = aIndex === q.correct ? "green" : "#f87171"
                    style.color = "white"
                  }
                  return (
                    <Button key={aIndex} style={style} onClick={() => handleClick(qIndex, aIndex)}>
                      {ans}
                    </Button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}