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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-gray-600">
            私がこれまでに制作したプロジェクトをご紹介します。
          </p>
        </div>

        {/* グリッドレイアウト スマホで1列、タブレットで2列、PCで3列 */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="ポモドーロタイマー"
            description={[
              "ポモドーロテクニックを使ったタイマー",
              "作業と休憩を繰り返して集中力を維持",
              "次にやることをメモするのも効果的",
            ]}
            image="/img/pomodoro-timer.jpg"
            link="https://zenn.dev/4o7i1/articles/df425756bea52c"
            githubLink="https://github.com/yoscodes/pomodoro-timer"
          />
          <ProjectCard
            title="PPL-tracker"
            description={[
              "筋トレのPush、Pull、Legごとに記録する",
              "種目・重量・回数などを簡単に記録",
              "認証機能付きで個人の成長記録も確認",
            ]}
            image="/img/ppl-tracker.jpg"
            link="https://zenn.dev/4o7i1/articles/9f3441c92dda14"
            githubLink="https://github.com/yoscodes/ppl-tracker3"
          />
          <ProjectCard
            title="SyncMind"
            description={[
              "開発ログを、AIで振り返る成長プラットフォーム",
              "ログ × AI × 分析で、成長を加速する",
              "記録・振り返り・改善を一つに",
            ]}
            image="/img/sync-mind.jpg"
            link="https://sync-mind-a46nu8r7a-suzuki-yoseis-projects.vercel.app/"
            githubLink="https://github.com/yoscodes/SyncMind"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
