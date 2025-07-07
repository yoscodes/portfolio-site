"use client"

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string[];
  image?: string;
  link?: string;
  isReady?: boolean;
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
  isReady = true,
}: ProjectCardProps) {
  return (
    <motion.div
      className="w-full"
      variants={itemVariants} // これに加えて
    >
      {/* 🟢 カードの高さを統一 flex と grid */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition duration-300 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 text-white rounded-full p-2">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" />
              <path d="M7.61197 18.3608L8.97136 16.9124L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" />
              <path d="M16.388 18.3608L15.0286 16.9124L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" />
            </svg>
          </div>
          <h2 className="text-gray-800 text-lg font-semibold ml-3">{title}</h2>
        </div>
        {/* 🟢 画像の高さを統一 object-cover を使い、画像のアスペクト比を保つ */}
        {isReady && image ? (
          <img
            src={image}
            alt={title}
            className="rounded-lg aspect-[16/9] w-full object-cover mb-6"
          />
        ) : (
          <div className="flex items-center justify-center h-48 bg-gray-100 text-gray-400 mb-6 rounded-lg">
            準備中...
          </div>
        )}

        {/* 🟢 説明文の高さを統一 flex-grow */}
        <ul className="text-sm text-gray-700 list-disc list-inside flex-grow mb-6">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* 🟢 ボタンが常に下部に揃うように */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            もっと見る
            <svg
              className="ml-1"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}
