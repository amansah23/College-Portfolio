import React from 'react'
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Food Delivery Website with Realtime Order Tracking",
      image: "/blog.png", // Ensure this image is in your public folder
      date: "Dec’ 25 – Feb’ 26",
      description:
        "A full-stack MERN application featuring real-time tracking via Socket.io and Google Maps. Includes secure Razorpay integration and Google OAuth for seamless user onboarding.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Google Maps API", "Razorpay"],
      github: "https://github.com/amansah23", 
      live: "https://your-live-link.com",
    },
    {
      title: "AI-Powered Student Dropout Prediction System",
      image: "/chaloAi.png", // Ensure this image is in your public folder
      date: "Oct’ 25 – Nov’ 25",
      description:
        "A machine learning integration that predicts dropout risks using Logistic Regression and XGBoost. Features a React.js dashboard to visualize real-time risk assessment insights.",
      technologies: ["React.js", "Node.js", "Python", "Machine Learning", "RESTful APIs", "Tailwind CSS"],
      github: "https://github.com/amansah23",
      live: "https://your-live-link.com",
    },
    {
      title: "CodeStreak – Organize and Analyze DSA Problems",
      image: "/taskManager.png", // Ensure this image is in your public folder
      date: "Jul’ 25 – Sep’ 25",
      description:
        "A productivity platform for developers to track coding streaks and DSA progress. Built with a personalized dashboard and JWT authentication for secure revision management.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Vercel", "JWT"],
      github: "https://github.com/amansah23",
      live: "https://your-live-link.com",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">Projects Portfolio</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Showcasing full-stack expertise in MERN, Real-time systems, and AI-driven data insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 
                         transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Project+Preview" }}
                />
                <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold rounded-full shadow-sm">
                        {project.date}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-orange-400 text-white text-[10px] font-bold uppercase tracking-wider rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                         <span className="px-2 py-1 bg-slate-700 text-white text-[10px] font-bold rounded">
                            +{project.technologies.length - 4} More
                         </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-3 group-hover:text-orange-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex gap-4 border-t pt-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}