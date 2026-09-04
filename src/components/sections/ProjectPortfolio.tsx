"use client";

import React from "react";
import { Zap, Shield, Sun, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  location: string;
  specs: string[];
  icon: React.ReactNode;
  accent: string;
}

const projects: Project[] = [
  {
    title: "150MW Solar Farm Integration",
    location: "Caribbean Utility",
    specs: ["DER interconnection study", "Protection coordination", "Grid impact assessment"],
    icon: <Sun className="w-5 h-5" />,
    accent: "border-l-amber-400",
  },
  {
    title: "Substation Protection Upgrade",
    location: "Ontario, Canada",
    specs: ["Relay replacement design", "SCADA integration", "Commissioning support"],
    icon: <Shield className="w-5 h-5" />,
    accent: "border-l-blue-500",
  },
  {
    title: "Mine Site Power System Design",
    location: "Latin America",
    specs: ["Remote power supply", "132kV transmission line", "Load flow & fault analysis"],
    icon: <Zap className="w-5 h-5" />,
    accent: "border-l-emerald-400",
  },
  {
    title: "Grid Modernization Study",
    location: "Southeast Asia",
    specs: ["Smart grid transition plan", "Distribution automation", "Reliability improvement"],
    icon: <BarChart3 className="w-5 h-5" />,
    accent: "border-l-violet-400",
  },
];

export default function ProjectPortfolio() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            Project Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl">
            Selected projects across North America, Latin America, the Caribbean, and Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`bg-white rounded-xl border border-slate-200 ${project.accent} border-l-4 p-5 sm:p-6 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-600">
                  {project.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400">{project.location}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {project.specs.map((spec, si) => (
                  <li key={si} className="text-xs sm:text-sm text-slate-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
