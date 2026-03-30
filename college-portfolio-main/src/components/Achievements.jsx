import React, { useEffect, useRef } from 'react';
import { Trophy, Award, Star, Globe } from "lucide-react";

const achievements = [
  {
    title: "Smart India Hackathon",
    description:
      "Participated in the internal round of the Smart India Hackathon, collaborating in a team to develop innovative solutions for real-world problem statements.",
    icon: Globe,
    color: "from-emerald-400 to-teal-500",
    lightBg: "bg-emerald-50",
    accent: "text-emerald-600",
    featured: true,
    label: "Featured",
  },
  {
    title: "Full-Stack & AI Projects",
    description:
      "Successfully built multiple full-stack and AI-based projects from scratch, delivering end-to-end solutions across the web and intelligence stack.",
    icon: Star,
    color: "from-amber-400 to-orange-500",
    lightBg: "bg-amber-50",
    accent: "text-amber-500",
    featured: false,
  },
  {
    title: "AI & Cloud Certifications",
    description:
      "Earned industry-recognised certifications in AI and Cloud Computing, validating expertise in cutting-edge technologies.",
    icon: Award,
    color: "from-orange-400 to-rose-400",
    lightBg: "bg-orange-50",
    accent: "text-orange-500",
    featured: false,
  },
];

export default function Achievements() {
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
            el.style.transition = `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`;
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
      card.setAttribute('data-delay', (i * 0.1).toFixed(2));
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-24 bg-[#fdfaf6] overflow-hidden"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-gradient-to-r from-amber-100 via-orange-100 to-rose-100 opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-gradient-to-tl from-orange-50 to-amber-100 opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-orange-300 to-transparent opacity-30" />

      <div className="relative container mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <p
            className="text-sm uppercase tracking-[0.3em] text-orange-400 font-semibold mb-3"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Milestones
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Achievements &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-400">
              Recognition
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto md:mx-0 text-base leading-relaxed">
            A snapshot of key milestones — from national-level hackathons to hands-on projects and certifications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                data-card
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm
                           p-7 flex flex-col gap-5 cursor-default
                           hover:shadow-xl hover:-translate-y-1.5 hover:border-orange-100
                           transition-all duration-300 overflow-hidden"
              >
                {/* Gradient hover wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                />

                {/* Top row: icon + badge */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-14 h-14 rounded-xl ${item.lightBg} flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`h-7 w-7 ${item.accent}`} />
                  </div>
                  {item.featured && (
                    <span
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500 text-white shadow-sm"
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom gradient bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color}
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