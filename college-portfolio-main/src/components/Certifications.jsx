import React from 'react'
import { ExternalLink, Calendar } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      name: "OCI 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "June 2023",
      image: "/genAi.png",
      verificationLink: "https://coursera.org/share/4a17e09c08109871ce11be9043a8499b",
    },
    {
      name: "Prompt Engineering for ChatGPT",
      issuer: "Coursera",
      date: "March 2023",
      image: "/coursera.png",
      verificationLink: "https://coursera.org/share/15b3640663baf8cdf34c2e4801724d14",
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      date: "April 2025",
      image: "/nptel.png",
      verificationLink: "https://www.coursera.org/verify/docker-kubernetes",
    },
    {
      name: "OCI 2025 Certified Artificial Intelligence Professional",
      issuer: "Oracle",
      date: "January 2025",
      image: "/ai.png",
      verificationLink: "https://drive.google.com/file/d/1BE89Thv5CwfdojCF2RogP5Osb_aYEg_P/view?usp=drive_link",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
          Certifications & Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200
                         transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group object-top"
            >
              {/* Image Container */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300x200?text=Certificate" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Text Content */}
              <div className="p-5 relative z-10">
                <h3 className="font-bold text-slate-800 mb-1 line-clamp-2 group-hover:text-orange-400 transition-colors min-h-[3rem]">
                  {cert.name}
                </h3>
                <p className="text-orange-400 text-sm font-medium mb-2">{cert.issuer}</p>
                
                <div className="flex items-center text-slate-500 text-xs mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{cert.date}</span>
                </div>

                {cert.verificationLink && (
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-slate-700 hover:text-orange-400 transition-colors border-t pt-3 w-full"
                  >
                    <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                    <span>Verify Credential</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}