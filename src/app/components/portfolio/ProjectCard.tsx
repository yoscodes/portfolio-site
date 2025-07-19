"use client"

import { motion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string[];
  image?: string;
  link?: string;
  githubLink?: string;
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
  githubLink,
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
          <Image
            src={image}
            alt={title}
            width={600}
            height={338}
            className="rounded-lg aspect-[16/9] w-full object-cover mb-6"
            style={{ width: '100%', height: 'auto' }}
            priority
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
        <div className="mt-auto flex justify-between">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              詳細を見る
              {/* <svg
                className="ml-1"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg> */}
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
            >
              GitHub
              <svg
                className="ml-1"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
