"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe, MessageSquare, Users, BookOpen, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { useCloudinaryPool } from "@/hooks/useCloudinaryPool";

const SUBJECTS = [
    "General Enquiry",
    "Membership",
    "Training & Certification",
    "Partnerships & Sponsorships",
    "Media & Press",
    "Volunteer",
    "Competitions & Events",
    "Other",
];

export default function ContactPage() {
    const { getRandomImage } = useCloudinaryPool('about');
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    return (
        <div className="bg-white">
            <section className="relative py-20 md:py-28 bg-[#0a1628] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src={getRandomImage(1)} alt="Contact WAC" fill className="object-cover" unoptimized />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0a1628]/80 to-transparent" />
                <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                    <motion.div {...fadeIn} className="space-y-5">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#fab708]/20 text-[#fab708] text-[9px] font-black uppercase tracking-[0.3em] border border-[#fab708]/20">
                            Get In Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight">
                            We&apos;d Love to <span className="text-[#fab708]">Hear From You</span>
                        </h1>
                        <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
                            We welcome inquiries regarding membership, partnerships, competitions, training, sponsorship, media, and volunteer opportunities.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-10 border-b border-gray-100 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Mail, label: "General Info", value: "info@westafricancheerleading.org", sub: "Send us a message anytime" },
                            { icon: Users, label: "Membership", value: "membership@westafricancheerleading.org", sub: "Join the WAC community" },
                            { icon: BookOpen, label: "Training", value: "training@westafricancheerleading.org", sub: "Certification & development" },
                            { icon: Globe, label: "Partnerships", value: "partnerships@westafricancheerleading.org", sub: "Sponsors & partners" },
                            { icon: Megaphone, label: "Media", value: "media@westafricancheerleading.org", sub: "Press & media inquiries" },
                        ].map((item, i) => (
                            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.07 }}
                                className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#096b38]/30 transition-all group">
                                <div className="w-10 h-10 bg-[#096b38]/10 border border-[#096b38]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#096b38] group-hover:border-[#096b38] transition-all">
                                    <item.icon className="w-5 h-5 text-[#096b38] group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                                <p className="font-bold text-[#0a1628] text-sm break-all">{item.value}</p>
                                <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <motion.div {...fadeIn}>
                            <div className="mb-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#096b38] block mb-2">Contact Form</span>
                                <h2 className="text-3xl font-outfit font-bold text-[#0a1628]">Send Us a Message</h2>
                                <p className="text-gray-500 text-sm mt-2">Fill in the form and a member of our team will be in touch shortly.</p>
                            </div>

                            {submitted ? (
                                <div className="p-10 bg-green-50 rounded-2xl border border-green-100 text-center space-y-4">
                                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
                                    <h3 className="font-outfit font-bold text-xl text-[#0a1628]">Message Received!</h3>
                                    <p className="text-gray-500 text-sm">Thank you for reaching out. We'll get back to you within 48 hours.</p>
                                    <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" }); }}
                                        className="text-[10px] font-black uppercase tracking-widest text-[#096b38] hover:text-[#07582e] transition-colors">
                                        Send Another Message →
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-5" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">First Name *</label>
                                            <input required type="text" value={form.firstName}
                                                onChange={e => setForm({ ...form, firstName: e.target.value })}
                                                placeholder="John"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#096b38]/30 focus:border-[#096b38] outline-none text-sm transition-all" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Last Name *</label>
                                            <input required type="text" value={form.lastName}
                                                onChange={e => setForm({ ...form, lastName: e.target.value })}
                                                placeholder="Doe"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#096b38]/30 focus:border-[#096b38] outline-none text-sm transition-all" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Email Address *</label>
                                        <input required type="email" value={form.email}
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#096b38]/30 focus:border-[#096b38] outline-none text-sm transition-all" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Phone Number</label>
                                        <input type="tel" value={form.phone}
                                            onChange={e => setForm({ ...form, phone: e.target.value })}
                                            placeholder="+234 800 000 0000"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#096b38]/30 focus:border-[#096b38] outline-none text-sm transition-all" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Subject *</label>
                                        <select required value={form.subject}
                                            onChange={e => setForm({ ...form, subject: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#096b38]/30 focus:border-[#096b38] outline-none text-sm transition-all bg-white">
                                            <option value="">Select a subject&hellip;</option>
                                            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Your Message *</label>
                                        <textarea required rows={5} value={form.message}
                                            onChange={e => setForm({ ...form, message: e.target.value })}
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#096b38]/30 focus:border-[#096b38] outline-none text-sm transition-all resize-none" />
                                    </div>
                                    <button type="submit"
                                        className="w-full py-4 bg-[#096b38] text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#07582e] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#096b38]/20">
                                        Send Message <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        <div className="space-y-6">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                                <Image src={getRandomImage(3)} alt="WAC" fill className="object-cover" unoptimized />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                                <div className="absolute bottom-5 left-5 text-white">
                                    <p className="font-outfit font-bold text-lg">We&apos;re Here to Help</p>
                                    <p className="text-white/60 text-xs mt-1">Every great partnership begins with a conversation.</p>
                                </div>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                                <h3 className="font-outfit font-bold text-[#0a1628]">Other Ways to Connect</h3>
                                {[
                                    { icon: Globe, label: "Social Media", value: "@wacleaders", sub: "Instagram, X, Facebook & LinkedIn" },
                                    { icon: MessageSquare, label: "Email", value: "info@westafricancheerleading.org", sub: "We respond within 48 hours" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 py-3 border-t border-gray-100 first:border-0 first:pt-0">
                                        <div className="w-10 h-10 bg-[#096b38]/10 rounded-xl flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 text-[#096b38]" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">{item.label}</p>
                                            <p className="font-bold text-[#0a1628] text-sm">{item.value}</p>
                                            <p className="text-gray-400 text-xs">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                {[4, 5, 6].map(seed => (
                                    <div key={seed} className="relative aspect-square rounded-xl overflow-hidden">
                                        <Image src={getRandomImage(seed)} alt="WAC" fill className="object-cover hover:scale-110 transition-transform duration-500" unoptimized />
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 bg-[#fab708] rounded-2xl text-[#0a1628] space-y-3">
                                <p className="font-outfit font-bold text-lg">Interested in Partnering?</p>
                                <p className="text-[#0a1628]/70 text-xs leading-relaxed">We actively seek partnerships with corporations, educational institutions, sports federations, and international organizations.</p>
                                <a href="mailto:partnerships@westafricancheerleading.org" className="inline-flex items-center gap-2 text-[#0a1628] text-xs font-black uppercase tracking-widest hover:underline">
                                    partnerships@westafricancheerleading.org →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
