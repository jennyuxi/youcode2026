import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
    teacher?: Teacher;
    tags?: string[];
}

export default function Course({ 
    classLink="/", 
    link = "https://avatar.vercel.sh/shadcn1", 
    name = "Example Course", 
    description = "Example Description",
    teacher = {
        name: "Example Teacher",
        pic: "",
        experience: "X years",
        rating: ""
    },
    tags = []
    }: CourseProps) {
        return (
            <a href={classLink}>
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
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar>
                        <AvatarImage src={teacher.pic} />
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
                        src={teacher.rating}
                        alt="rating"
                        className="h-5 w-auto"
                    />
                </CardFooter>
                </Card>
            </a>
        )
}
