"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Trophy, Globe, Heart, Shield, Zap, Star } from "lucide-react";
import Link from "next/link";

const PROGRAMS = [
    {
        icon: Users,
        title: "Athlete Development",
        desc: "Structured training programs, camps, clinics, and competitions developing cheerleaders at every level across West Africa.",
        color: "from-[#096b38] to-[#07582e]",
        bgLight: "bg-[#096b38]/10",
        textColor: "text-[#096b38]",
    },
    {
        icon: BookOpen,
        title: "Coach & Official Education",
        desc: "Internationally aligned certification, workshops, and continuous professional development for coaches and officials.",
        color: "from-[#fab708] to-[#e5a506]",
        bgLight: "bg-[#fab708]/10",
        textColor: "text-[#fab708]",
    },
    {
        icon: Trophy,
        title: "Competitions & Championships",
        desc: "Regional qualifiers, national championships, and international pathways showcasing West African cheerleading talent.",
        color: "from-[#de020c] to-[#b8010a]",
        bgLight: "bg-[#de020c]/10",
        textColor: "text-[#de020c]",
    },
    {
        icon: Globe,
        title: "International Pathways",
        desc: "Creating opportunities for athletes, coaches, and teams to compete at continental and world championship levels.",
        color: "from-[#096b38] to-[#07582e]",
        bgLight: "bg-[#096b38]/10",
        textColor: "text-[#096b38]",
    },
    {
        icon: Star,
        title: "School & University Programs",
        desc: "Supporting educational institutions in establishing and sustaining cheerleading programs as part of their sports curriculum.",
        color: "from-[#fab708] to-[#e5a506]",
        bgLight: "bg-[#fab708]/10",
        textColor: "text-[#fab708]",
    },
    {
        icon: Heart,
        title: "Community & Social Impact",
        desc: "Using cheerleading as a platform for youth leadership, gender equality, community engagement, and social change.",
        color: "from-[#de020c] to-[#b8010a]",
        bgLight: "bg-[#de020c]/10",
        textColor: "text-[#de020c]",
    },
];

export function FocusAreasGrid() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#096b38] block mb-4">
                            What We Do
                        </span>
                        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-[#0a1628] leading-tight">
                            Building the Future of <span className="text-[#096b38]">Cheerleading</span>
                        </h2>
                        <p className="text-gray-500 text-sm mt-4 max-w-lg leading-relaxed font-medium">
                            Six core pillars driving the growth of cheerleading as a professional sport across West Africa.
                        </p>
                    </div>
                    <Link
                        href="/programs"
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-[#096b38] hover:text-[#07582e] transition-colors border-b-2 border-[#096b38]/20 pb-1 shrink-0"
                    >
                        View All Programs →
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROGRAMS.map((area, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="group p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-500 bg-white relative overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            <div className={`w-14 h-14 ${area.bgLight} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                <area.icon className={`w-7 h-7 ${area.textColor}`} />
                            </div>
                            <h3 className="text-lg font-outfit font-bold text-[#0a1628] mb-3 group-hover:text-[#096b38] transition-colors">
                                {area.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                {area.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
