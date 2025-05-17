"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Mr-Stanley", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/okonkwo-stanley/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Stan_Coder", label: "Twitter" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[60%] w-[140%] h-[140%] rounded-full bg-gradient-to-br from-purple-500/20 via-primary/20 to-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-[40%] -left-[60%] w-[140%] h-[140%] rounded-full bg-gradient-to-tr from-blue-500/20 via-primary/20 to-purple-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-primary font-medium"
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold"
          >
            <span className="block">Stanley Ugochukwu</span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-muted-foreground text-lg max-w-md"
          >
           Tackling challenges with wit and grit | Problem solver first, critical thinker  | Building smarter solutions 🚀
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4"

            
          >
            <Button size="lg" className="group">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-4 pt-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-background hover:bg-muted p-2.5 rounded-full transition-colors border border-border"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative mx-auto"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10" />
            <img src="/portfolio1.jpg?" alt="Stanley Ugochukwu" className="w-full  object-cover" />
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute -top-4 -right-4 bg-background shadow-lg rounded-lg p-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
          >
            <div className="text-primary text-xl font-bold">2+</div>
            <div className="text-xs">Years Experience</div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 bg-background shadow-lg rounded-lg p-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
          >
            <div className="text-primary text-xl font-bold">20+</div>
            <div className="text-xs">Projects Completed</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
