"use client";

import { motion, useAnimation } from "framer-motion";
import TechStack from "./TechStack";

const timelineData = [
  { year: "2020年",   text: "医療系専門学校 入学" },
  { year: "2022年",   text: "エンジニアへの転身を決意。プログラミングの自走学習を開始" },
  { year: "2024年〜", text: "React / Next.js を軸に個人開発。作品は Portfolio 参照" },
  { year: "2025年〜", text: "インフラエンジニアとして就業開始" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function About() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const controls = timelineData.map(() => useAnimation());

  const bounce = (i: number) => {
    controls[i].start({
      scale: [1, 1.18, 0.96, 1],
      rotate: [0, 6, -6, 0],
      transition: { duration: 0.55, times: [0, 0.2, 0.7, 1] },
    });
  };

  return (
    <>
      <motion.section
        id="about"
        className="section"
        style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <h2 className="text-h1" style={{ color: "var(--text-primary)" }}>About Me</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(2.5rem, 6vw, 5rem)",
            alignItems: "start",
          }}>
            {/* ── Left: Bio ── */}
            <div>
              {/* ① 今何をしているか */}
              <p className="text-body" style={{ color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
                現在は<span style={{ fontWeight: 600, color: "var(--text-primary)" }}>インフラエンジニアとして就業中</span>。
                サーバー構築・運用・障害対応を通じて、システムの安定性・可用性・再現性を支える実務を積んでいます。
              </p>

              {/* ② 何ができるか */}
              <p className="text-body" style={{ color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
                その実務知識を土台に、
                <span style={{ fontWeight: 600, color: "var(--accent)" }}>React&thinsp;/&thinsp;Next.js&thinsp;/&thinsp;TypeScript</span>{" "}
                を使ったフロントエンド開発の領域を広げています。
                システム全体を俯瞰できる視点でWebを設計できることが、純粋なフロントエンジニアとの差別化ポイントだと考えています。
              </p>

              {/* ③ どういう経緯か */}
              <p className="text-body" style={{ color: "var(--text-secondary)", marginBottom: "2.5rem" }}>
                もともとは医療系専門学校を経てエンジニアに転身。
                「なぜこうなるのか」を深掘りする性格と、
                <span style={{ fontWeight: 600, color: "var(--accent)" }}>自走して学べる実行力</span>
                が、現在の技術ベースを作ってきました。
                今後は{" "}
                <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>チーム開発・大規模システム</span>
                {" "}に挑戦し、実社会で使われるプロダクトを作ることを目標にしています。
              </p>
            </div>

            {/* ── Right: Timeline ── */}
            <div>
              <div style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "clamp(1.5rem, 3vw, 2rem)",
              }}>
                <p className="section-label" style={{ marginBottom: "1.5rem" }}>Timeline</p>

                <motion.ul
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={staggerVariants}
                  style={{ listStyle: "none" }}
                >
                  {timelineData.map((item, i) => (
                    <motion.li
                      key={i}
                      className="timeline-item"
                      variants={itemVariants}
                      animate={controls[i]}
                      onClick={() => bounce(i)}
                    >
                      <div className="timeline-dot" />
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.03em", marginBottom: "0.25rem" }}>
                        {item.year}
                      </div>
                      <div className="text-small" style={{ color: "var(--text-secondary)" }}>
                        {item.text}
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <TechStack />
    </>
  );
}
