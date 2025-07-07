"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Portfolio() {
  return (
    <motion.section
      id="portfolio"
      className="bg-white text-gray-800 border-t border-gray-200"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-lg text-gray-600">
            私がこれまでに制作したプロジェクトをご紹介します。
          </p>
        </div>

        {/* グリッドレイアウト スマホで1列、タブレットで2列、PCで3列 */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="ポモドーロタイマー"
            description={[
              "ポモドーロテクニックを使ったタイマーです。",
              "作業と休憩を繰り返して集中力を維持。",
              "次にやることをメモするのも効果的。",
            ]}
            image="/img/timer2.jpg"
            link="https://67f4c401cfb72be787aa190a--pomodoro-timer-yo.netlify.app/"
          />
          <ProjectCard
            title="PPL-tracker"
            description={[
              "筋トレのPush、Pull、Legごとに記録できるアプリです。",
              "種目・重量・回数などを簡単に記録できます。",
              "認証機能付きで個人の成長記録も確認できます。",
            ]}
            image="/img/ppl2.jpg"
            link="https://ppl-tracker3-fszn.vercel.app/"
          />
          <ProjectCard
            title="タイトル未定"
            description={["新しいプロジェクトを準備中です。"]}
            isReady={false}
            link="https://example.com"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
