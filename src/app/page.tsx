"use client";

import { content } from "@/data/content";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Layers, Diamond, Brain, ArrowRight } from "lucide-react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const iconMap: any = { TrendingUp, Layers, Diamond, Brain };

export default function Home() {
  const { hero, philosophy, features, testimonials } = content.home;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full flex flex-col flex-grow items-center overflow-hidden bg-brand-gray" ref={containerRef}>

      {/* 1. Cinematic Hero Section */}
      <section className="w-full relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Parallax Background */}
        <motion.div style={{ y: yBg, opacity: opacityHero }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Deep value background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-brand-gray w-full h-full"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col z-10 lg:flex-row items-center pt-32 pb-24">
          <motion.div
            initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="w-full lg:w-3/5"
          >
            <motion.span variants={itemVariants} className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/40 backdrop-blur-3xl text-brand-black-muted font-bold tracking-widest text-xs uppercase mb-8 border border-white/60 shadow-xl hover:shadow-green-money/20 hover:-translate-y-1 transition-all cursor-default relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span className="w-2 h-2 rounded-full bg-green-money animate-pulse"></span>
              {content.global.tagline}
            </motion.span>

            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-[6.5rem] font-black tracking-tighter text-brand-black leading-[0.85] mb-8 relative">
              {hero.headline.split("").map((char, index) => (
                <motion.span key={index} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }} className="inline-block relative">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-12 font-medium">
              {hero.subheadline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <a href="/service" className="group relative overflow-hidden bg-brand-black text-white px-10 py-5 rounded-full font-bold text-lg text-center shadow-2xl hover:shadow-green-money/30 transition-shadow">
                <span className="relative z-10 group-hover:text-brand-black transition-colors duration-500">{hero.cta}</span>
                <div className="absolute inset-0 bg-green-money transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </a>
              <a href="/contact" className="group bg-white text-brand-black px-10 py-5 rounded-full font-bold text-lg text-center border-2 border-slate-200 hover:border-brand-black hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Engage <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8, rotate: 10 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} className="w-full lg:w-2/5 mt-20 lg:mt-0 flex justify-center lg:justify-end relative">
            <div className="relative w-[320px] h-[450px] md:w-[420px] md:h-[550px] group">
              <div className="absolute inset-0 border border-green-money/30 rounded-t-[140px] rounded-b-[40px] transform translate-x-8 translate-y-8 group-hover:translate-x-12 group-hover:translate-y-12 transition-transform duration-700 ease-out backdrop-blur-sm"></div>
              <div className="absolute inset-0 rounded-t-[140px] rounded-b-[40px] overflow-hidden shadow-2xl z-10">
                <Image src="/images/services.png" alt="3D Strategy Abstract" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute -left-16 bottom-16 glass-panel p-6 rounded-3xl z-20 shadow-2xl border border-white/50 group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-500">
                <p className="text-4xl font-black text-brand-black leading-none mb-2">{hero.stats[0].value}</p>
                <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">{hero.stats[0].label}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Philosophy Marquee / Manifesto */}
      <section className="w-full bg-brand-black py-40 relative z-10 text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-money/10 rounded-full blur-[180px] -z-10 mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="w-full md:w-1/2 sticky top-40">
            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              {philosophy.title} <br /><span className="text-green-money italic pr-4">Unseen Depth.</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="h-1 w-24 bg-green-money mb-10"></motion.div>
            <motion.p variants={itemVariants} className="text-2xl text-slate-400 font-medium leading-relaxed max-w-lg mb-12">
              {philosophy.description}
            </motion.p>
            <motion.a variants={itemVariants} href="/about" className="uppercase font-bold tracking-widest text-sm text-white hover:text-green-money transition-colors py-4 border-b-2 border-white/20 hover:border-green-money inline-flex items-center gap-4">
              Read The Manifesto <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {features.map((feature, idx) => {
              const Icon = iconMap[feature.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: idx * 0.1 }} viewport={{ once: true, margin: "-100px" }}
                  className="bg-slate-900/50 backdrop-blur-lg rounded-[2.5rem] p-10 lg:p-12 border border-slate-800 hover:border-green-money/50 hover:bg-slate-800/80 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-money/5 rounded-full blur-3xl group-hover:bg-green-money/20 transition-colors duration-700"></div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-money/10 transition-all duration-500">
                      <Icon className="w-8 h-8 text-green-money" />
                    </div>
                    <span className="text-6xl font-black text-slate-800 group-hover:text-slate-700 transition-colors">{feature.id}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-green-money transition-colors duration-300">{feature.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Social Proof / Impact */}
      <section className="w-full bg-white relative py-40 z-10 border-t-8 border-brand-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-brand-black mb-8">Empirical Outcomes.</h2>
            <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-medium">We measure success exclusively through profound, undeniable metrics.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            {testimonials.map((test, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.2, duration: 0.8 }} viewport={{ once: true }} className="glass-card p-12 md:p-16 relative overflow-hidden group hover:-translate-y-2">
                <div className="text-8xl font-serif text-slate-100 absolute top-4 left-8 -z-10 leading-none group-hover:text-green-money/5 transition-colors duration-700">"</div>
                <p className="text-2xl italic text-slate-700 leading-relaxed mb-10 font-medium relative z-10">
                  {test.quote}
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-300"></div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-black">{test.author}</h4>
                    <p className="text-green-money font-semibold uppercase tracking-wider text-sm mt-1">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-slate-200 pt-20">
            {hero.stats.map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: (idx + 1) * 0.2 }} viewport={{ once: true }} className="flex flex-col items-center text-center py-10 md:py-0 px-4 group">
                <div className="text-6xl md:text-7xl font-black text-brand-black tracking-tighter mb-4 group-hover:text-green-money transition-colors duration-500">
                  {stat.value}
                </div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Infinite CTA Banner */}
      <section className="w-full bg-green-money py-12 overflow-hidden flex items-center shadow-inner relative group border-t-4 border-brand-black cursor-pointer" onClick={() => window.location.href = '/contact'}>
        <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, ease: "linear", duration: 20 }} className="flex whitespace-nowrap gap-16 items-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-16">
              <h2 className="text-5xl md:text-7xl font-black text-brand-black uppercase tracking-tighter">Initiate Dialogue</h2>
              <span className="text-6xl text-white font-serif italic">*</span>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-0 bg-brand-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter flex items-center gap-6">Proceed To Contact <ArrowRight className="w-16 h-16 text-green-money animate-pulse" /></h2>
        </div>
      </section>

    </div>
  );
}
