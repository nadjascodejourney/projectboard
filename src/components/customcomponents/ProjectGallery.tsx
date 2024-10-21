import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "gemischteGefühle (beta)",
    description: "A Mental Health Tracker (Teamwork, Fullstack)",
    link: "https://gemischtegefuehle-app.onrender.com/",
    imageUrl: "https://fakeimg.pl/400x400/f5f0f0/909090?text=Project",
  },
  {
    id: 2,
    title: "Raptor API",
    description: "An API about Raptors (Backend with Node.js)",
    link: "https://github.com/nadjascodejourney/backendproject-birdsofprey-api",
    imageUrl: "https://fakeimg.pl/400x400/f5f0f0/909090?text=Project",
  },
  {
    id: 3,
    title: "Quizzell (beta)",
    description: "A Film- and Art-Quiz (Teamwork, SPA with React)",
    link: "https://github.com/nadjascodejourney/quizproject",
    imageUrl: "https://fakeimg.pl/400x400/f5f0f0/909090?text=Project",
  },
  {
    id: 4,
    title: "Scrolling in 3D Website",
    description: "A Demo for 3D Scrolling",
    link: "https://scrollr3fproject.vercel.app/",
    imageUrl: "https://fakeimg.pl/400x400/f5f0f0/909090?text=Project",
  },
  {
    id: 5,
    title: "Meowstery - A Text Adventure Game",
    description: "A retro, textbased game to play in the Terminal",
    link: "https://github.com/nadjascodejourney/meowstery-Textadventure",
    imageUrl: "https://fakeimg.pl/400x400/f5f0f0/909090?text=Project",
  },
  {
    id: 6,
    title: "Birds of Prey Website",
    description: "A Website about Raptors (work in progress)",
    link: "https://github.com/nadjascodejourney/birdsOfPrey-Project",
    imageUrl: "https://fakeimg.pl/400x400/f5f0f0/909090?text=Project",
  },
];

export default function ProjectGallery() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();

      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Set initial random position
          gsap.set(card, {
            x: gsap.utils.random(-width / 2, width / 2),
            y: gsap.utils.random(-height / 2, height / 2),
            rotation: gsap.utils.random(-45, 45),
            opacity: 0,
            scale: 0.5,
          });

          // Animate to final position
          gsap.to(card, {
            duration: 1.5,
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            delay: index * 0.1, // Stagger the animations
          });
        }
      });
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground p-8"
      ref={containerRef}
    >
      <h1 className="text-4xl font-bold mb-12 text-center">Webdevelopment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="overflow-hidden"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <CardDescription>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline"
                >
                  Visit project
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
