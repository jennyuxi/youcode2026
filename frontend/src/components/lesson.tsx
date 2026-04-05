// Lesson.tsx
import React from "react"

type LessonProps = {
  title?: string
  link?: string
}

export default function Lesson({
  title = "Lesson 1: Forces",
  link = "/lessons/lesson1",
}: LessonProps) {
  return (
    <a href={link} className="block">
      <div className="mx-auto w-full max-w-4xl py-4 px-6 mb-4 border rounded-lg shadow-sm hover:shadow-md transition flex items-center cursor-pointer bg-white">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </a>
  )
}