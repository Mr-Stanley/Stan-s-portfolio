"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Donation Platform",
      description:
        "A fully responsive donation platform with payments integration, , search for charities and donation directly to charities.",
      category: "Web Application",
      technologies: ["React", "Express", "Tailwind CSS", "Paystack", "MongoDB"],
      github: "https://github.com/Mr-Stanley/stakayProject_backend",
      demo: "https://stan-kay-donation-frontend-idlj.vercel.app/",
    },
    {
      id: 2,
      title: "Furniture Display Web Application",
      description:
        "Fully responsive web application for furniture display brand.",
      category: "Web Application",
      technologies: ["React", "Typescript", "Framer Motion", "Tailwind CSS"],
      github: "#",
      demo: "https://gsm-furniture.vercel.app/",
    },
    {
      id: 3,
      title: "Vomzer Social chats Web Application on Blockchain",
      description: "A chats application that utilises sui for payments.",
      category: "Blockchain",
      technologies: ["Java", "Move", "Node.js", "React", "Tailwind CSS"],
      github: "https://github.com/Project-Vomzer/Vomzer_socials_smartContract.git",
      demo: "https://github.com/Project-Vomzer/Vomzer_socials_smartContract.git",
    },
    {
      id: 4,
      title: "A CRUD Application",
      description: "A simple CRUD application with authentication.",
      category: "Backend Development",
      technologies: ["Java", "MongoDb", "Springboot"],
      github: "https://github.com/Mr-Stanley/Java_CRUD.git",
      demo: "https://github.com/Mr-Stanley/Java_CRUD.git",
    },
  ]

  const filters = ["All", "Web Application", "Backend Development", "Blockchain"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects showcasing my expertise in web development, smart-contract, and problem-solving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link
                      href={project.github}
                      className="bg-background p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.demo}
                      className="bg-background p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-2">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-muted px-2.5 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={project.demo} className="text-primary font-medium inline-flex items-center group/link">
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
