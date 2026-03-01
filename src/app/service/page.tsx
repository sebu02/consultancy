"use client";

import { content } from "@/data/content";
import { motion } from "framer-motion";

export default function Service() {
    const { hero, items } = content.service;

    return (
        <div className="w-full flex flex-col flex-grow items-center overflow-hidden bg-brand-gray">

            {/* Immersive Header */}
            <section className="w-full relative min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden bg-brand-black text-white">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-money/5 rounded-full blur-[100px] animate-pulse"></div>

                <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
                    <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 uppercase tracking-widest text-xs font-bold mb-10 shadow-xl text-green-money">
                        Expertise Matrix
                    </motion.div>
                    <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-8 leading-none">
                        {hero.title}
                    </motion.h1>
                    <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto">
                        {hero.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Deep Service List Matrix */}
            <section className="w-full bg-white relative py-40 z-10 border-t-8 border-green-money">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-40">
                    {items.map((item, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24 group`}>

                            {/* Massive Visual Numbering */}
                            <div className="lg:w-1/3 flex items-center justify-center relative">
                                <div className="text-[12rem] lg:text-[18rem] font-black leading-none text-brand-gray group-hover:text-green-money/10 transition-colors duration-1000 -z-10 absolute pointer-events-none tracking-tighter mix-blend-multiply">
                                    0{idx + 1}
                                </div>
                                <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full border border-slate-200 border-dashed animate-[spin_60s_linear_infinite] group-hover:border-green-money transition-colors duration-700 relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-money rounded-full shadow-lg shadow-green-money/50 group-hover:scale-150 transition-transform duration-500"></div>
                                </div>
                            </div>

                            {/* Dense Content Block */}
                            <div className="lg:w-2/3 flex flex-col">
                                <span className="text-green-money font-black tracking-widest text-sm uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 shadow-none">{item.id}</span>
                                <h2 className="text-4xl md:text-6xl font-black text-brand-black tracking-tight mb-8 leading-none group-hover:underline decoration-green-money decoration-8 underline-offset-8 transition-all">{item.name}</h2>
                                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium mb-12">
                                    {item.detail}
                                </p>

                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                                    <div className="w-full lg:w-1/4">
                                        <h4 className="border-b-2 border-brand-black pb-2 text-brand-black font-black uppercase text-sm tracking-widest mb-4">Core Deliverables</h4>
                                    </div>
                                    <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {item.deliverables.map((deliv, dIdx) => (
                                            <div key={dIdx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-green-money/30 transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-green-money mt-2 flex-shrink-0"></div>
                                                <span className="text-brand-black font-bold">{deliv}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
