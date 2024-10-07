import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface Experience {
  title: string;
  organization: {
    // union type = company or institution
    name: string; // name of the company or institution
    type: "company" | "institution"; // type of the organization
  };
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
}

export default function CVTemplate() {
  const personalInfo = {
    name: "Nadja Probst",
    title: "Web Developer & Designer",
    email: "nadja.probst25@gmail.com",
    location: "Regensburg, Germany",
    website: "github.com/nadjascodejourney",
    avatar: "/src/assets/icons/profilpic-32x32.png",
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "SQLLite",
    "Figma",
    "UI/UX Design",
    "Git",
    "GitHub",
    "RESTful APIs",
    "Sass/SCSS",
    "Tailwind CSS",
    "Zod",
    "Jest/Vitest",
    "Three.js",
    "React Three Fiber",
    "shadcn/ui",
  ];

  const experiences: Experience[] = [
    {
      title: "Professional reorientation to Web Development",
      organization: {
        name: "Digital Career Institute",
        type: "institution",
      },
      period: "2023 - Present",
      description: "...",
    },
    {
      title: "Head of Museum Education (full-time)",
      organization: {
        name: "Sudetendeutsches Museum",
        type: "company",
      },

      period: "2021 - 2023",
      description:
        "Lead museum educator: Conceptualization of the educational program for different target groups, on-site and digital. Developing of guided tours for children, Realization of workshops for adults and retired people to increase visitors engagement with external cooperation partners, Content design of media stations, Support of the website in easy language, etc.",
    },
    {
      title: "Museum Educator (full-time)",

      organization: {
        name: "Kunstforum Ostdeutsche Galerie",
        type: "company",
      },

      period: "2020 - 2021",
      description:
        "Development and production of an audio guide by and for children and families in collaboration with schools in the region, Workshops for children and schools, Creation of educational materials, etc.",
    },
    {
      title: "Freelance Museum Educator (part-time)",

      organization: {
        name: "Kunstforum Ostdeutsche Galerie",
        type: "company",
      },

      period: "2017 - 2020",
      description:
        "Workshops for children and schools, Creation of an Exhibition booklet for children, etc.",
    },
  ];

  const education: Education[] = [
    {
      degree: "Certificate in Web Development",
      institution: "Digital Career Institute",
      year: "2024",
    },
    {
      degree: "Master of Arts in Fine arts and aesthetic education",
      institution: "University of Regensburg, Germany",
      year: "2020",
    },
    {
      degree:
        "Bachelor of Arts in Fine arts and aesthetic education and Art history",
      institution: "University of Regensburg, Germany",
      year: "2017",
    },
  ];

  const projects: Project[] = [
    {
      name: "gemischteGefühle - Mentalhealth App",
      description:
        "Developed a full-stack Mentalhealth App together with a team of 4, Frontend and Backend development, Database design, User authentication, etc. My role: Frontend development, UI/UX Design, Connecting Frontend with Backend, Project Management.",
      technologies: [
        "React",
        "shadcn/ui",
        "TailwindCSS",
        "Figma",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },
    {
      name: "Portfolio Website",
      description:
        "Created a custom portfolio website to showcase my projects and skills, Designed and developed the website from scratch, Deployed the website to Vercel, etc.",
      technologies: ["Typescript", "React", "shadcn/ui", "Tailwind CSS"],
    },
    {
      name: "Raptor API (Backend Development)",
      description:
        "Developed a RESTful API for a fictional company called Raptor, Created endpoints for CRUD operations, Implemented user authentication, E-Mail verification, etc.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Zod",
        "Jest",
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-background">
      <Card className="mb-6">
        <CardContent className="flex flex-col md:flex-row items-center gap-4 pt-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
            <AvatarFallback>
              {personalInfo.name
                .split(" ") // Get initials from first and last name
                .map((n) => n[0]) // Get first letter of each name
                .join("")}{" "}
              {/* Join Initials */}
            </AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
            <p className="text-xl text-muted-foreground">
              {personalInfo.title}
            </p>
            <div className="mt-2 space-y-1">
              <p>{personalInfo.email}</p>
              <p>
                {personalInfo.location} | {personalInfo.website}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="default">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Professional Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm text-muted-foreground">
                {exp.organization.name} | {exp.period}
              </p>
              <p className="mt-2">{exp.description}</p>
              {index < experiences.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {education.map((edu, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">
                {edu.institution} | {edu.year}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Selected Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-1">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              {index < projects.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
