import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import courses from "@/data/courses.json"
  
export default function Filter() {
    const uniqueTags = Array.from(
        new Set(courses.flatMap(course => course.tags))
    )

    return (
      <Select>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder="All topics" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
          <SelectItem value="all">
            All topics
          </SelectItem>
            {uniqueTags.map(tag => (
            <SelectItem key={tag} value={tag}>
              {tag}
            </SelectItem>
          ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    )
}
  