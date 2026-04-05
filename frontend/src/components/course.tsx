import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom"
import teacher1 from "../assets/teacher1.png"
import teacher2 from "../assets/teacher2.png"
import teacher4 from "../assets/teacher4.png"
import teacher5 from "../assets/teacher5.png"
import teacher6 from "../assets/teacher6.png"
import teacher7 from "../assets/teacher7.png"

const teacherImages: Record<string, string> = {
  teacher1,
  teacher2,
  teacher4,
  teacher5,
  teacher6,
  teacher7,
}

import star3_5 from "../assets/star3_5.png"
import star4_5 from "../assets/star4_5.png"
import star5 from "../assets/star5.png"

const ratingImages: Record<string, string> = {
  star3_5,
  star4_5,
  star5,
}

type Teacher = {
    name: string;
    pic: string;
    experience: string;
    rating: string;
}

type CourseProps = {
    classLink?: string;
    link?: string;
    name?: string;
    description?: string;
    number?: string;
    length?: string;
    teacher?: Teacher;
    tags?: string[];
}

export default function Course({ 
    classLink="/", 
    link = "https://avatar.vercel.sh/shadcn1", 
    name = "Example Course", 
    description = "Example Description",
    number = "Course Number",
    length = "Course Length",
    teacher = {
        name: "Example Teacher",
        pic: "",
        experience: "X years",
        rating: ""
    },
    tags = []
    }: CourseProps) {
        return (
            <Link to={classLink}>
                <Card className="relative mx-auto w-full max-w-sm pt-0 cursor-pointer hover:scale-[1.01] transition">
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <img
                    src={link}
                    alt="Cover"
                    className="relative z-20 aspect-video w-full object-cover"
                />
                <CardHeader>
                    <div className="flex gap-2 flex-wrap">
                        {tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                        ))}
                    </div>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>
                    {description}
                    </CardDescription>
                    <CardContent className="flex items-center gap-4 pt-2">
                    <span className="text-sm text-gray-500">
                        {number} • {length}
                    </span>
                    </CardContent>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar>
                        <AvatarImage src={teacherImages[teacher.pic]} />
                        </Avatar>

                        {/* Text block */}
                        <div className="flex flex-col">
                        <span>
                            {teacher.name}
                        </span>
                        <span className="text-sm text-gray-500">
                            {teacher.experience}
                        </span>
                        </div>
                    </div>

                    {/* Rating image */}
                    <img
                        src={ratingImages[teacher.rating]}
                        alt="rating"
                        className="h-4 w-auto"
                    />
                </CardFooter>
                </Card>
            </Link>
        )
}
