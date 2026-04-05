"use client"

import React, { useState } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

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

  // React component for a single question
  const QuestionBlock = ({ question }: { question: Question }) => {
    const [selected, setSelected] = useState<number | null>(null)

    return (
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontWeight: 600 }}>{question.text}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
          {question.answers.map((ans, idx) => {
            let style: React.CSSProperties = {
              backgroundColor: "white",
              color: "black",
              border: "1px solid #ccc",
            }

            if (selected === idx) {
              style.backgroundColor = ans.isCorrect ? "green" : "#f87171" // red-400
              style.color = "white"
            }

            return (
              <Button
                key={idx}
                style={style}
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
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      
      {/* COURSE NAME */}
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>Introduction to Modern Physics</h1>
      </header>

      {/* COURSE INTRO & INSTRUCTOR */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px", borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>
          About this course
        </h2>
        <p style={{ fontSize: "16px", marginBottom: "10px" }}>
          This course provides a comprehensive introduction to modern physics, covering classical mechanics to quantum phenomena. Students will learn principles of motion, energy, waves, and particles, and how to apply these concepts to solve real-world problems.
        </p>
        <p style={{ fontSize: "16px" }}>
          <strong>Instructor:</strong> Dr. Jane Doe, with 15+ years of university-level teaching experience, specializes in quantum mechanics and experimental physics.
        </p>
      </section>

      {/* KEY ANNOUNCEMENTS */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "15px", borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>Announcements</h2>
        <div style={{ marginBottom: "15px" }}>
          <h3 style={{ fontSize: "22px", marginBottom: "5px" }}>Welcome!</h3>
          <p style={{ fontSize: "16px", margin: 0 }}>This course will start next week. Make sure you have a notebook and calculator ready.</p>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <h3 style={{ fontSize: "22px", marginBottom: "5px" }}>Reminder</h3>
          <p style={{ fontSize: "16px", margin: 0 }}>Assignment 1 is due Friday. Check the lessons for resources and exercises.</p>
        </div>
      </section>

      {/* LESSON SCHEDULE */}
      <section>
        <h2 style={{ fontSize: "28px", marginBottom: "15px", borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>Lesson Schedule</h2>

        <Accordion type="single" collapsible>
          {/* Module 1 - Lesson 1 */}
          <AccordionItem value="module1-lesson1">
            <AccordionTrigger>Lesson 1: Overview (10 min)</AccordionTrigger>
            <AccordionContent style={{ marginTop: "10px" }}>
              {module1Lesson1Questions.map((q, i) => (
                <QuestionBlock key={i} question={q} />
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* Module 1 - Lesson 2 */}
          <AccordionItem value="module1-lesson2">
            <AccordionTrigger>Lesson 2: Basics (15 min)</AccordionTrigger>
            <AccordionContent style={{ marginTop: "10px" }}>
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
  )
}