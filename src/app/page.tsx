"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const history_list = [
  {
    date: "2024/07/01",
    description: "ポートフォリオサイトを作成しました。",
  },
  {
    date: "2024/07/01",
    description: "ポートフォリオサイトを作成しました。",
  },
  {
    date: "2024/07/01",
    description: "ポートフォリオサイトを作成しました。",
  },
];

const work_list = [
  {
    title: "AI-Powered 字幕生成アプリ",
    description: "OpenAI APIを使用して、動画から字幕を生成するアプリケーション",
    image: "/images/test.png",
  },
  {
    title: "Waiting",
    description: "Waiting",
    image: "/images/test.png",
  },
  {
    title: "Waiting",
    description: "Waiting",
    image: "/images/test.png",
  },
];

export default function Home() {
  return (
    <main>
      <div className="">
        <motion.div
          className="px-10 py-10 mt-20 bg-green-100 min-h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: "33%",
            right: "0%",
            height: "100vh",
          }}
        >
          <h1 className="text-4xl font-bold text-white">森の美しさ</h1>
        </motion.div>
        <div className="px-10 py-10 mt-20 bg-white min-h-screen flex items-center justify-center"></div>
        <div className="px-10 py-10 pt-10 bg-white">
          <h1 className="text-3xl font-bold">経歴</h1>
          <div>
            {history_list.map((item, index) => (
              <div key={index} className="shadow-xl p-5 rounded-lg flex">
                <h2 className="text-lg">{item.date}</h2>
                <p className="text-lg ml-5">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-10 py-10 pt-10 bg-gray-50">
          <h1 className="text-3xl font-bold leading-relaxed tracking-wide mb-8 lg:mr-12 md:mb-0 mr-12">
            作品
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
            {work_list.map((item, index) => (
              <motion.div
                key={index}
                className="shadow-xl p-5 rounded-lg"
                initial={{ opacity: 0, scale: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={350}
                    height={350}
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="px-10 py-10 pt-10 bg-white">
          <h1 className="text-3xl font-bold">スキル</h1>
        </div>
      </div>
    </main>
  );
}
