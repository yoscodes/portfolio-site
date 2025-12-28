"use client";

import { motion, useAnimation } from "framer-motion";
import TechStack from "./TechStack";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const timelineVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const timelineData = [
  { year: "2020年", text: "高校卒業後、医療系専門学校に入学" },
  { year: "2021年", text: "国家資格取得を目指して学業に励む" },
  {
    year: "2022年",
    text: "プログラミングに強く興味を持ち、学業との両立が難しくなる",
  },
  {
    year: "2022年12月",
    text: "進路を見つめ直し、専門学校を中退してITの道へ進むことを決意",
  },

  { year: "2023年", text: "HTML / CSS / JavaScriptの学習を開始" },
  {
    year: "2024年",
    text: "フロントエンドだけでなくPHPなどのバックエンドも学習",
  },
  {
    year: "2024年後半~現在",
    text: "React・Next.js・Tailwind CSSの学習を本格化 \n作ったアプリをGitHubで公開",
  },
  {
    year: "2025年7月~",
    text: "インフラエンジニアとして勤務開始",
  },
];

function About() {
  // timelineDataの数だけuseAnimationをトップレベルで呼び出す
  const controlsArray = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  // 遊び心のあるアニメーション（弾む）
  const handleTimelineClick = (index: number) => {
    const controls = controlsArray[index];
    controls.start({
      scale: [1, 1.2, 0.95, 1],
      rotate: [0, 8, -8, 0],
      transition: { duration: 0.6, times: [0, 0.2, 0.7, 1], type: "keyframes" },
    });
  };

  return (
    <>
      <motion.section
        id="about"
        className="text-gray-700 border-t border-r-gray-200"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container px-5 py-24 mx-auto flex flex-col-reverse lg:flex-row items-center">
          {/* タイムライン（左） */}
          <div className="mt-10 mb-2 lg:mt-0 lg:mb-0 lg:w-1/2 flex justify-center">
            <div className="bg-gradient-to-br from-white via-blue-50 to-white border rounded-lg shadow-lg p-6 w-full max-w-lg">
              <h2 className="text-xl font-semibold mb-4 text-blue-600">
                経歴タイムライン
              </h2>
              <motion.ul
                className="space-y-4 text-gray-800"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={timelineVariants}
                transition={{ delay: 0.2 }} // 遅延を加える
              >
                {timelineData.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="border-l-4 border-blue-600 pl-4 cursor-pointer select-none"
                    animate={controlsArray[index]}
                    onClick={() => handleTimelineClick(index)}
                  >
                    <div className="font-bold text-base">{item.year}</div>
                    <div
                      className={
                        item.year === "2024年後半~現在"
                          ? "whitespace-pre-line"
                          : ""
                      }
                    >
                      {item.text}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          {/* テキスト（右） */}
          <div className="lg:pr-12 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 lg:text-left text-center">
              About Me
            </h1>
            <p className="mb-6 leading-relaxed">
              2001年生まれ、三重県出身です。
            </p>
            <p className="mb-6 leading-relaxed">
              高校卒業後は医療系の専門学校に進学しましたが、プログラミングに触れる中で
              <span className="font-semibold text-blue-600">
                「仕組みを作る面白さ」
              </span>{" "}
              とITの可能性に惹かれ、キャリアチェンジを決意しました。
            </p>
            <p className="mb-6 leading-relaxed">
              独学で{" "}
              <span className="font-semibold">JavaScript / React / PHP</span>{" "}
              を中心に学び、小規模な個人アプリの開発に取り組んでいます。学習過程やコードはGitHubで公開しており、アウトプットを重視しています。
            </p>
            <p className="mb-6 leading-relaxed">
              もともと探究心が強く、「なぜこうなるのか」を深掘りしながら理解するのが好きです。この性格はエラーやトラブルに対しても表面的な対応で終わらず、原因や仕組みを突き止めたいという姿勢につながっています。その結果、現在はインフラエンジニアとして働き、
              <span className="font-semibold text-blue-600">
                システムの安定性や再現性を支える仕事
              </span>{" "}
              に強い関心を持って取り組んでいます。
            </p>
            <p className="mb-6 leading-relaxed">
              今後もシステムの仕組みを理解しながら、
              <span className="font-semibold text-blue-600">
                チーム開発や大規模システム
              </span>{" "}
              にも挑戦し、実社会に価値を提供できるプロダクトを作ることを目標に、一歩ずつ経験を積んでいます。
            </p>
          </div>
        </div>
      </motion.section>
      <TechStack />
    </>
  );
}

export default About;
