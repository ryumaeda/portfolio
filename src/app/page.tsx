"use client";

import Image from "next/image";

const history_list = [
  {
    date: "2024/10/12",
    description: "ポートフォリオサイトを開設しました。",
  },
];

const skill_list = [
  "HTML",
  "TailwindCSS",
  "Typescript",
  "Javascript",
  "Python",
  "node.js",
  "Next.js",
  "three.js",
  "React Native",
  "expo",
  "Ansible",
  "AWS",
  "Docker",
  "Git",
];

const work_list = [
  {
    title: "AI-Powered 字幕生成アプリ",
    description: "OpenAI APIを使用して、動画から字幕を生成する",
    image: "/images/subtitle_generator.png",
    link: "https://github.com/ryumaeda/subtitle_generator",
  },
  {
    title: "iOSスマートフォンアプリ",
    description: "その場にあったゲームを提案してくれる",
    image: "/images/drinking_app.png",
    link: "https://github.com/ryumaeda/drinking_app",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      <div className="px-10 py-10 pt-10 bg-gray-950">
        <h1 className="text-3xl font-bold mb-3">History</h1>
        <div>
          {history_list.map((item, index) => (
            <div
              key={index}
              className="shadow-xl p-5 rounded-lg flex bg-gray-950 mt-1"
            >
              <h2 className="text-lg text-white">{item.date}</h2>
              <p className="text-lg ml-5">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 py-10 pt-10 bg-black">
        <h1 className="text-3xl font-bold leading-relaxed tracking-wide mb-8 lg:mr-12 md:mb-0 mr-12">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 mt-3">
          {work_list.map((item, index) => (
            <div key={index} className="shadow-xl p-5 rounded-lg bg-gray-950">
              <a href={item.link}>
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
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 pt-10 p-10 bg-gray-950 mt-10">
        <h1 className="text-3xl font-bold">skills</h1>
        <div className="flex flex-wrap mt-5">
          {skill_list.map((skill, index) => (
            <div
              key={index}
              className="border border-white text-white px-3 py-1 m-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
