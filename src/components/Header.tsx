"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/data/content";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
    const { siteName, navigation } = content.global;
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${scrolled ? "py-4" : "py-8"}`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
                <div className={`flex items-center justify-between px-8 py-5 rounded-full transition-all duration-700 ${scrolled ? "bg-white/80 backdrop-blur-2xl shadow-2xl shadow-brand-black/5 border border-white/40" : "bg-transparent"}`}>

                    <div className="text-2xl md:text-3xl font-black tracking-tighter text-brand-black flex items-center gap-3 relative z-20">
                        <Link href="/" className="hover:opacity-70 transition-opacity flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center text-white group-hover:bg-green-money transition-colors duration-500">
                                <span className="w-3 h-3 rounded-full border-2 border-white flex items-center justify-center relative">
                                    <span className="w-1 h-1 bg-green-money rounded-full absolute -top-1 -right-1"></span>
                                </span>
                            </div>
                            {siteName}
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-10 relative z-20">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-sm tracking-widest uppercase font-bold transition-all duration-300 relative group overflow-hidden ${isActive ? "text-brand-black" : "text-slate-400 hover:text-brand-black"}`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <span className={`absolute bottom-0 left-0 h-[3px] bg-green-money transition-transform duration-500 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden relative z-20 text-brand-black" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>

                {/* Mobile Flyout */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="absolute top-24 left-6 right-6 bg-brand-black rounded-[2rem] p-8 shadow-2xl z-10 md:hidden border border-slate-800"
                        >
                            <div className="flex flex-col gap-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-3xl font-black text-white hover:text-green-money transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
