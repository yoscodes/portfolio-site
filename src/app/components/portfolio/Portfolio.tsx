"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// ── Per-project icons ────────────────────────────────────────
const s = { fill: "none", stroke: "var(--accent)", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const v = { width: 16, height: 16, viewBox: "0 0 24 24", "aria-hidden": true as const };

// Concept Forge: lightbulb (ideation / AI concept)
const IconLightbulb = (
  <svg {...v} {...s}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
  </svg>
);

// PPL-tracker: dumbbell (strength training log)
const IconDumbbell = (
  <svg {...v} {...s}>
    <path d="M14.4 14.4 9.6 9.6"/>
    <path d="M18.657 5.343a4 4 0 0 1 0 5.657l-1.06 1.06-5.657-5.657 1.06-1.06a4 4 0 0 1 5.657 0z"/>
    <path d="M5.343 18.657a4 4 0 0 1 0-5.657l1.06-1.06 5.657 5.657-1.06 1.06a4 4 0 0 1-5.657 0z"/>
  </svg>
);

// SyncMind: refresh arrows (log → AI analysis → feedback loop)
const IconSync = (
  <svg {...v} {...s}>
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);

// ポモドーロタイマー: clock (focus timer)
const IconClock = (
  <svg {...v} {...s}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

// tone palette: swatches / palette (expression color palette)
const IconPalette = (
  <svg {...v} {...s}>
    <circle cx="13.5" cy="6.5" r=".5" fill="var(--accent)"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="var(--accent)"/>
    <circle cx="8.5"  cy="7.5"  r=".5" fill="var(--accent)"/>
    <circle cx="6.5"  cy="12.5" r=".5" fill="var(--accent)"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);

const projects = [
  {
    icon: IconLightbulb,
    title: "Concept Forge",
    description: [
      "事業案の言語化に詰まる体験が開発のきっかけ",
      "GPT-4o との対話でコンセプトを段階的に整えるワークフローを設計",
      "Next.js × OpenAI API で構築、Vercel 本番運用中",
    ],
    tags: ["Next.js", "GPT-4o", "Vercel"],
    image: "/img/concept-forge.jpg",
    link: "https://concept-forge-nduxaaou0-suzuki-yoseis-projects.vercel.app/",
    githubLink: "https://github.com/yoscodes/concept-forge",
  },
  {
    icon: IconDumbbell,
    title: "PPL-tracker",
    description: [
      "「筋トレログが続かない」問題を自分で解決したくて作成",
      "Supabase の Row Level Security でユーザーデータを堅牢に保護",
      "認証・DB・CRUD をフルスタックで設計・実装",
    ],
    tags: ["Next.js", "Supabase", "TypeScript"],
    image: "/img/ppl-tracker.jpg",
    link: "https://zenn.dev/4o7i1/articles/9f3441c92dda14",
    githubLink: "https://github.com/yoscodes/ppl-tracker3",
  },
  {
    icon: IconSync,
    title: "SyncMind",
    description: [
      "開発日記の振り返りを AI で自動化したかったことが発端",
      "ログ記録 → AI 分析 → フィードバック生成の一気通貫フローを構築",
      "Supabase × OpenAI API で実装",
    ],
    tags: ["Next.js", "OpenAI", "Supabase"],
    image: "/img/sync-mind.jpg",
    link: "https://sync-mind-a46nu8r7a-suzuki-yoseis-projects.vercel.app/",
    githubLink: "https://github.com/yoscodes/SyncMind",
  },
  {
    icon: IconClock,
    title: "ポモドーロタイマー",
    description: [
      "タイマー状態管理とローカル永続化を丁寧に設計",
      "Focus / Break / Todo を一画面に統合したシンプルな UI",
      "初めてデプロイまで完走した作品",
    ],
    tags: ["Next.js", "Tailwind CSS"],
    image: "/img/pomodoro-timer.jpg",
    link: "https://zenn.dev/4o7i1/articles/df425756bea52c",
    githubLink: "https://github.com/yoscodes/pomodoro-timer",
  },
  {
    icon: IconPalette,
    title: "tone palette",
    description: [
      "言葉の迷いをゼロにする、ビジネス表現のカラーパレット",
    ],
    tags: [""],
    image: "/img/tone-palette.png",
    link: "https://tone-palette-4f10faobv-suzuki-yoseis-projects.vercel.app/",
    githubLink: "https://github.com/yoscodes/tone-palette",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}
    >
      <div className="container">
        <motion.div
          style={{ marginBottom: "3.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h1" style={{ color: "var(--text-primary)", marginBottom: "0.875rem" }}>Portfolio</h2>
          <p className="text-body" style={{ color: "var(--text-secondary)", maxWidth: "520px" }}>
            コードへの好奇心と「実際に動くものを作る」をモットーに制作してきたプロダクトです。
          </p>
        </motion.div>

        <motion.div
          style={{
            display: "grid",
            gap: "1.75rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
