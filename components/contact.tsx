"use client"

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  link: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error";
  message: string;
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: "Email",
      value: "Stanleyugoo5@gmail.com",
      link: "mailto:Stanleyugoo5@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 814-701-4806",
      link: "tel:+2348147014806",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lagos State, Nigeria",
      link: "#",
    },
  ];

  const socialLinks: SocialLink[] = [
    { icon: Github, href: "https://github.com/Mr-Stanley", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/okonkwo-stanley/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Stan_Coder", label: "Twitter" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      if (result.text === "OK") {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can I help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                {status && (
                  <p
                    className={`text-sm ${
                      status.type === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
                <Button
                  type="submit"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <Link
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="bg-muted hover:bg-primary hover:text-white p-2.5 rounded-full transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance work and full-time positions. If you have a project that needs my
                expertise, don't hesitate to reach out.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}














// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card } from "@/components/ui/card"
// import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react"
// import Link from "next/link"
// import emailjs from "@emailjs/browser";





// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// interface ContactInfo {
//   icon: React.ComponentType<{ className?: string }>;
//   title: string;
//   value: string;
//   link: string;
// }

// interface SocialLink {
//   icon: React.ComponentType<{ className?: string }>;
//   href: string;
//   label: string;
// }

// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// interface FormStatus {
//   type: "success" | "error";
//   message: string;
// }

// export default function Contact() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email",
//       value: "Stanleyugoo5@gmail.com",
//       link: "Stanleyugoo5@gmail.com",
//     },
//     {
//       icon: Phone,
//       title: "Phone",
//       value: "+234 814-701-4806",
//       link: "tel:+2348147014806",
//     },
//     {
//       icon: MapPin,
//       title: "Location",
//       value: "Lagos State, Nigeria",
//       link: "#",
//     },
//   ]

//   const socialLinks = [
//     { icon: Github, href: "https://github.com/Mr-Stanley", label: "GitHub" },
//     { icon: Linkedin, href: "https://www.linkedin.com/in/okonkwo-stanley/", label: "LinkedIn" },
//     { icon: Twitter, href: "https://x.com/Stan_Coder", label: "Twitter" },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   }

//   return (
//     <section id="contact" className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
//           <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6" />
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
//           </p>
//         </motion.div>

//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid lg:grid-cols-3 gap-8"
//         >
//           <motion.div variants={itemVariants} className="lg:col-span-2">
//             <Card className="p-6 shadow-sm">
//               <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
//               <form className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label htmlFor="name" className="text-sm font-medium">
//                       Your Name
//                     </label>
//                     <Input id="name" placeholder="John Doe" required />
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm font-medium">
//                       Your Email
//                     </label>
//                     <Input id="email" type="email" placeholder="john@example.com" required />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="subject" className="text-sm font-medium">
//                     Subject
//                   </label>
//                   <Input id="subject" placeholder="How can I help you?" required />
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-sm font-medium">
//                     Message
//                   </label>
//                   <Textarea id="message" placeholder="Your message here..." rows={6} required />
//                 </div>
//                 <Button type="submit" className="w-full md:w-auto">
//                   <Send className="mr-2 h-4 w-4" />
//                   Send Message
//                 </Button>
//               </form>
//             </Card>
//           </motion.div>

//           <motion.div variants={itemVariants} className="space-y-6">
//             <Card className="p-6 shadow-sm">
//               <h3 className="text-xl font-bold mb-6">Contact Information</h3>
//               <div className="space-y-4">
//                 {contactInfo.map((item, index) => {
//                   const Icon = item.icon
//                   return (
//                     <div key={index} className="flex items-start">
//                       <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
//                         <Icon className="h-5 w-5" />
//                       </div>
//                       <div>
//                         <h4 className="font-medium">{item.title}</h4>
//                         <Link href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
//                           {item.value}
//                         </Link>
//                       </div>
//                     </div> 
//                   )
//                 })}
//               </div>

//               <div className="mt-8">
//                 <h4 className="font-medium mb-4">Follow Me</h4>
//                 <div className="flex gap-3">
//                   {socialLinks.map((social, index) => {
//                     const Icon = social.icon
//                     return (
//                       <Link
//                         key={index}
//                         href={social.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label={social.label}
//                         className="bg-muted hover:bg-primary hover:text-white p-2.5 rounded-full transition-colors"
//                       >
//                         <Icon className="h-5 w-5" />
//                       </Link>
//                     )
//                   })}
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6 shadow-sm">
//               <h3 className="text-xl font-bold mb-4">Availability</h3>
//               <p className="text-muted-foreground mb-4">
//                 I'm currently available for freelance work and full-time positions. If you have a project that needs my
//                 expertise, don't hesitate to reach out.
//               </p>
//               <div className="flex items-center">
//                 <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
//                 <span className="text-sm">Available for new projects</span>
//               </div>
//             </Card>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
