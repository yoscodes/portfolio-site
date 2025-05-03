import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-white  border-t border-gray-700">
      <div className="container mx-auto px-3 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* アイコン：常に横並び */}
        <div className="flex space-x-6 mb-3 md:mb-0">
          <a
            // href="https://x.com/yoscodes"
            aria-label="X (Twitter)"
            className="text-xl hover:text-blue-400 transition-colors"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/yoscodes"
            aria-label="GitHub"
            className="text-xl hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://zenn.dev/4o7i1"
            aria-label="Zenn"
            className="text-xl hover:text-indigo-400 transition-colors"
          >
            <SiZenn />
          </a>
        </div>

        {/* 著作権：PCで右側に表示 */}
        <p className="text-xs text-gray-400">&copy; 2025 Yosei Suzuki</p>
      </div>
    </footer>
  );
}

export default Footer;
