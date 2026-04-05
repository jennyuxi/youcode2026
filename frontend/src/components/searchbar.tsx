"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function SearchBar() {
  const [query, setQuery] = useState("")

  return (
    <div className="w-full max-w-md">
      <Input
        placeholder="Search for courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off" // 🔑 disables browser autofill
      />
    </div>
  )
}