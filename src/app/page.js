"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const fullText = "Hi I'm Bat-Ireedui_";

function TypingText() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (deleting) {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
        }
      } else {
        if (text.length < fullText.length) {
          setText(fullText.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      }
    }, 150);
    return () => clearTimeout(timeout);
  }, [text, deleting]);

  return <>{text}</>;
}

export default function Home() {
  const [glowOn, setGlowOn] = useState(true);
  const [darkBg, setDarkBg] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex flex-col items-center justify-center">
        <motion.img
          src="/logo.png"
          alt="logo"
          className="w-32 h-32 rounded-full"
          animate={{
            boxShadow: ["0 0 20px 5px red", "0 0 60px 20px red", "0 0 20px 5px red"],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.p
          className="text-white font-mono text-sm mt-6 tracking-widest"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          LOADING...
        </motion.p>
      </div>
    );
  }

  return (
    <main className={`${darkBg ? "bg-black text-slate-300" : "bg-white text-slate-700"} min-h-screen overflow-x-hidden transition-colors duration-500`}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-center gap-10">
          <a href="#hero" className="text-red-500 font-bold text-base">PORTFOLIO</a>
          <ul className="flex gap-6 text-gray-300 text-sm">
            <li><a className="hover:text-red-500 transition" href="#hero">Home</a></li>
            <li><a className="hover:text-red-500 transition" href="#about">About</a></li>
            <li><a className="hover:text-red-500 transition" href="#skills">Skills</a></li>
            <li><a className="hover:text-red-500 transition" href="#projects">Projects</a></li>
          </ul>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* HERO */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center text-center pt-20"
        >
          <motion.img
            src="/logo.png"
            alt="profile"
            className="w-40 h-40 rounded-full object-cover"
            animate={{
              opacity: 1,
              scale: 1,
              boxShadow: glowOn
                ? ["0 0 20px 5px red", "0 0 40px 10px red", "0 0 20px 5px red"]
                : "0 0 0px transparent",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              boxShadow: { duration: 2, repeat: glowOn ? Infinity : 0, ease: "easeInOut" },
            }}
          />

          <motion.h1
            className={`text-4xl md:text-5xl font-bold font-mono mt-6 min-h-[1.2em] ${darkBg ? "text-white" : "text-black"}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypingText />
          </motion.h1>

          <motion.p
            className={`max-w-2xl mt-6 text-sm leading-7 font-mono px-5 ${darkBg ? "text-gray-500" : "text-gray-600"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Сайн байна уу. Намайг Бат-Ирээдүй гэдэг.
            Би Web Developer болохоор суралцаж байгаа оюутан бөгөөд
            Next.js, React болон Tailwind CSS ашиглан орчин үеийн
            вэб сайт хөгжүүлж байна.
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setGlowOn(!glowOn)}
              className="px-4 py-1 text-xs border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
            >
              {glowOn ? "Glow OFF" : "Glow ON"}
            </button>
            <button
              onClick={() => setDarkBg(!darkBg)}
              className={`px-4 py-1 text-xs border rounded-full transition ${
                darkBg
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
              }`}
            >
              {darkBg ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-6 text-center border-t border-slate-800">
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="group relative cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" className="w-8 h-8 grayscale hover:grayscale-0 hover:scale-110 transition" />
              <div className="absolute hidden group-hover:block bg-black border border-white text-xs text-white px-3 py-2 rounded-md -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                pireedui4@gmail.com
              </div>
            </div>
            <div className="group relative cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-8 h-8 grayscale hover:grayscale-0 hover:scale-110 transition" />
              <div className="absolute hidden group-hover:block bg-black border border-white text-xs text-white px-3 py-2 rounded-md -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                Э.Бат-Ирээдүй
              </div>
            </div>
            <div className="group relative cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" className="w-8 h-8 grayscale hover:grayscale-0 hover:scale-110 transition" />
              <div className="absolute hidden group-hover:block bg-black border border-white text-xs text-white px-3 py-2 rounded-md -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                bat_ireedvi
              </div>
            </div>
            <div className="group relative cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="w-8 h-8 grayscale hover:grayscale-0 hover:scale-110 transition" />
              <div className="absolute hidden group-hover:block bg-black border border-white text-xs text-white px-3 py-2 rounded-md -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                @bat_ireedui
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE + SKILLS */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className={`text-2xl font-bold mb-6 font-mono ${darkBg ? "text-white" : "text-black"}`}>Experience</h2>
            <div className={`border border-slate-700 p-4 mb-4 hover:border-red-500 transition-all duration-300 cursor-pointer ${darkBg ? "hover:bg-black" : "hover:bg-gray-100"}`}>
              <h3 className={`text-base font-bold ${darkBg ? "text-white" : "text-black"}`}>Internship</h3>
              <p className="text-gray-400 mt-1 text-sm">Frontend Developer</p>
              <p className="text-gray-500 text-sm">2025 - Одоо</p>
            </div>
            <div className={`border border-slate-700 p-4 hover:border-red-500 transition-all duration-300 cursor-pointer ${darkBg ? "hover:bg-black" : "hover:bg-gray-100"}`}>
              <h3 className={`text-base font-bold ${darkBg ? "text-white" : "text-black"}`}>Student Projects</h3>
              <p className="text-gray-400 mt-1 text-sm">React & Next.js</p>
              <p className="text-gray-500 text-sm">2024 - 2026</p>
            </div>
          </div>

          <div id="skills">
            <h2 className={`text-2xl font-bold mb-6 font-mono ${darkBg ? "text-white" : "text-black"}`}>Skills</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2 text-sm"><FaHtml5 className="text-orange-500 text-lg" />HTML</span>
                <span className="text-sm">★★★★☆</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2 text-sm"><FaCss3Alt className="text-blue-500 text-lg" />CSS</span>
                <span className="text-sm">★★★★☆</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2 text-sm"><FaJs className="text-yellow-400 text-lg" />JavaScript</span>
                <span className="text-sm">★★★★☆</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2 text-sm"><FaReact className="text-cyan-400 text-lg" />React</span>
                <span className="text-sm">★★★☆☆</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2 text-sm"><TbBrandNextjs className={darkBg ? "text-white text-lg" : "text-black text-lg"} />Next.js</span>
                <span className="text-sm">★★★☆☆</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2 text-sm"><FaDatabase className="text-blue-400 text-lg" />MySQL</span>
                <span className="text-sm">★★★☆☆</span>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <section id="projects" className="mt-16 pb-16">
          <h2 className={`text-2xl font-bold mb-6 font-mono ${darkBg ? "text-white" : "text-black"}`}>
            My <span className="text-red-500">Development</span> Projects
          </h2>
          <div className="space-y-6">
            <div className={`grid md:grid-cols-3 gap-4 border border-slate-800 p-4 hover:border-red-500 transition-all duration-300 cursor-pointer ${darkBg ? "hover:bg-black" : "hover:bg-gray-100"}`}>
              <img src="/logo.png" className="w-full h-40 object-cover" />
              <div className="md:col-span-2">
                <h3 className={`text-lg font-bold ${darkBg ? "text-white" : "text-black"}`}>Portfolio Website</h3>
                <p className="text-gray-400 mt-2 text-sm leading-6">
                  Next.js болон Tailwind CSS ашиглан хийсэн хувийн танилцуулгын вэб сайт.
                </p>
                <div className="mt-3">
                  <span className="border border-red-500 text-red-500 px-3 py-1 rounded-full text-xs">Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center p-4 text-gray-500 text-sm mt-6 border-t border-slate-800">
  &copy; 2026 Бат-Ирээдүй
</footer>
      </div>
    </main>
  );
}