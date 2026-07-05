"use client";

import { motion } from "framer-motion";

function TerminalSVG() {
  return (
    <svg
      viewBox="0 0 460 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="コードエディタのイラスト"
      style={{
        width: "100%",
        height: "auto",
        filter: "drop-shadow(0 20px 56px rgba(128,117,255,0.28))",
        animation: "float 5.5s ease-in-out infinite",
      }}
    >
      <rect width="460" height="320" rx="14" className="svg-surface svg-border" strokeWidth="1.5"/>
      <rect width="460" height="42" rx="14" className="svg-elevated"/>
      <rect y="28" width="460" height="14" className="svg-elevated"/>
      <line x1="0.75" y1="42" x2="459.25" y2="42" stroke="var(--border)" strokeWidth="1"/>
      <circle cx="20" cy="21" r="5.5" fill="#ff5f57"/>
      <circle cx="38" cy="21" r="5.5" fill="#ffbd2e"/>
      <circle cx="56" cy="21" r="5.5" fill="#28ca41"/>
      <text x="230" y="26" textAnchor="middle" fontFamily="monospace" fontSize="10.5" style={{ fill: "var(--text-muted)" }}>
        portfolio.tsx — editor
      </text>

      {/* Line numbers */}
      {[68,88,108,128,148,168,188,208,228].map((y, i) => (
        <text key={y} x={i >= 8 ? "9" : "16"} y={y} fontFamily="monospace" fontSize="11" style={{ fill: "var(--text-muted)" }}>{i + 1}</text>
      ))}
      <line x1="36" y1="52" x2="36" y2="270" stroke="var(--border)" strokeWidth="1"/>

      {/* Code */}
      <text x="48" y="68" fontFamily="monospace" fontSize="11">
        <tspan fill="#c792ea">import </tspan>
        <tspan style={{ fill: "var(--text-primary)" }}>type </tspan>
        <tspan fill="#82aaff">{"{ Engineer }"}</tspan>
        <tspan fill="#c792ea"> from </tspan>
        <tspan fill="#c3e88d">&quot;yosei&quot;</tspan>
      </text>
      <text x="48" y="88" fontFamily="monospace" fontSize="11" style={{ fill: "var(--text-muted)" }}>
        // Infrastructure × Web Engineer
      </text>
      <text x="48" y="128" fontFamily="monospace" fontSize="11">
        <tspan fill="#c792ea">const </tspan>
        <tspan fill="#82aaff">profile</tspan>
        <tspan style={{ fill: "var(--text-secondary)" }}>{" = {"}</tspan>
      </text>
      <text x="48" y="148" fontFamily="monospace" fontSize="11">
        <tspan style={{ fill: "var(--text-muted)" }} dx="16">name:   </tspan>
        <tspan fill="#c3e88d">&quot;Yosei Suzuki&quot;</tspan>
        <tspan style={{ fill: "var(--text-secondary)" }}>,</tspan>
      </text>
      <text x="48" y="168" fontFamily="monospace" fontSize="11">
        <tspan style={{ fill: "var(--text-muted)" }} dx="16">base:   </tspan>
        <tspan fill="#c3e88d">&quot;Infra → Web Eng&quot;</tspan>
        <tspan style={{ fill: "var(--text-secondary)" }}>,</tspan>
      </text>
      <text x="48" y="188" fontFamily="monospace" fontSize="11">
        <tspan style={{ fill: "var(--text-muted)" }} dx="16">stack:  </tspan>
        <tspan style={{ fill: "var(--text-secondary)" }}>[</tspan>
        <tspan fill="#c3e88d">&quot;React&quot;</tspan>
        <tspan style={{ fill: "var(--text-secondary)" }}>, </tspan>
        <tspan fill="#c3e88d">&quot;Next.js&quot;</tspan>
        <tspan style={{ fill: "var(--text-secondary)" }}>],</tspan>
      </text>
      <text x="48" y="208" fontFamily="monospace" fontSize="11">
        <tspan style={{ fill: "var(--text-muted)" }} dx="16">loves:  </tspan>
        <tspan fill="#c3e88d">&quot;Building things&quot;</tspan>
      </text>
      <text x="48" y="228" fontFamily="monospace" fontSize="11" style={{ fill: "var(--text-secondary)" }}>
        {"}"}
      </text>
      <rect x="48" y="238" width="7" height="14" rx="1" fill="var(--accent)">
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite"/>
      </rect>

      {/* Status bar */}
      <rect x="0" y="298" width="460" height="22" style={{ fill: "var(--bg-elevated)" }}/>
      <rect x="0" y="298" width="460" height="1" stroke="var(--border)" strokeWidth="1"/>
      <rect x="0" y="298" width="460" height="22" fill="var(--accent)" fillOpacity="0.08"/>
      <text x="14" y="313" fontFamily="monospace" fontSize="9.5" fill="var(--accent)">
        ●  TypeScript  |  UTF-8  |  Ln 10, Col 1
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="section mesh-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "center", paddingTop: "5rem" }}
    >
      {/* Ambient orbs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "10%", left: "5%",
          width: "clamp(280px, 38vw, 560px)", height: "clamp(280px, 38vw, 560px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
          animation: "pulse-glow 7s ease-in-out infinite",
        }}/>
        <div style={{
          position: "absolute", bottom: "8%", right: "2%",
          width: "clamp(200px, 28vw, 380px)", height: "clamp(200px, 28vw, 380px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,150,199,0.12) 0%, transparent 70%)",
          animation: "pulse-glow 9s ease-in-out infinite reverse",
        }}/>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "clamp(2.5rem, 6vw, 5rem)",
          alignItems: "center",
        }}>
          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="section-label">Infrastructure × Web Engineer</p>

            {/* ── Name: YOSEI SUZUKI ── */}
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3.2rem, 8.5vw, 5.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                marginBottom: "1.25rem",
                color: "var(--text-primary)",
              }}
            >
              YOSEI
              <br />
              <span className="gradient-text">SUZUKI</span>
            </h1>

            {/* ── Attribute chips (replaces Japanese name) ── */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.45rem",
                padding: "0.3rem 0.875rem",
                borderRadius: "9999px",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.25)",
                fontSize: "0.8125rem", fontWeight: 600,
                color: "#16a34a",
              }}>
                <span aria-hidden="true" style={{
                  width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                  animation: "pulse-glow 2s ease-in-out infinite",
                  flexShrink: 0,
                }}/>
                Infra Engineer
              </span>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.45rem",
                padding: "0.3rem 0.875rem",
                borderRadius: "9999px",
                background: "var(--accent-soft)",
                border: "1px solid rgba(var(--accent-rgb), 0.25)",
                fontSize: "0.8125rem", fontWeight: 600,
                color: "var(--accent)",
              }}>
                React / Next.js
              </span>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.375rem",
                padding: "0.3rem 0.875rem",
                borderRadius: "9999px",
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                fontSize: "0.8125rem", fontWeight: 500,
                color: "var(--text-secondary)",
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                三重 / Japan
              </span>
            </div>

            <p className="text-body" style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", maxWidth: "460px" }}>
              現役インフラエンジニア。システムの裏側を支える実務経験を土台に、
              React&thinsp;/&thinsp;Next.js でのプロダクト開発へ領域を広げています。
              <br /><br />
              「安定して動くこと」を知っているからこそ作れるWebがある、と考えています。
            </p>

            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <motion.a href="#contact" className="btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                Contact Me
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </motion.a>
              <motion.a href="#portfolio" className="btn-ghost" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                作品を見る
              </motion.a>
            </div>
          </motion.div>

          {/* ── Terminal ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TerminalSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
