"use client"

import Image from "next/image";
import { motion } from "framer-motion";
    
const history_list = [
  {
    title: "Next.js",
    description: "Webアプリ開発",
    image: "/images/test.png",
  },
  {
    title: "Docker",
    description: "コンテナ化",
    image: "/images/test.png",
  },
  {
    title: "AWS",
    description: "インフラ構築",
    image: "/images/test.png",
  },
];

export default function Home() {
  return (
    <main>
      <div className="">
      <motion.div
        className="px-10 py-10 pt-80 bg-green-700 min-h-screen flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-white">森の美しさ</h1>
      </motion.div>
      <div className="px-10 py-10 pt-10 bg-gray-100 flex flex-col md:flex-row">
        <h1 className="text-3xl font-bold leading-relaxed tracking-wide mb-8 lg:mr-12 md:mb-0 mr-12">
          <span className="text-green-500">わたしに</span><br />できること
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36">
            {history_list.map((item, index) => (
              <div key={index} className="shadow-xl p-10 rounded-lg">
                <div className="flex justify-center">
                  <Image
                    src={item.image} 
                    alt={item.title} 
                    width={300}
                    height={300}
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-10 py-10 pt-10 bg-white">
          <h1 className="text-3xl font-bold">経歴</h1>
        </div>
        <div className="px-10 py-10 pt-10 bg-gray-100">
          <h1 className="text-3xl font-bold">経歴</h1>
        </div>
      </div>
    </main>
  );
}
