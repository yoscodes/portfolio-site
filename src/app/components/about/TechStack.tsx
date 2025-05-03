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
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "PHP", icon: SiPhp, color: "#8892be" },
  { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
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
    <section className="mb-20 py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-10">
          Skills
        </h2>
        <p className="text-gray-600 mb-10">
          学習・業務・個人開発を通して習得した技術一覧です。
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
          {skills.map(({ name, icon: Icon, color }, i) => (
            <motion.div
              key={name}
              className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
            >
              <Icon
                className="text-4xl mb-2"
                style={{ color }}
                title={name}
                aria-label={name}
              />

              <span className="text-sm text-gray-700">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
