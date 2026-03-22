import React from 'react'
import { Github, Linkedin, Mail, Twitter, Instagram, ExternalLink, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/amansah23", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/amansah23/", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "University", href: "#university" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Aman  <span className="text-orange-400">Kumar </span>Sah
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Cloud Solution Architect & Node.js Specialist. 
              Transforming complex problems into scalable digital solutions.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-slate-700 group-hover:bg-orange-400 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <p className="text-sm">
              Currently open for new opportunities and cloud-based collaborations.
            </p>
            <a 
              href="mailto:amankumarsah232004@gmail.com" 
              className="flex items-center gap-3 p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-orange-400 transition-all group"
            >
              <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-orange-400 transition-colors">
                <Mail className="h-5 w-5 text-orange-400 group-hover:text-white" />
              </div>
              <span className="text-sm font-medium">contact@amankumarsah</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Aman Kumar Sah. Built with React, Vite & Shadcn UI.
          </p>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="text-slate-500 hover:text-orange-400 gap-2"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}