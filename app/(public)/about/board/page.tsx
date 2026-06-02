"use client";

import Image from "next/image";
import Link from "next/link";
import { Quote, Award, Users, ChevronRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useCloudinaryPool } from "@/hooks/useCloudinaryPool";

const EXECUTIVE_BOARD = [
    { role: "President", description: "Providing strategic direction and governance for the organization." },
    { role: "Vice President", description: "Supporting the President and overseeing regional coordination." },
    { role: "Secretary General", description: "Managing administrative operations and member relations." },
    { role: "Treasurer", description: "Overseeing financial management and resource allocation." },
    { role: "Director of Competitions", description: "Organizing regional championships and events." },
    { role: "Director of Athlete Development", description: "Developing athlete programs and performance pathways." },
    { role: "Director of Education & Certification", description: "Leading coach and official certification programs." },
    { role: "Director of Partnerships", description: "Building strategic partnerships and sponsor relationships." },
];

export default function BoardMembersPage() {
    const { getRandomImage } = useCloudinaryPool('about');

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    return (
        <div className="bg-white">
            <section className="relative py-16 md:py-20 bg-[#0a1628] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src={getRandomImage(2)} alt="Leadership" fill className="object-cover" unoptimized />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] to-[#0a1628]/60" />
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-2 text-white/40 text-xs mb-6">
                        <Link href="/about" className="hover:text-[#fab708] transition-colors">About WAC</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white">Leadership</span>
                    </div>
                    <motion.div {...fadeIn} className="max-w-2xl">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#fab708]/20 text-[#fab708] text-[9px] font-black uppercase tracking-[0.3em] border border-[#fab708]/20 mb-4">
                            Leadership & Governance
                        </span>
                        <h1 className="text-4xl md:text-5xl font-outfit font-bold leading-tight mb-4">
                            Executive <span className="text-[#fab708]">Board</span>
                        </h1>
                        <p className="text-white/60 text-base leading-relaxed">
                            West African Cheerleading is led by a dedicated team of sports professionals, educators, coaches, and community leaders committed to advancing cheerleading throughout the region.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#096b38] block mb-2">Governance</span>
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628]">Executive Board Members</h2>
                        <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">Our leadership team provides strategic direction, governance, and oversight to ensure the organization fulfills its mission.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {EXECUTIVE_BOARD.map((member, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeIn}
                                transition={{ delay: idx * 0.05 }}
                                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#096b38]/20 transition-all text-center group"
                            >
                                <div className="w-16 h-16 bg-[#096b38] rounded-2xl mx-auto flex items-center justify-center mb-4 text-white font-outfit text-xl font-bold group-hover:bg-[#fab708] group-hover:text-[#0a1628] transition-all">
                                    {member.role.split(' ').map(w => w[0]).slice(0, 2).join('')}
                                </div>
                                <h4 className="text-sm font-bold text-[#0a1628] mb-2">{member.role}</h4>
                                <p className="text-[10px] text-gray-500 leading-relaxed">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 p-6 bg-[#fab708]/10 rounded-2xl border border-[#fab708]/20 text-center">
                        <p className="text-sm text-gray-600 italic">
                            Leadership profiles and biographies will be published as appointments are finalized.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-gray-50 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[5, 6, 7, 8].map((seed) => (
                            <div key={seed} className="relative aspect-square rounded-xl overflow-hidden group">
                                <Image src={getRandomImage(seed)} alt="WAC" fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-[#0a1628] text-white text-center">
                <div className="max-w-2xl mx-auto px-6 space-y-5">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#fab708] block">Get Involved</span>
                    <h2 className="text-3xl font-outfit font-bold">Want to Partner with WAC?</h2>
                    <p className="text-white/40 text-sm leading-relaxed">Whether you are a school, club, sponsor, or individual — we welcome collaboration that shares our vision for cheerleading in West Africa.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                        <Link href="/contact" className="px-8 py-3.5 bg-[#096b38] text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#07582e] transition-all shadow-lg shadow-[#096b38]/20 flex items-center gap-2">
                            <Mail className="w-4 h-4" /> Contact Us
                        </Link>
                        <Link href="/about" className="px-8 py-3.5 border border-white/20 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all">
                            Back to About
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
