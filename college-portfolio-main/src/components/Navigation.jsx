import { useState, useEffect } from "react"
import { Menu, X, Music } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Internships", href: "#internships" },
    { name: "University", href: "#university" },
    { name: "Achievements", href: "#achievements" },
    { name: "Resume", href: "#resume" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text text-orange-400">Aman Kumar Sah </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors
                ${
                  activeSection === link.href.substring(1)
                    ? "text-orange-400 bg-orange-50"
                    : "text-sand-700 hover:text-orange-400 hover:bg-sand-50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-sand-700 hover:text-orange-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md">
          <div className="container px-4 py-4">

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
                  ${
                    activeSection === link.href.substring(1)
                      ? "text-orange-400 bg-emerald-50"
                      : "text-sand-700 hover:text-orange-400 hover:bg-sand-50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

          </div>
        </div>
      )}
    </header>
  )
}