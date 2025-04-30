"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiSupabase,
  SiVercel,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PHP", icon: SiPhp },
  { name: "Supabase", icon: SiSupabase },
  { name: "Vercel", icon: SiVercel },
  { name: "GitHub", icon: SiGithub },
];

// animation variant を custom 対応に
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const TechStack = () => {
  return (
    <section className="mb-20 py-20 bg-gray-50" id="tech-stack">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-10">
          Tech Stack
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
          {skills.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={name}
              className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
            >
              <Icon className="text-4xl mb-2" />
              <span className="text-sm">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
