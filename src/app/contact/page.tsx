"use client";

import { content } from "@/data/content";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
    const { hero, info, faqs } = content.contact;

    return (
        <div className="w-full flex flex-col flex-grow items-center overflow-hidden bg-brand-gray border-t-[20px] border-brand-black">

            {/* Deep Contact Hero Section */}
            <section className="w-full max-w-7xl px-6 md:px-12 pt-32 pb-40 relative">
                <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-green-money/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

                    {/* Contact Logic & Info */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex flex-col justify-center">

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-brand-black mb-8 leading-[0.9]">
                            {hero.title.split(" ").map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </h1>
                        <p className="text-2xl text-slate-500 leading-relaxed mb-16 max-w-lg font-medium">
                            {hero.subtitle}
                        </p>

                        <div className="flex flex-col gap-10">
                            <a href={`mailto:${info.email}`} className="group flex items-center gap-8 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-green-money transition-colors">
                                    <Mail className="w-8 h-8 text-brand-black group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Electronic Interface</p>
                                    <p className="text-2xl lg:text-3xl font-black text-brand-black group-hover:text-green-money transition-colors break-all">{info.email}</p>
                                </div>
                            </a>

                            <a href={`tel:${info.phone}`} className="group flex items-center gap-8 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-green-money transition-colors">
                                    <Phone className="w-8 h-8 text-brand-black group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Direct Line</p>
                                    <p className="text-2xl lg:text-3xl font-black text-brand-black group-hover:text-green-money transition-colors">{info.phone}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-8 p-8 rounded-3xl border border-transparent">
                                <div className="w-16 h-16 flex items-center justify-center">
                                    <MapPin className="w-8 h-8 text-slate-300" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Global Headquarters</p>
                                    <p className="text-xl font-bold text-slate-600 max-w-xs">{info.address}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Institutional Contact Form */}
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="flex flex-col justify-center">
                        <div className="w-full bg-brand-black p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 border-8 border-transparent group-hover:border-green-money transition-colors duration-1000 -z-0"></div>

                            <h2 className="text-3xl font-black mb-10 text-white relative z-10">Application Audit Form.</h2>

                            <form className="flex flex-col space-y-10 w-full relative z-10">
                                <div className="relative">
                                    <input type="text" id="name" required className="peer w-full border-b-2 border-slate-700 bg-transparent py-4 text-2xl font-bold text-white placeholder-transparent focus:border-green-money focus:outline-none transition-colors" placeholder="Name" />
                                    <label htmlFor="name" className="absolute left-0 -top-6 text-sm font-bold tracking-widest text-slate-500 uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-600 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-money">Enterprise / Name</label>
                                </div>

                                <div className="relative">
                                    <input type="email" id="email" required className="peer w-full border-b-2 border-slate-700 bg-transparent py-4 text-2xl font-bold text-white placeholder-transparent focus:border-green-money focus:outline-none transition-colors" placeholder="Email" />
                                    <label htmlFor="email" className="absolute left-0 -top-6 text-sm font-bold tracking-widest text-slate-500 uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-600 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-money">Executive Email</label>
                                </div>

                                <div className="relative">
                                    <textarea id="message" rows={4} required className="peer w-full border-b-2 border-slate-700 bg-transparent py-4 text-2xl font-bold text-white placeholder-transparent focus:border-green-money focus:outline-none transition-colors resize-none" placeholder="Message"></textarea>
                                    <label htmlFor="message" className="absolute left-0 -top-6 text-sm font-bold tracking-widest text-slate-500 uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-600 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-money">Structural Objective</label>
                                </div>

                                <button type="button" className="group/btn flex items-center justify-between text-2xl font-black bg-white text-brand-black px-10 py-6 hover:bg-green-money transition-colors w-full mt-8">
                                    <span>Submit Audit Request</span>
                                    <ArrowRight className="w-8 h-8 group-hover/btn:translate-x-4 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Deep FAQ Section */}
            <section className="w-full bg-white relative py-40 border-t border-slate-100 z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-black text-brand-black tracking-tight mb-8">Intelligence Briefing.</h2>
                        <div className="w-16 h-1 bg-brand-black mx-auto"></div>
                    </motion.div>

                    <div className="flex flex-col gap-12 border-t-2 border-brand-black pt-12">
                        {faqs.map((faq, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group">
                                <h3 className="text-2xl md:text-4xl font-black text-brand-black mb-6 group-hover:text-green-money transition-colors duration-500 leading-tight">
                                    {faq.q}
                                </h3>
                                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed pl-8 md:pl-16 border-l-4 border-slate-200 group-hover:border-green-money transition-colors duration-500">
                                    "{faq.a}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
