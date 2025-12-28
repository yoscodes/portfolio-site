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

        {/* 🟢 ボタンが常に下部に揃うように（横並び・GitHubを右端に配置） */}
        <div className="mt-auto flex w-full items-center gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              記事を見る
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
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-gray-700 hover:text-gray-900 font-medium flex items-center text-sm"
            >
              GitHubでコードを見る
              <svg
                className="ml-1"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.56 3.44 21.8 8.21 23.16C8.81 23.27 9.03 22.91 9.03 22.6C9.03 22.32 9.02 21.56 9.02 20.64C6 21.22 5.22 19.45 5.22 19.45C4.68 18.06 3.89 17.69 3.89 17.69C2.79 16.96 3.98 16.98 3.98 16.98C5.21 17.07 5.86 18.25 5.86 18.25C6.94 20.11 8.71 19.57 9.38 19.27C9.49 18.49 9.81 17.97 10.16 17.68C7.91 17.39 5.54 16.53 5.54 12.55C5.54 11.36 5.96 10.4 6.66 9.66C6.54 9.37 6.16 8.27 6.76 6.71C6.76 6.71 7.64 6.41 9.03 7.49C9.86 7.26 10.75 7.14 11.64 7.14C12.53 7.14 13.42 7.26 14.25 7.49C15.64 6.41 16.52 6.71 16.52 6.71C17.12 8.27 16.74 9.37 16.62 9.66C17.32 10.4 17.74 11.36 17.74 12.55C17.74 16.54 15.36 17.38 13.1 17.67C13.52 18.03 13.9 18.73 13.9 19.81C13.9 21.29 13.88 22.23 13.88 22.6C13.88 22.91 14.1 23.28 14.71 23.16C19.48 21.8 22.92 17.56 22.92 12.5C22.92 5.87 17.55 0.5 10.92 0.5H12Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
