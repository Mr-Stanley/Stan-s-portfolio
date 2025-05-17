"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette, Database, Workflow, CodeSquare } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vite.js",
        "Tailwind CSS",
        "Framer Motion",
       ,
      ],
    },
    {
      category: "Backend Development",
      icon: Database,
      items: ["Node.js", "Express", "Java", "Springboot", "Python", "Django","MySql", "MongoDB", "Firebase", "REST API's"],
    },
    {
      category: "Tools & Deployment",
      icon: Workflow,
      items: ["Git", "GitHub", "VS Code","Railway", "Vercel", "Netlify", "Docker", "CI/CD", "Jest", "Postman"],
    },
    {
      category: "Smart Contract Development",
      icon: CodeSquare,
      items: ["Move", "Rust","Sui","Walrus"],
    },
  ]

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
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies as a software Engineer. Here are my main areas of expertise
            and the technologies I use.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background rounded-xl p-6 shadow-sm border border-border hover:border-primary/20 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="px-3 py-1.5 bg-muted rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-background rounded-xl p-8 border border-border">
            <h3 className="text-xl font-bold mb-6 text-center">My Development Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">01</span>
                </div>
                <h4 className="font-bold mb-2">Design Thinking & Research </h4>
                <p className="text-muted-foreground text-sm">
                  Understanding the problems, requirements and planning the architecture
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">02</span>
                </div>
                <h4 className="font-bold mb-2">Design & Development</h4>
                <p className="text-muted-foreground text-sm">Creating UI designs and implementing functionality</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">03</span>
                </div>
                <h4 className="font-bold mb-2">Testing & Deployment</h4>
                <p className="text-muted-foreground text-sm">Ensuring quality and deploying to production</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
