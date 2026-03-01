"use client";

import { content } from "@/data/content";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function Partners() {
    const { hero, description, list } = content.partners;

    return (
        <div className="w-full flex flex-col flex-grow items-center overflow-hidden bg-brand-black text-white">

            {/* Matrix Header */}
            <section className="w-full max-w-7xl px-6 md:px-12 pt-48 pb-32 relative text-center border-b border-white/10">
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-money rounded-full blur-[100px] opacity-20 -z-10"></motion.div>

                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="flex justify-center mb-8">
                    <Activity className="w-16 h-16 text-green-money" />
                </motion.div>

                <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-8 leading-none">
                    {hero.title}
                </motion.h1>
                <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto">
                    {hero.subtitle}
                </motion.p>
            </section>

            {/* Narrative Break */}
            <section className="w-full bg-brand-gray text-brand-black py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black italic tracking-tight relative z-10">"{description}"</h2>
                    <div className="w-12 h-2 bg-green-money mx-auto mt-10"></div>
                </div>
            </section>

            {/* Ecosystem Grid */}
            <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {list.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }} viewport={{ once: true, margin: "-50px" }}
                            className="bg-slate-900 border border-slate-800 rounded-[2rem] p-10 flex flex-col justify-between group hover:bg-slate-800 transition-colors duration-500 overflow-hidden relative cursor-crosshair min-h-[400px]"
                        >
                            <div className="absolute top-0 left-0 w-2 h-0 bg-green-money group-hover:h-full transition-all duration-700 ease-out"></div>

                            <div className="flex justify-between items-start mb-8 z-10 relative">
                                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center border-4 border-slate-700 group-hover:border-green-money transition-colors duration-500 shadow-2xl">
                                    <span className="text-slate-400 font-black tracking-tighter group-hover:text-white">{partner.image}</span>
                                </div>
                                <div className="text-right">
                                    <h3 className="text-2xl font-black text-white">{partner.name}</h3>
                                    <span className="text-xs uppercase font-bold tracking-widest text-green-money">{partner.role}</span>
                                </div>
                            </div>

                            <div className="z-10 relative mt-auto border-t border-slate-700 pt-6">
                                <p className="text-lg text-slate-400 font-medium leading-relaxed">
                                    {partner.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
