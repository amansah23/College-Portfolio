import React from 'react';
import { Cloud, Code, Database, Server, GitBranch, Globe } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      title: "Node.js Development",
      icon: <Server className="h-10 w-10 text-orange-400" />,
      description:
        "Expert in building scalable backend services and APIs using Node.js, Express, and modern JavaScript.",
    },
    {
      title: "AWS Cloud Services",
      icon: <Cloud className="h-10 w-10 text-sky-600" />,
      description: "Experience with EC2, S3, Lambda, and other AWS services for building scalable cloud solutions.",
    },
    {
      title: "Full-Stack JavaScript",
      icon: <Code className="h-10 w-10 text-amber-600" />,
      description: "Proficient in modern JavaScript frameworks including React, Next.js, and Node.js ecosystem.",
    },
    {
      title: "Docker & Kubernetes",
      icon: <Server className="h-10 w-10 text-blue-600" />,
      description: "Containerization and orchestration for deploying and managing microservices architecture.",
    },
    {
      title: "Database Management",
      icon: <Database className="h-10 w-10 text-purple-600" />,
      description: "Expertise in MongoDB, PostgreSQL, and Redis for efficient data storage and retrieval.",
    },
    {
      title: "CI/CD & DevOps",
      icon: <GitBranch className="h-10 w-10 text-rose-600" />,
      description:
        "Implementing continuous integration and deployment pipelines using GitHub Actions, Jenkins, and AWS tools.",
    },
    {
      title: "API Development",
      icon: <Globe className="h-10 w-10 text-teal-600" />,
      description:
        "Designing and building RESTful and GraphQL APIs with Node.js for seamless frontend-backend integration.",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
          Technical Skills
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Specialized in Node.js development with expertise across the full JavaScript ecosystem and cloud technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 transition-all duration-300 
                         hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-100 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl group-hover:bg-slate-900 transition-colors duration-500">
                  {/* Clones the icon to allow color change on hover */}
                  {React.cloneElement(skill.icon, { 
                    className: `${skill.icon.props.className} group-hover:text-white transition-colors duration-500` 
                  })}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-orange-400 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}