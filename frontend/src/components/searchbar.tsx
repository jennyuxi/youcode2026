"use client"

import { Input } from "@/components/ui/input"

export default function SearchBar({query, setQuery}: {
    query: string
    setQuery: (value: string) => void
}) {
  return (
    <div className="w-full">
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