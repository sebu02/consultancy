"use client";

import { content } from "@/data/content";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const { siteName, footerText, navigation, socials } = content.global;

    return (
        <footer className="bg-brand-black text-slate-300 py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-money/5 rounded-full blur-[200px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-b border-white/10 pb-24">

                    <div className="md:col-span-5 space-y-10">
                        <div className="flex items-center gap-4 group cursor-default">
                            <div className="w-16 h-16 rounded-full bg-green-money flex items-center justify-center shadow-2xl shadow-green-money/20 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-brand-black font-black text-3xl font-serif italic">§</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">{siteName}</h2>
                        </div>
                        <p className="text-slate-400 max-w-sm text-xl leading-relaxed font-medium">
                            We decode structural complexity to uncover exponential outcomes.
                        </p>
                    </div>

                    <div className="md:col-span-3 flex flex-col space-y-6">
                        <h3 className="text-green-money font-black tracking-widest uppercase text-xs mb-4">Sitemap</h3>
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="text-xl font-bold hover:text-white transition-colors w-max group flex items-center gap-2">
                                <span className="w-0 h-px bg-green-money group-hover:w-4 transition-all duration-300"></span>
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="md:col-span-4 flex flex-col space-y-6">
                        <h3 className="text-green-money font-black tracking-widest uppercase text-xs mb-4">Network & Intelligence</h3>
                        {socials.map((social) => (
                            <a key={social.name} href={social.href} className="text-xl font-bold hover:text-white transition-colors w-max group flex items-center gap-2">
                                <span className="w-0 h-px bg-green-money group-hover:w-4 transition-all duration-300"></span>
                                {social.name}
                            </a>
                        ))}
                        <div className="pt-8">
                            <h3 className="text-green-money font-black tracking-widest uppercase text-xs mb-6">Briefing Signup</h3>
                            <div className="flex bg-white/5 rounded-full p-2 border border-white/10 focus-within:border-green-money transition-colors">
                                <input type="email" placeholder="Enter executive email" className="bg-transparent text-white px-6 w-full outline-none placeholder-slate-500 font-medium" />
                                <button className="bg-white text-brand-black px-8 py-3 rounded-full font-bold hover:bg-green-money transition-colors">Join</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-sm font-bold tracking-widest uppercase text-slate-500 gap-6 text-center md:text-left">
                    <p>{footerText}</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-green-money transition-colors">Privacy Framework</a>
                        <a href="#" className="hover:text-green-money transition-colors">Terms of Engagement</a>
                    </div>
                </div>

                {/* Massive Watermark */}
                <div className="mt-20 flex justify-center w-full select-none pointer-events-none opacity-[0.03]">
                    <span className="text-[20vw] md:text-[18vw] lg:text-[14vw] font-black leading-none tracking-tighter whitespace-nowrap">ICEBERG.</span>
                </div>
            </div>
        </footer>
    );
}
