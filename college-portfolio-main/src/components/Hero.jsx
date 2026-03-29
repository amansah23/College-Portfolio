import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, Download, ArrowRight } from "lucide-react";

const Button = ({ children, className = "", variant, onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-300/40 hover:shadow-orange-400/60 hover:scale-105",
    outline: "border-2 border-orange-400 bg-transparent text-orange-500 hover:bg-orange-50 hover:scale-105",
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

const Tag = ({ children }) => (
  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-orange-100 text-orange-500 border border-orange-200">
    {children}
  </span>
);

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('[data-animate]');
    if (!els) return;
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#fdfaf6]"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Background decorative blobs */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-orange-50 to-amber-100 opacity-50 blur-3xl pointer-events-none" />

      {/* Geometric accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-orange-300 to-transparent opacity-40" />

      <div ref={containerRef} className="relative container mx-auto px-6 md:px-16 py-24 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* ── Left / Text ── */}
          <div className="order-2 md:order-1 space-y-6">
            <div data-animate className="flex flex-wrap gap-2">
              <Tag>Full Stack</Tag>
              <Tag>DevOps</Tag>
              <Tag>AI</Tag>
              <Tag>Cloud</Tag>
            </div>

            <div data-animate>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-400 font-semibold mb-2"
                 style={{ fontFamily: "'Courier New', monospace" }}>
                Hello, I'm
              </p>
              <h1
                className="text-5xl md:text-6xl font-bold leading-tight text-gray-900"
                style={{ letterSpacing: '-0.02em' }}
              >
                Aman<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-400">
                  Kumar Sah
                </span>
              </h1>
            </div>

            <p data-animate className="text-gray-500 text-base leading-relaxed max-w-lg"
               style={{ fontFamily: "'Georgia', serif" }}>
              B.Tech Computer Engineering student at Lovely Professional University. I craft scalable
              web applications, cloud-native systems, and AI-powered solutions that tackle real-world problems.
            </p>

            {/* Social links */}
            <div data-animate className="flex flex-wrap gap-5">
              {[
                { href: "mailto:amankashya232004@gmail.com", icon: <Mail className="h-4 w-4" />, label: "Email" },
                { href: "tel:+919334739797", icon: <Phone className="h-4 w-4" />, label: "Phone" },
                { href: "https://www.linkedin.com/in/amansah231", icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn" },
                { href: "https://github.com/amansah23", icon: <Github className="h-4 w-4" />, label: "GitHub" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors duration-200 group"
                >
                  <span className="p-2 rounded-full bg-white border border-gray-200 shadow-sm group-hover:border-orange-300 group-hover:shadow-orange-100 transition-all duration-200">
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div data-animate className="flex flex-wrap gap-4 pt-2">
              <Button>
                <a href="/Align cv.jpg" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = "mailto:amankashya232004@gmail.com"}
                className="group"
              >
                Let's Connect
                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* ── Right / Image ── */}
          <div data-animate className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Rotating ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-orange-300 opacity-60"
                style={{
                  width: 'calc(100% + 24px)', height: 'calc(100% + 24px)',
                  top: '-12px', left: '-12px',
                  animation: 'spin 18s linear infinite',
                }}
              />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 via-orange-300 to-rose-300 blur-2xl opacity-30 scale-110" />

              {/* Photo frame */}
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                           border-4 border-white shadow-2xl shadow-orange-200/60
                           transition-transform duration-500 hover:scale-105 group"
              >
                <img
                  src="/aman.png"
                  alt="Aman Kumar Sah"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 border border-orange-100"
                style={{ animation: 'floatY 3s ease-in-out infinite' }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700" style={{ fontFamily: "'Courier New', monospace" }}>
                  Open to Work
                </span>
              </div>

              {/* Decorative dot grid */}
              <div className="absolute -top-6 -right-6 grid grid-cols-4 gap-1.5 opacity-30">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}