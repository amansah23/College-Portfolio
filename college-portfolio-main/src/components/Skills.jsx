import React, { useEffect, useRef } from 'react';
import { Cloud, Code, Database, Server, GitBranch, Globe } from "lucide-react";

const skills = [
  {
    title: "Node.js Development",
    icon: Server,
    color: "from-orange-400 to-amber-400",
    lightBg: "bg-orange-50",
    accent: "text-orange-500",
    description:
      "Expert in building scalable backend services and APIs using Node.js, Express, and modern JavaScript.",
  },
  {
    title: "AWS Cloud Services",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    lightBg: "bg-sky-50",
    accent: "text-sky-500",
    description:
      "Experience with EC2, S3, Lambda, and other AWS services for building scalable cloud solutions.",
  },
  {
    title: "Full-Stack JavaScript",
    icon: Code,
    color: "from-amber-400 to-orange-500",
    lightBg: "bg-amber-50",
    accent: "text-amber-600",
    description:
      "Proficient in modern JavaScript frameworks including React, Next.js, and Node.js ecosystem.",
  },
  {
    title: "Docker & Kubernetes",
    icon: Server,
    color: "from-blue-500 to-indigo-500",
    lightBg: "bg-blue-50",
    accent: "text-blue-600",
    description:
      "Containerization and orchestration for deploying and managing microservices architecture.",
  },
  {
    title: "Database Management",
    icon: Database,
    color: "from-purple-400 to-violet-500",
    lightBg: "bg-purple-50",
    accent: "text-purple-600",
    description:
      "Expertise in MongoDB, PostgreSQL, and Redis for efficient data storage and retrieval.",
  },
  {
    title: "CI/CD & DevOps",
    icon: GitBranch,
    color: "from-rose-400 to-pink-500",
    lightBg: "bg-rose-50",
    accent: "text-rose-500",
    description:
      "Implementing continuous integration and deployment pipelines using GitHub Actions, Jenkins, and AWS tools.",
  },
  {
    title: "API Development",
    icon: Globe,
    color: "from-teal-400 to-emerald-500",
    lightBg: "bg-teal-50",
    accent: "text-teal-600",
    description:
      "Designing and building RESTful and GraphQL APIs with Node.js for seamless frontend-backend integration.",
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('[data-card]');
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.getAttribute('data-delay') || '0';
            el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(32px)';
      card.setAttribute('data-delay', (i * 0.08).toFixed(2));
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 bg-[#fdfaf6] overflow-hidden"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Background blobs matching hero */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-50 to-rose-100 opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-orange-300 to-transparent opacity-30" />

      <div className="relative container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <p
            className="text-sm uppercase tracking-[0.3em] text-orange-400 font-semibold mb-3"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-400">
              Skills
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto md:mx-0 text-base leading-relaxed">
            Specialized in Node.js and full-stack development, with deep expertise across cloud infrastructure and DevOps tooling.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                data-card
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm
                           p-6 flex flex-col gap-4 cursor-default
                           hover:shadow-xl hover:-translate-y-1.5 hover:border-orange-100
                           transition-all duration-300 overflow-hidden"
              >
                {/* Gradient hover wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${skill.lightBg} flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-6 w-6 ${skill.accent}`} />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {skill.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom gradient bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${skill.color}
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}