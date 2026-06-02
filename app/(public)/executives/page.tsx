"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Star, Briefcase, Mail, Phone, ChevronRight } from "lucide-react";
import { useCloudinaryPool } from "@/hooks/useCloudinaryPool";

export default function ExecutivesPage() {
    const { getRandomImage } = useCloudinaryPool();
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const mainExecutives = [
        { name: "President", role: "Executive Board", initials: "PR" },
        { name: "Vice President", role: "Executive Board", initials: "VP" },
        { name: "Secretary General", role: "Executive Board", initials: "SG" },
        { name: "Treasurer", role: "Executive Board", initials: "TR" },
        { name: "Director of Competitions", role: "Executive Board", initials: "DC" },
        { name: "Director of Athlete Development", role: "Executive Board", initials: "AD" },
        { name: "Director of Education & Certification", role: "Executive Board", initials: "EC" },
        { name: "Director of Partnerships", role: "Executive Board", initials: "PS" },
    ];

    return (
        <div className="bg-white">
            <section className="relative pt-20 pb-12 bg-[#0a1628] text-white">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src={getRandomImage(4)}
                        alt="Leadership"
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div {...fadeIn}>
                        <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#fab708]/20 text-[#fab708] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 border border-[#fab708]/20">
                            Leadership & Governance
                        </span>
                        <h1 className="text-4xl sm:text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 sm:mb-6 italic leading-tight">Our <span className="font-light not-italic text-[#fab708]">Leadership</span></h1>
                        <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
                            Meet the dedicated team driving cheerleading development across West Africa and coordinating WAC's regional mission.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-4 text-[#096b38] mb-4 sm:mb-6">
                                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
                                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">Executive Board</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0a1628] leading-tight">
                                WAC <br className="hidden sm:block" /> Governing Council
                            </h2>
                        </div>
                        <p className="text-gray-400 font-medium italic text-right hidden lg:block max-w-xs">
                            Dedicated leaders committed to developing cheerleading across West Africa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {mainExecutives.map((exec, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                transition={{ delay: i * 0.05 }}
                                className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#096b38]/30 transition-all text-center"
                            >
                                <div className="relative w-24 h-24 mx-auto mb-6">
                                    <div className="w-full h-full bg-gray-50 rounded-[1.8rem] flex items-center justify-center font-serif text-3xl font-bold text-[#096b38] group-hover:bg-[#096b38] group-hover:text-white transition-all duration-500 shadow-inner">
                                        {exec.initials}
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#fab708] rounded-2xl flex items-center justify-center text-[#0a1628] border-4 border-white shadow-lg">
                                        <Star className="w-4 h-4 fill-current" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-[#0a1628] mb-1 group-hover:text-[#096b38] transition-colors">{exec.name}</h3>
                                <p className="text-xs font-black text-[#fab708] uppercase tracking-[0.15em] mb-6">{exec.role}</p>

                                <div className="pt-6 border-t border-gray-50 flex items-center justify-center gap-4">
                                    <button className="p-2 text-gray-300 hover:text-[#096b38] transition-colors hover:scale-110">
                                        <Mail className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 text-gray-300 hover:text-[#096b38] transition-colors hover:scale-110">
                                        <Phone className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-[#0a1628] text-white text-center">
                <div className="max-w-2xl mx-auto px-6 space-y-5">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#fab708] block">Get Involved</span>
                    <h2 className="text-3xl font-outfit font-bold">Leadership profiles will be published as appointments are finalized.</h2>
                    <p className="text-white/40 text-sm leading-relaxed">Stay tuned for updates on our executive board and leadership team.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                        <Link href="/contact" className="px-8 py-3.5 bg-[#096b38] text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#07582e] transition-all shadow-lg shadow-[#096b38]/20 flex items-center gap-2">
                            <Mail className="w-4 h-4" /> Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
