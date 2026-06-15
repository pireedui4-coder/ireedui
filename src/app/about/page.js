"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="bg-black text-slate-300 min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="/" className="text-yellow-400 font-bold text-xl">
            PORTFOLIO
          </a>
          <ul className="flex gap-6 text-gray-300">
            <li><a className="hover:text-yellow-400 transition" href="/#hero">Нүүр</a></li>
            <li><a className="hover:text-yellow-400 transition" href="/about">Миний тухай</a></li>
            <li><a className="hover:text-yellow-400 transition" href="/#skills">Ур чадвар</a></li>
            <li><a className="hover:text-yellow-400 transition" href="/#projects">Төслүүд</a></li>
          </ul>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-24">

        {/* TITLE */}
        <motion.h1
          className="text-5xl md:text-6xl text-white font-bold font-mono mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Миний тухай
        </motion.h1>

        {/* INTRO */}
        <motion.div
          className="border border-slate-700 p-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-gray-400 leading-8 font-mono">
            Би frontend хөгжүүлэгч болохоор суралцаж байгаа.
            Next.js, React, Tailwind ашиглаж вэб хийж сурч байна.
          </p>
        </motion.div>

        {/* SKILLS */}
        <h2 className="text-3xl font-bold text-white mb-8 font-mono">
          Ур чадвар
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {["HTML / CSS", "JavaScript", "React", "Next.js", "Tailwind", "GitHub"].map((skill) => (
            <div
              key={skill}
              className="border border-slate-700 p-6 text-center hover:border-yellow-400 hover:bg-slate-900 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* GOAL */}
        <motion.div
          className="border border-slate-700 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-3 font-mono">
            Зорилго
          </h2>
          <p className="text-gray-400 font-mono">
            Би full-stack developer болох зорилготой.
          </p>
        </motion.div>

      </div>

      {/* FOOTER */}
      <footer className="text-center p-5 text-gray-500 mt-10 border-t border-slate-800">
        © 2026 Бат-Ирээдүй
      </footer>
    </main> 
  );
}