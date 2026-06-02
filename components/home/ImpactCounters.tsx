"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Users, Globe, Calendar } from "lucide-react";

interface CounterProps {
    end: number;
    suffix?: string;
    label: string;
    icon: any;
    duration?: number;
}

function AnimatedCounter({ end, suffix = "", label, icon: Icon, duration = 2 }: CounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let startTime: number;
        let animFrame: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) animFrame = requestAnimationFrame(animate);
        };
        animFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animFrame);
    }, [isInView, end, duration]);

    return (
        <div ref={ref} className="relative group">
            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-[#096b38]/10 flex items-center justify-center mb-6 group-hover:bg-[#096b38] transition-all duration-500">
                    <Icon className="w-7 h-7 text-[#096b38] group-hover:text-white transition-colors duration-500" />
                </div>
                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-5xl font-outfit font-black text-[#0a1628] leading-none"
                >
                    {count.toLocaleString()}{suffix}
                </motion.p>
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 mt-3">
                    {label}
                </p>
            </div>
        </div>
    );
}

const IMPACT_STATS = [
    { end: 15, suffix: "", label: "West African Countries", icon: Globe },
    { end: 100, suffix: "+", label: "Member Organizations", icon: Users },
    { end: 50, suffix: "+", label: "Annual Competitions", icon: Trophy },
    { end: 2024, suffix: "", label: "Year Founded", icon: Calendar },
];

export function ImpactCounters() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#096b38]/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fab708]/5 rounded-full blur-[150px]" />
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-14">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#fab708] block mb-3">
                        WAC By The Numbers
                    </span>
                    <h2 className="text-4xl md:text-5xl font-outfit font-bold leading-tight">
                        Our Impact Across <span className="text-[#fab708]">West Africa</span>
                    </h2>
                    <p className="text-white/40 text-sm mt-4 max-w-xl mx-auto leading-relaxed font-medium">
                        Building a structured cheerleading ecosystem across the region through programs, competitions, and certification.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {IMPACT_STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <AnimatedCounter {...stat} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
