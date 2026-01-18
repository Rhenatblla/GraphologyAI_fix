"use client";

import { Brain, Cpu, Code2, Network, BarChart3, Activity, Globe2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AboutPage() {
  const router = useRouter();

  const team = [
    { name: "Rhena Tabella", role: "Rekayasa Perangkat Lunak", img: "/team/rhena.jpeg" },
    { name: "Jovita Amanda", role: "Rekayasa Perangkat Lunak", img: "/team/jovita.jpeg" },
    { name: "Putri Syabilah", role: "Sistem Cerdas", img: "/team/putri.jpeg" },
    { name: "Aisyah Nurfadilah", role: "Data Processing", img: "/team/aisyah.jpeg" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <main className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Hero */}
      <motion.section initial="hidden" animate="visible" variants={fadeInUp} className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24 px-6 text-center relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 relative z-10">Tentang Grapholyze</h1>
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto relative z-10">Platform AI terdepan untuk analisis tulisan tangan dan kepribadian</p>
      </motion.section>

      {/* Content */}
      <section className="bg-white/80 backdrop-blur-sm text-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* About */}
          <div className="mb-24">
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-indigo-900 mb-8 flex items-center gap-3">
              <Activity className="text-pink-500" />
              Tentang Grapholyze
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.p variants={fadeInUp} className="text-lg mb-6">
                  Grapholyze adalah platform inovatif yang menggabungkan ilmu grafologi tradisional dengan teknologi AI modern untuk memberikan analisis kepribadian yang akurat melalui tulisan tangan.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg mb-8">
                  Kami percaya setiap orang berhak memahami diri mereka lebih dalam, dan teknologi dapat membantu membuat ilmu grafologi lebih mudah diakses oleh semua orang.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex gap-8 text-center bg-gray-50 p-6 rounded-2xl border shadow-sm">
                  <div>
                    <h4 className="text-4xl font-black text-indigo-600">95%</h4>
                    <p className="text-sm font-semibold text-gray-500">Akurasi</p>
                  </div>
                  <div className="w-px bg-gray-200" />
                  <div>
                    <h4 className="text-4xl font-black text-indigo-600">24/7</h4>
                    <p className="text-sm font-semibold text-gray-500">Online</p>
                  </div>
                  <div className="w-px bg-gray-200" />
                  <div>
                    <h4 className="text-4xl font-black text-indigo-600">1k+</h4>
                    <p className="text-sm font-semibold text-gray-500">Analisis</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-br from-indigo-50 to-purple-50 border rounded-3xl p-10 shadow-lg">
                <p className="italic text-xl">“Grapholyze hadir dari keyakinan bahwa tulisan tangan menyimpan jejak kepribadian unik setiap individu.”</p>
              </motion.div>
            </div>
          </div>

          {/* Team */}
          <div className="mb-24 py-16 border-t">
            <motion.h2 className="text-4xl font-bold text-center mb-12">Tim Grapholyze</motion.h2>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
              {team.map((person, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl mb-4">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/profile.jpeg";
                      }}
                    />
                  </div>
                  <h4 className="text-xl font-bold">{person.name}</h4>
                  <p className="text-indigo-600">{person.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tech */}
          <div className="py-16">
            <motion.h2 className="text-4xl font-bold text-center mb-12">Teknologi Kami</motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: "Computer Vision", icon: <Cpu size={32} /> },
                { title: "Deep Learning", icon: <Brain size={32} /> },
                { title: "Software Engineering", icon: <Code2 size={32} /> },
                { title: "Machine Learning", icon: <Network size={32} /> },
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow">
                  {t.icon}
                  <h4 className="mt-4 font-bold">{t.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Mulai Analisis Sekarang</h2>
        <button onClick={() => router.push("/user/homeanalisis")} className="bg-yellow-400 text-gray-900 font-bold px-10 py-4 rounded-full">
          Mulai
        </button>
      </section>
    </main>
  );
}
