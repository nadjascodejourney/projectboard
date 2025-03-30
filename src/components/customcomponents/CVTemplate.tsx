import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AboutCard from "./AboutCard";

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
    avatar: "/src/assets/icons/profilpic-32x32.png",
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "C#",
    ".NET",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "SQL Server",
    "Figma",
    "UI/UX Design",
    "Git",
    "GitHub",
    "GitLab",
    "Sass/SCSS",
    "Tailwind CSS",
    "Zod",
    "Jest/Vitest",
    "Three.js",
    "React Three Fiber",
    "shadcn/ui",
    "Ant Design",
  ];

  const experiences: Experience[] = [
    {
      title: "Software Developer and Webdesigner (full-time)",
      organization: {
        name: "Synnotech AG, Regensburg",
        type: "company",
      },
      period: "11-2024 until today",
      description:
        "Fullstack Development with a focus on frontend development with React, Typescript and diverse libraries, Backend development with C# and .NET, Database management with SQL Server, Enterprise UX/UI Design with Figma, Accessibility optimization, etc.",
    },
    {
      title: "Vocational Training for Webdevelopment (MERN Stack, full-time)",
      organization: {
        name: "Digital Career Institute",
        type: "institution",
      },
      period: "09-2023 until 10-2024",
      description:
        "Successfully completed the vocational training for web development with a focus on the MERN stack. Gained practical experience in building web applications, using and creating RESTful APIs and database management with a focus on non-relational Databases. Elaborated deepened skills in front-end development with React, CSS and UI component libraries. Developed hands-on projects both in individual and team work, and acquired problem-solving skills essential for modern web development.",
    },
    {
      title: "Head of Museum Education (full-time)",
      organization: {
        name: "Sudetendeutsches Museum",
        type: "company",
      },

      period: "01-2022 until 05-2023",
      description:
        "Lead museum educator: Conceptualization of the educational program for different target groups, on-site and digital. Developing of guided tours for children, Realization of workshops for adults and retired people to increase visitors engagement with external cooperation partners, Content design of media stations, Support of the website in easy language, etc.",
    },
    {
      title: "Museum Educator (full-time)",

      organization: {
        name: "Kunstforum Ostdeutsche Galerie",
        type: "company",
      },

      period: "08-2020 until 11-2021",
      description:
        "Development and production of an audio guide by and for children and families in collaboration with schools in the region, Workshops for children and schools, Creation of educational materials, etc.",
    },
    {
      title: "Freelance Museum Educator (part-time)",

      organization: {
        name: "Kunstforum Ostdeutsche Galerie",
        type: "company",
      },

      period: "11-2017 until 08-2020",
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
    <section className="container bg-background">
      <h2 className="text-3xl font-bold mb-5">About Nadja Probst</h2>

      <Card className="mb-6">
        <CardContent className="flex flex-col md:flex-row gap-4 pt-6">
          <section className="text-center md:text-left">
            <p className="text-xl text-muted-foreground">
              {personalInfo.title}
            </p>
            <div className="mt-2 space-y-1">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.location}</p>
            </div>
          </section>
        </CardContent>
      </Card>

      <AboutCard profileImageUrl="/icons/Nadja_Probst-black.jpg" />

      <Card className="mb-6 bg-transparent">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <section className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="default">
                {skill}
              </Badge>
            ))}
          </section>
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

      <Card className="mb-6 bg-transparent">
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
          <CardTitle>Personal Projects</CardTitle>
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
    </section>
  );
}
