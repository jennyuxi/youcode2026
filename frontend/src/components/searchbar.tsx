"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function SearchBar() {
  const [query, setQuery] = useState("")

  return (
    <div className="w-full mx-auto px-6">
      <Input
        className="w-[800px]"  // <-- add this
        placeholder="Search for courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />
    </div>
  )
}