"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import * as THREE from "three";

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
  useEffect(() => {
    // three.jsの初期化
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById("three-container");
    if (container) {
      container.appendChild(renderer.domElement);
    }

    // 粒子の作成
    const particles = new THREE.BufferGeometry();
    const particleCount = 10000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const radius = Math.random() * 5;
      positions[i * 3] = radius * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(theta);
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.01,
    });
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      particleSystem.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // クリーンアップ
    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <div
        id="three-container"
        className="px-10 py-10 mt-20 bg-black min-h-screen flex items-center justify-center"
      ></div>
      <div className="px-10 py-10 pt-10 bg-gray-950">
        <h1 className="text-3xl font-bold mb-3">History</h1>
        <div>
          {history_list.map((item, index) => (
            <div
              key={index}
              className="shadow-xl p-5 rounded-lg flex bg-gray-950  mt-1"
            >
              <h2 className="text-lg z-10 text-white">{item.date}</h2>
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
            <motion.div
              key={index}
              className="shadow-xl p-5 rounded-lg bg-gray-950"
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
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
            </motion.div>
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
