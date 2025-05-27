import { IoLogoGithub } from "react-icons/io5";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Define a type for our projects
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink?: string;
  githubBackend?: string;
  githubFrontend?: string;
  gitServices?: { name: string, link: string }[]
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "DoWhileLearn (e-learning platform)",
    description: "DoWhileLearn is a modern, scalable e-learning platform built with Node.js, TypeScript, Vite + React, and MongoDB, following a microservice architecture. It supports role-based access for admins, tutors, and students, and includes features like a real-time code editor, a Kafka-based event system, a chat service, a transcoder service with progress updates via WebSockets, and distributed workflow handling using the Saga pattern with a dedicated coordinator service.",
    image: "/website-images/doWhileLearn.png",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Redux", "Stripe", "Socket.io", "Micro-service", "gRPC", "Kafka", "S3", "Kubernetes", "Docker"],
    demoLink: "https://dowhilelearn.tech",
    gitServices: [
      {
        name: "All services",
        link: "https://github.com/ChackzWolf/DoWhileLearn_eLearningApp_Services.git",
      },
      {
        name: "Client",
        link: "https://github.com/ChackzWolf/DoWhileLearn_Client",
      },
      {
        name: "API-gateway",
        link: "https://github.com/ChackzWolf/DoWhileLearn_API_GATEWAY",
      },
      {
        name: "User-service",
        link: "https://github.com/ChackzWolf/DoWhileLearn_User_Service",
      },
      {
        name: "Tutor-service",
        link: "https://github.com/ChackzWolf/DoWhileLearn_Tutor_Service",
      },
      {
        name: "Admin-service",
        link: "https://github.com/ChackzWolf/DoWhileLearn_Admin_Service",
      },
      {
        name: "Auth-service",
        link: "https://github.com/ChackzWolf/DoWhileLearn_Auth_Service",
      },
      {
        name: "Course-service",
        link: "https://github.com/ChackzWolf/DoWhileLearn_Course_Service",
      },
      {
        name: "Transcoder-service",
        link: "https://github.com/ChackzWolf/DoWhileLearn_Transcoder_Service",
      },
      {
        name: "Chat-service",
        link: "https://github.com/ChackzWolf/DoWhileLearn_Chat_Service",
      },

      {
        name: "Order-service",
        link: "https://github.com/ChackzWolf/DoWhileLearn_Order_Service",
      },
      {
        name: "Payment-service",
        link: "https://github.com/ChackzWolf/DoWhileLearn_Payment_Service",
      },
    ]
  },
  {
    id: 2,
    title: "Fashion Galleria (e-commerce website)",
    description: "Fashion Galleria is a full-stack e-commerce platform built with Node.js (MVC architecture) and HBS as the view engine. It supports two roles: Admin and User. Users can search for products, place orders, cancel or return items, track shipments, and manage their cart. Admins can manage products, categories, banners, and orders, as well as block or unblock users and access an interactive dashboard. The platform is built for performance and smooth UX across all key shopping and management flows.",
    image: "/website-images/fashionGalleria.png",
    techStack: ["MongoDB", "Express", "hbs", "Node.js", "Razorpay", "Nodemailer"],
    demoLink: "https://fashiongalleria.sbs",
    githubLink: "https://github.com/ChackzWolf/Fashion-Galleria-ec",
  },
  {
    id: 3,
    title: "Volga Agro Combo Farm (under development)",
    description: "Volga Agro Combo Farm is a family-run agricultural business platform I'm building for my parents. The website is currently in development, with the frontend hosted on Vercel. It aims to showcase our farm's offerings, streamline customer inquiries, and provide information about products and operations. The project is being developed with modern frontend technologies and a focus on clarity, usability, and family legacy.",
    image: "/website-images/volgaFarm.png",
    techStack: ["React"],
    demoLink: "https://volga-farm-client.vercel.app",
    githubLink: "https://github.com/ChackzWolf/Volga-Farm-Client",
  },
  {
    id: 4,
    title: "URL Shortener",
    description: "URL Shortener is a full-stack application built with NestJS (backend) and Vite + React (frontend), featuring JWT authentication. It allows users to create and manage shortened URLs, tracks the number of visits per link, and supports deleting created URLs. The app is designed for simplicity, security, and efficient URL management.",
    image: "/website-images/urlShortener.png",
    techStack: ["MongoDB", "Express", "React", "Nest.js"],
    demoLink: "https://url-shortener-client-wine.vercel.app/login",
    githubFrontend: "https://github.com/ChackzWolf/Url-shortener-client",
    githubBackend: "https://github.com/ChackzWolf/Nestjs-Url-shortener-server",
  },
  {
    id: 5,
    title: "Task-Management App",
    description: "Task Management App is a realtime productivity tool built to practice Socket.io for live updates on task progress and status. It features a comprehensive dashboard for tracking tasks, secure user authentication using JWT, and seamless collaboration through instant data synchronization. The app emphasizes responsiveness, user experience, and efficient task tracking.",
    image: "/website-images/taskManagement.png",
    techStack: ["MongoDB", "Express", "Socket.io", "Node.js"],
    demoLink: "https://task-management-app-one-blue.vercel.app/login",
    githubFrontend: "https://github.com/ChackzWolf/Task-Management-App_client",
    githubBackend: "https://github.com/ChackzWolf/Task-Management-App_server",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="section-title text-portfolio-navy mb-16">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            
            
            <Card            
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.15 }}

             className="card-hover overflow-hidden bg-white border-0 shadow-md flex flex-col justify-between transition-all" >
              <div className=" overflow-hidden transition-all">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-navy">{project.title}</CardTitle>
                <CardDescription className="text-gray-500">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="skill-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-between gap-2">
                <Button asChild variant="outline" className="border-portfolio-lightYellow text-portfolio-lightYellow hover:bg-portfolio-lightYellow/10">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                {project.githubBackend && project.githubFrontend ? (
                  <div className="flex gap-2  items-center">
                    <IoLogoGithub className="text-3xl" />{"=>"}

                    <Button asChild variant="outline" className="border-portfolio-navy text-portfolio-navy hover:bg-portfolio-navy/10">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Frontend</a>
                    </Button>
                    <Button asChild variant="outline" className="border-portfolio-navy text-portfolio-navy hover:bg-portfolio-navy/10">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Backend</a>
                    </Button>
                  </div>)
                  : (
                    <div className="flex gap-2  items-center">
                       <IoLogoGithub className="text-3xl" />{"=>"}
                      {project.githubLink && (
                        <Button asChild variant="outline" className="border-portfolio-navy text-portfolio-navy hover:bg-portfolio-navy/10">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </Button>
                      )}
                      {project.gitServices && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="border-portfolio-navy text-portfolio-navy hover:bg-portfolio-navy/10">
                              GitHub
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {project.gitServices.map((service: { name: string; link: string }, index: number) => (
                              <DropdownMenuItem key={index}>
                                <a href={service.link} target="_blank" rel="noopener noreferrer mx-5">

                                  {`${index + 1} - ${service.name}`}
                                </a>
                              </DropdownMenuItem>
                            ))}

                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}

                    </div>
                  )
                }



              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
