import React from 'react'
import { Download, FileText, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Professional Resume
          </h2>
          <div className="h-1 w-20 bg-purple-600 rounded-full"></div>
        </div>

        <div className="flex flex-col items-center">
          {/* Resume Preview Container */}
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-slate-200 w-full max-w-3xl mb-10 transition-all hover:border-purple-200">
            <div className="relative group aspect-[8.5/11] w-full bg-slate-100 flex items-center justify-center rounded-xl mb-8 overflow-hidden border border-slate-100 shadow-inner">
              <img
                src="/image.png"
                alt="Aman Kumar Sah Resume"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => { e.target.src = "https://via.placeholder.com/800x1000?text=Resume+Preview" }}
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 p-3 rounded-full shadow-lg">
                  <Search className="h-6 w-6 text-purple-700" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary Download Button using Shadcn */}
              <a href="/Resume.jpg" download="Ayush_Kumar_Singh_Resume.jpg" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto gap-2 bg-purple-700 hover:bg-orange-400 text-white font-bold py-6 px-8 rounded-xl transition-all shadow-lg hover:shadow-orange-200">
                  <Download className="h-5 w-5" />
                  <span>Download Specialized CV</span>
                </Button>
              </a>

              {/* Secondary View Button */}
              <a href="/Align.jpg" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto gap-2 py-6 px-8 rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50 font-bold">
                  <FileText className="h-5 w-5" />
                  <span>View Full Screen</span>
                </Button>
              </a>
            </div>
          </div>

          <p className="text-slate-500 text-sm italic">
            Last updated: March 2026 • Cloud Solution Architect
          </p>
        </div>
      </div>
    </section>
  )
}