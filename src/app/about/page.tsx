"use client";

import { content } from "@/data/content";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
    const { hero, description, values, stats } = content.about;
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <div className="w-full flex flex-col flex-grow items-center overflow-hidden bg-white" ref={containerRef}>

            {/* 1. Immersive Hero */}
            <section className="w-full min-h-[90vh] relative flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden bg-brand-black text-white">
                <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 -right-[20%] w-[800px] h-[800px] bg-green-money/10 rounded-full blur-[150px] mix-blend-screen opacity-50 animate-pulse"></div>
                    <div className="absolute -bottom-1/4 -left-[10%] w-[600px] h-[600px] bg-slate-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
                </motion.div>

                <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-20 h-20 bg-green-money rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl shadow-green-money/20 ring-8 ring-green-money/5">
                        <span className="text-3xl font-black text-brand-black font-serif italic">§</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-10 leading-[0.95]">
                        {hero.title.split(" ").map((word, i) => (
                            <span key={i} className={i === 2 ? "text-green-money" : ""}>{word} </span>
                        ))}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed max-w-3xl">
                        {hero.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* 2. Manifesto Split Section */}
            <section className="w-full relative py-32 md:py-48 z-10 border-t-8 border-green-money bg-brand-gray">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-tight sticky top-40">
                            Engineering the unseen <span className="text-green-money">ecosystem.</span>
                        </h2>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} className="lg:w-1/2 text-2xl md:text-3xl text-slate-600 font-medium leading-relaxed">
                        <p className="mb-10">{description}</p>
                        <div className="w-full h-px bg-slate-300 my-10 relative">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-money rounded-full"></div>
                        </div>
                        <p className="text-brand-black font-bold italic">"We reject the standard 'best practices' playbook."</p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Core Values Grid */}
            <motion.section variants={staggerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full bg-white relative py-40 z-10 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight text-brand-black">Axioms.</h2>
                        <div className="w-24 h-2 bg-green-money mx-auto mt-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {values.map((val, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="p-12 glass-card flex flex-col items-start border-t-4 border-t-transparent hover:border-t-green-money transition-all duration-500 overflow-hidden relative group">
                                <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-slate-50 font-serif leading-none group-hover:scale-110 group-hover:text-green-money/10 transition-all duration-700">0{idx + 1}</div>
                                <h3 className="text-3xl font-bold text-brand-black mb-6 tracking-tight relative z-10">{val.title}</h3>
                                <p className="text-lg text-slate-500 font-medium leading-relaxed relative z-10">
                                    {val.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* 4. Massive Statistical Proof */}
            <section className="w-full bg-brand-black text-white relative py-40 z-10 overflow-hidden border-t-[20px] border-green-money">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-brand-black via-green-money to-brand-black"></div>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div variants={staggerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-8">
                        {stats.map((stat, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center group">
                                <div className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-500 group-hover:to-green-money transition-colors duration-500">
                                    {stat.value}
                                </div>
                                <div className="w-6 h-6 border-2 border-green-money rounded-full mb-6 group-hover:bg-green-money transition-colors"></div>
                                <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest px-4 leading-relaxed">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
