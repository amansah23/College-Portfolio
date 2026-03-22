// import React from 'react'
// import { Trophy, Award, Star, Music } from "lucide-react"

// export default function Achievements() {
//   const achievements = [
//     {
//       title: "Spotify Popular Creator",
//       description:
//         "Recognized as a Popular Creator on Spotify with over 100 Million views on my Panel.",
//       icon: <Music className="h-8 w-8 text-green-600" />,
//       highlight: true,
//     },
//     {
//       title: "Runner-up in One India Competition",
//       description: "Secured 2nd Runner-Up in the prestigious One India Competition, representing Uttar Pradesh.",
//       icon: <Trophy className="h-8 w-8 text-amber-500" />,
//       highlight: false,
//     },
//     {
//       title: "AWS Community Builder",
//       description: "Selected as an AWS Community Builder for contributions to cloud computing knowledge sharing.",
//       icon: <Award className="h-8 w-8 text-amber-500" />,
//       highlight: false,
//     },
//     {
//       title: "Team Leadership Success",
//       description: "Led a team of 4 developers to deliver a complex project two weeks ahead of schedule.",
//       icon: <Star className="h-8 w-8 text-emerald-600" />,
//       highlight: true,
//     },
//   ]

//   return (
//     <section id="achievements" className="py-20 bg-gradient-to-b from-slate-50 to-white">
//       <div className="container px-4 md:px-6 mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
//           Achievements & Recognition
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {achievements.map((achievement, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl p-8 border transition-all duration-500 
//                         hover:shadow-2xl hover:-translate-y-2 flex flex-col sm:flex-row items-start gap-6
//                         ${
//                           achievement.highlight
//                             ? "bg-gradient-to-br from-white via-emerald-50/30 to-white border-emerald-200 shadow-emerald-100/50 shadow-lg"
//                             : "bg-white border-slate-200 shadow-sm"
//                         }`}
//             >
//               <div
//                 className={`flex-shrink-0 p-4 rounded-xl transition-colors duration-300 ${
//                   achievement.highlight ? "bg-emerald-100" : "bg-slate-100"
//                 }`}
//               >
//                 {achievement.icon}
//               </div>
              
//               <div className="flex-1">
//                 <div className="flex flex-wrap items-center gap-2 mb-3">
//                   <h3 className={`text-xl font-bold tracking-tight ${achievement.highlight ? "text-emerald-900" : "text-slate-800"}`}>
//                     {achievement.title}
//                   </h3>
//                   {achievement.highlight && (
//                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-600 text-white shadow-sm">
//                       Featured
//                     </span>
//                   )}
//                 </div>
//                 <p className={`text-sm leading-relaxed ${achievement.highlight ? "text-emerald-800/80" : "text-slate-600"}`}>
//                   {achievement.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }