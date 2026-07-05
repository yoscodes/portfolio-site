"use client";

import { motion } from "framer-motion";

/* ── Infra icons ──────────────────────────────────── */
function LinuxIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <rect width="36" height="36" rx="6" fill="#1a1a2e"/>
      <ellipse cx="18" cy="20" rx="9" ry="10.5" fill="#f0f0f0"/>
      <ellipse cx="18" cy="21" rx="5.5" ry="7" fill="#1a1a2e"/>
      <ellipse cx="18" cy="21" rx="4" ry="5.5" fill="#f0c040"/>
      <circle cx="15" cy="15" r="2" fill="#1a1a2e"/>
      <circle cx="21" cy="15" r="2" fill="#1a1a2e"/>
      <circle cx="15.4" cy="15" r="0.9" fill="#f0c040"/>
      <circle cx="21.4" cy="15" r="0.9" fill="#f0c040"/>
      <path d="M15.5 18.5 Q18 20.5 20.5 18.5" fill="none" stroke="#1a1a2e" strokeWidth="1"/>
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <rect width="36" height="36" rx="6" fill="#f05032"/>
      <path d="M30.9 16.55L19.45 5.1a2.1 2.1 0 00-2.9 0l-2.9 2.9 3.68 3.68a2.45 2.45 0 013.1 3.12l3.55 3.55a2.45 2.45 0 11-1.46 1.46l-3.32-3.32v8.72a2.45 2.45 0 11-2 0V16.2a2.45 2.45 0 01-1.33-3.22L13.5 9.6l-8.4 8.4a2.1 2.1 0 000 2.9l11.45 11.45a2.1 2.1 0 002.9 0L30.9 19.45a2.1 2.1 0 000-2.9z" fill="#fff"/>
    </svg>
  );
}

function AWSIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <rect width="36" height="36" rx="6" fill="#232f3e"/>
      <text x="18" y="16.5" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#FF9900">AWS</text>
      <path d="M9 23 Q18 29 27 23" fill="none" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M25.5 21.5 L27 23 L25.5 24.5" fill="none" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 21.5 L9 23 L10.5 24.5" fill="none" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <path d="M18 2a16 16 0 00-5.06 31.18c.8.15 1.1-.34 1.1-.76v-2.37c-3.89.85-4.71-1.88-4.71-1.88-.64-1.62-1.56-2.05-1.56-2.05-1.27-.87.1-.85.1-.85 1.4.1 2.14 1.44 2.14 1.44 1.25 2.14 3.28 1.52 4.08 1.16.13-.9.49-1.52.89-1.87-3.1-.35-6.37-1.55-6.37-6.9 0-1.52.54-2.77 1.43-3.74-.14-.36-.62-1.77.14-3.7 0 0 1.17-.37 3.83 1.43a13.3 13.3 0 016.98 0c2.65-1.8 3.82-1.43 3.82-1.43.76 1.93.28 3.34.14 3.7.89.97 1.43 2.22 1.43 3.74 0 5.36-3.28 6.54-6.4 6.88.5.43.94 1.29.94 2.6v3.85c0 .37.25.81.96.67A14 14 0 0018 2z" style={{ fill: "var(--text-primary)" }}/>
    </svg>
  );
}

/* ── Web icons ────────────────────────────────────── */
function JSIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <rect width="36" height="36" rx="4" fill="#f7df1e"/>
      <path d="M20.97 25.56c.52.85 1.2 1.47 2.39 1.47 1.0 0 1.64-.5 1.64-1.19 0-.83-.66-1.12-1.76-1.6l-.61-.26c-1.74-.74-2.9-1.67-2.9-3.63 0-1.8 1.38-3.17 3.53-3.17 1.53 0 2.63.53 3.42 1.93l-1.88 1.2c-.41-.74-.86-1.03-1.54-1.03-.7 0-1.15.44-1.15 1.03 0 .72.45 1.01 1.49 1.46l.61.26c2.05.88 3.21 1.78 3.21 3.8 0 2.17-1.71 3.35-4.0 3.35-2.24 0-3.69-1.07-4.4-2.47l1.95-1.15zM10.27 25.8c.38.67.72 1.24 1.53 1.24.78 0 1.27-.3 1.27-1.49V17.3h2.47v8.28c0 2.45-1.44 3.57-3.54 3.57-1.9 0-3.0-1.0-3.56-2.2l1.83-1.15z" fill="#000"/>
    </svg>
  );
}

function TSIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <rect width="36" height="36" rx="4" fill="#3178c6"/>
      <path d="M10 15h8.4v2.6h-2.9V28h-2.6V17.6H10V15z" fill="#fff"/>
      <path d="M26.8 20.5c-.1-.7-.4-1.3-.9-1.7-.5-.4-1.2-.6-2.0-.6-1.5 0-2.5.9-2.5 2.1 0 .8.4 1.4 1.1 1.8.4.2 1.0.5 1.9.8.9.3 1.2.5 1.2.95 0 .5-.5.8-1.2.8-.7 0-1.3-.3-1.7-1.0l-2.0 1.1c.7 1.4 1.9 2.0 3.7 2.0 1.9 0 3.2-1.0 3.2-2.7 0-.9-.3-1.5-.8-1.95-.5-.4-1.2-.7-2.1-.95-.8-.3-1.2-.5-1.2-.9 0-.4.4-.6.95-.6.6 0 1.1.2 1.4.9l2.0-1.05z" fill="#fff"/>
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <circle cx="18" cy="18" r="3" fill="#61dafb"/>
      <ellipse cx="18" cy="18" rx="15" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.8"/>
      <ellipse cx="18" cy="18" rx="15" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.8" transform="rotate(60 18 18)"/>
      <ellipse cx="18" cy="18" rx="15" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.8" transform="rotate(120 18 18)"/>
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <circle cx="18" cy="18" r="16" style={{ fill: "var(--text-primary)" }}/>
      <path d="M11 25V11l16 15.5V11" style={{ fill: "none", stroke: "var(--bg)", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}/>
      <line x1="11" y1="11" x2="11" y2="25" style={{ stroke: "var(--bg)", strokeWidth: "2.2", strokeLinecap: "round" }}/>
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <path d="M18 9c-4.5 0-7.3 2.25-8.4 6.75 1.68-2.25 3.645-3.09 5.88-2.535 1.28.32 2.195 1.248 3.215 2.273C20.302 17.213 22.08 19 26.4 19c4.5 0 7.3-2.25 8.4-6.75-1.68 2.25-3.645 3.09-5.88 2.535-1.28-.32-2.195-1.248-3.215-2.273C24.098 10.787 22.32 9 18 9z" fill="#38bdf8"/>
      <path d="M9.6 19c-4.5 0-7.3 2.25-8.4 6.75C2.88 23.5 4.845 22.66 7.08 23.215c1.28.32 2.195 1.248 3.215 2.273C11.902 27.213 13.68 29 18 29c4.5 0 7.3-2.25 8.4-6.75-1.68 2.25-3.645 3.09-5.88 2.535-1.28-.32-2.195-1.248-3.215-2.273C15.698 20.787 13.92 19 9.6 19z" fill="#38bdf8"/>
    </svg>
  );
}

function PHPIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <ellipse cx="18" cy="18" rx="16" ry="9" fill="#8892be"/>
      <text x="18" y="22" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#fff">PHP</text>
    </svg>
  );
}

function SupabaseIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <path d="M20 5l12 20H8L20 5z" fill="#3ecf8e" opacity="0.3"/>
      <path d="M20 9l9.5 16H10.5L20 9z" fill="#3ecf8e"/>
      <path d="M10 31l10-8 10 8H10z" fill="#3ecf8e" opacity="0.5"/>
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 36 36" width="38" height="38" aria-hidden="true">
      <path d="M18 5L34 32H2L18 5z" style={{ fill: "var(--text-primary)" }}/>
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────── */
const infraSkills = [
  { name: "Linux",  Icon: LinuxIcon },
  { name: "Git",    Icon: GitIcon },
  { name: "AWS",    Icon: AWSIcon },
  { name: "GitHub", Icon: GitHubIcon },
];

const webSkills = [
  { name: "JavaScript",  Icon: JSIcon },
  { name: "TypeScript",  Icon: TSIcon },
  { name: "React",       Icon: ReactIcon },
  { name: "Next.js",     Icon: NextIcon },
  { name: "Tailwind CSS",Icon: TailwindIcon },
  { name: "PHP",         Icon: PHPIcon },
  { name: "Supabase",    Icon: SupabaseIcon },
  { name: "Vercel",      Icon: VercelIcon },
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" },
  }),
};

function SkillGroup({ label, skills }: { label: string; skills: { name: string; Icon: () => React.JSX.Element }[] }) {
  return (
    <div>
      <p style={{
        fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em",
        textTransform: "uppercase", color: "var(--text-muted)",
        marginBottom: "1rem",
      }}>
        {label}
      </p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
        gap: "0.875rem",
      }}>
        {skills.map(({ name, Icon }, i) => (
          <motion.div
            key={name}
            className="tech-badge"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            custom={i}
            viewport={{ once: true }}
          >
            <Icon />
            <span>{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="section dot-grid" id="skills" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ marginBottom: "3rem" }}>
          <h2 className="text-h2" style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}>Skills</h2>
          <p className="text-body" style={{ color: "var(--text-secondary)" }}>
            実務と個人開発を通じて習得した技術スタックです。
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <SkillGroup label="インフラ実務" skills={infraSkills} />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <SkillGroup label="Web・フロントエンド（個人開発）" skills={webSkills} />
        </div>
      </div>
    </section>
  );
}
