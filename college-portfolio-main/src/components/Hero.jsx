import React from 'react';
import { Mail, Phone, Linkedin, Github, Music, Download, ArrowRight } from "lucide-react";

/**
 * If you don't have a pre-configured shadcn Button, 
 * this local sub-component handles the styling.
 */
const Button = ({ children, className, variant, onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-orange-400 text-white hover:bg-orange-500",
    outline: "border border-orange-200 bg-transparent hover:bg-orange-50 text-orange-500"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variant === 'outline' ? variants.outline : variants.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function Hero() {
  return (
    <section id="hero" className="py-20 md:py-28">
      <div className="container px-4 md:px-6 mx-auto mt-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* Image Container */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl
                         transition-transform duration-500 hover:scale-105 group"
            >
              <img
                src="/aman.png" // Ensure this image is in your /public folder
                alt="Aman Kumar Sah"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <div className="inline-flex items-center mb-4">
              {/* <Music className="h-4 w-4 mr-1" />
              <span>Spotify Popular Creator</span> */}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-orange-400">
              Aman Kumar Sah
            </h1>

            <h2 className="text-xl md:text-2xl text-orange-300 font-medium mb-6">
              Full Stack Web Developer | DevOps | AI | Cloud
            </h2>

            <p className="text-gray-600 mb-8 max-w-2xl">
              I am Aman Kumar Chaudhary, currently pursuing my B.Tech in Computer Engineering at Lovely Professional
              University. With expertise in Cloud Computing, Web Development, and AI, I build scalable applications and innovative
              solutions that solve real-world problems.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="mailto:amankashya232004@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-orange-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
              <a
                href="tel:+919334739797"
                className="flex items-center gap-2 text-gray-700 hover:text-orange-400 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Phone</span>
              </a>
              <a
                href="https://www.linkedin.com/in/amansah231"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-orange-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/amansah23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-orange-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="group">
                <a href="/Align cv.jpg" download className="flex gap-2 items-center">
                  <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                className="group"
                onClick={() => window.location.href = "mailto:amankashya232004@gmail.com"}
              >
                Let's Connect
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}