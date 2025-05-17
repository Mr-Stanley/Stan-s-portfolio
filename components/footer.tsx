"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

 const socialLinks = [
    { icon: Github, href: "https://github.com/Mr-Stanley", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/okonkwo-stanley/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Stan_Coder", label: "Twitter" },
  ]

  return (
    <footer className="bg-muted/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4 inline-block"
            >
              Portfolio
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              A passionate software engineer focused on solving problems and profering solutions to real life problems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.div key={index} whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="bg-background hover:bg-primary hover:text-white p-2.5 rounded-full transition-colors border border-border"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Email: </span>
                <Link href="mailto:john@example.com" className="hover:text-primary transition-colors">
                  Stanleyugoo5@gmail.com               
                </Link>
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Phone: </span>
                <Link href="tel:+234 814-701-4806" className="hover:text-primary transition-colors">
                  +234 814-701-4806
                </Link>
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Location: </span>
                Lagos State, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">© {currentYear} Stanley Ugochukwu. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> 
          </p>
        </div>
      </div>
    </footer>
  )
}
