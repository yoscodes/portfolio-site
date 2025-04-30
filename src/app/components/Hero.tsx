"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800"
      id="home"
    >
      <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 左：テキスト */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            はじめまして！
            <br />
            Webエンジニアを志す
            <br />
            <span className="text-blue-600">鈴木 陽生</span>と申します。
          </h1>

          <p className="text-lg leading-relaxed mb-8">
            ここでは、私の制作物やスキルをご紹介します。
            <br />
            少しでも私のことを知っていただければ嬉しいです。
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 text-lg font-medium"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* 右：Lottie アニメーション */}
        <motion.div
          className="max-w-md mx-auto w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <DotLottieReact
            src="https://lottie.host/f67be0f8-8da7-48ed-9fa6-2de681ce353d/vKliGShlVx.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
