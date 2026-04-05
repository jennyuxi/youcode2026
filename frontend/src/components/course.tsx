import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CourseProps = {
    classLink?: string;
    link?: string;
    name?: string;
    description?: string;
    teacher?: string;
    tags?: string[];
}

export default function Course({ 
    classLink="/", 
    link = "https://avatar.vercel.sh/shadcn1", 
    name = "Example Course", 
    description = "Example Description",
    teacher = "Example Volunteer",
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
                    <CardAction className="flex gap-2 flex-wrap">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                            {tag}
                            </Badge>
                        ))}
                    </CardAction>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>
                    {description}
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    Taught by {teacher}
                </CardFooter>
                </Card>
            </a>
        )
}
