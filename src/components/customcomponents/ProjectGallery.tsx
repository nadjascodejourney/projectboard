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
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "gemischteGefühle (beta)",
    description: "A Mental Health Tracker (Teamwork)",
    imageUrl: "https://fakeimg.pl/400x400/f5f0f0/909090?text=Project",
  },
  {
    id: 2,
    title: "Raptor API",
    description: "An API about Raptors",
    imageUrl: "https://fakeimg.pl/400x400/f5f0f0/909090?text=Project",
  },
  {
    id: 3,
    title: "Quizzell (beta)",
    description: "A Film- and Art-Quiz App (Teamwork)",
    imageUrl: "https://fakeimg.pl/400x400/f5f0f0/909090?text=Project",
  },
  {
    id: 4,
    title: "Scrolling in 3D Website",
    description: "A Demo for 3D Scrolling",
    imageUrl: "https://fakeimg.pl/400x400/f5f0f0/909090?text=Project",
  },
  {
    id: 5,
    title: "Meowstery - A Text Adventure Game",
    description: "A Demo for a retro, textbased game",
    imageUrl: "https://fakeimg.pl/400x400/f5f0f0/909090?text=Project",
  },
  {
    id: 6,
    title: "Birds of Prey Website",
    description: "A Website about Raptors (work in progress)",
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
