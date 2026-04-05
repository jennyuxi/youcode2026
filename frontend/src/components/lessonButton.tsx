"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

type LessonButtonProps = {
  title: string
  length: string
  link: string
}

export default function LessonButton({ title, length, link }: LessonButtonProps) {
  return (
    <Link to={link}>
      <Card className="w-full cursor-pointer hover:bg-gray-50 transition">
        <CardContent className="flex items-center justify-between p-4">
          
          {/* Lesson title */}
          <span className="font-medium text-lg">
            {title}
          </span>

          {/* Length tag */}
          <Badge variant="secondary">
            {length}
          </Badge>

        </CardContent>
      </Card>
    </Link>
  )
}