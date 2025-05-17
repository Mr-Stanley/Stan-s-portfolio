"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <img src="/portfolio.jpg?height=500&width=500" alt="About me" className="w-full  object-cover" />

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-2">About Me</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
            </motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              Hello! I'm Stanley, a passionate software engineer & Web3 Developer with a keen eye for solving problems, Building smarter solutions, and
              i approach every project with a keen ability to break down complex problems, crafting elegant, scalable solutions that stand the test of time.
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              My journey started few years ago, and since then, I've worked on a diverse
              range of personal projects and for large co-operations, my passion for clean 
              code and smarter solutions makes me a versatile developer capable of delivering end-to-end, impactful projects.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 py-4">
              <div>
                <h3 className="font-medium">Name:</h3>
                <p className="text-muted-foreground">Stanley Ugochukwu</p>
              </div>
              <div>
                <h3 className="font-medium">Email:</h3>
                <p className="text-muted-foreground">stanleyugoo5@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium">Location:</h3>
                <p className="text-muted-foreground">Yaba, Lagos State Nigeria.</p>
              </div>
              <div>
                <h3 className="font-medium">Availability:</h3>
                <p className="text-muted-foreground">Freelance & Full-time</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button className="group">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
