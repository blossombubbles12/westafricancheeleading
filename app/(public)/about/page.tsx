"use client";

import Image from "next/image";
import NextLink from "next/link";
import {
    Quote, Users, Heart, Target, Calendar, ChevronRight, Award,
    CheckCircle2, Globe, Sparkles, BookOpen, Shield, ArrowRight, Trophy
} from "lucide-react";
import { motion } from "framer-motion";
import { useCloudinaryPool } from "@/hooks/useCloudinaryPool";
import { PartnersScroller } from "@/components/ui/PartnersScroller";

export default function AboutPage() {
    const { getRandomImage } = useCloudinaryPool('about');
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    const timeline = [
        { year: "2024", title: "Foundation", desc: "West African Cheerleading (WAC) was founded to develop and govern cheerleading across West Africa." },
        { year: "2024", title: "Regional Launch", desc: "First outreach to cheerleading communities across 15 West African nations." },
        { year: "2025", title: "Certification Programs", desc: "Launch of coach and judge certification programs aligned with international standards." },
        { year: "2025", title: "Inaugural Championship", desc: "First WAC Championship bringing together teams from across the region." },
    ];

    const pillars = [
        { icon: Trophy, title: "Athlete Development", color: "bg-[#096b38]/10 text-[#096b38] border-[#096b38]/20", desc: "Structured programs, camps, clinics, and competitions for athletes at all levels." },
        { icon: BookOpen, title: "Coach Education", color: "bg-[#fab708]/10 text-[#fab708] border-[#fab708]/20", desc: "Internationally aligned training and certification for coaches and officials." },
        { icon: Shield, title: "Safety & Standards", color: "bg-[#de020c]/10 text-[#de020c] border-[#de020c]/20", desc: "Promoting best practices for athlete protection and risk management." },
        { icon: Globe, title: "International Pathways", color: "bg-[#096b38]/10 text-[#096b38] border-[#096b38]/20", desc: "Creating opportunities for regional, continental, and global participation." },
        { icon: Sparkles, title: "School Programs", color: "bg-[#fab708]/10 text-[#fab708] border-[#fab708]/20", desc: "Supporting schools and universities in establishing sustainable cheerleading." },
        { icon: Users, title: "Community Engagement", color: "bg-[#de020c]/10 text-[#de020c] border-[#de020c]/20", desc: "Building a network of clubs, communities, and member organizations." },
    ];

    const values = [
        "Excellence in performance, training, and leadership",
        "Integrity through transparency, fairness, and professionalism",
        "Inclusion for participants from all backgrounds and communities",
        "Teamwork through collaboration, respect, and unity",
        "Innovation in growing and improving the sport",
    ];

    const coreStats = [
        { value: "15", label: "Member Nations" },
        { value: "100+", label: "Partner Organizations" },
        { value: "6", label: "Core Programs" },
        { value: "2024", label: "Year Founded" },
    ];

    return (
        <div className="bg-white">

            <section className="relative py-20 md:py-28 bg-[#0a1628] text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-25">
                    <Image src={getRandomImage(1)} alt="WAC" fill className="object-cover" unoptimized />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent z-[1]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
                        <motion.div {...fadeIn} className="space-y-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-[#fab708]/20 text-[#fab708] text-[9px] font-black uppercase tracking-[0.3em] border border-[#fab708]/20">
                                Established 2024
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight">
                                Cheerleading for <span className="text-[#fab708]">West Africa</span>
                            </h1>
                            <p className="text-white/60 text-base leading-relaxed max-w-lg">
                                West African Cheerleading (WAC) is the premier regional sports organization dedicated to the growth and advancement of cheerleading across West Africa.
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                                <NextLink href="/membership" className="px-7 py-3 bg-[#096b38] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#07582e] transition-all shadow-lg shadow-[#096b38]/20">Join WAC</NextLink>
                                <NextLink href="/contact" className="px-7 py-3 border border-white/20 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all">Contact Us</NextLink>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-3">
                            {[2, 3, 4, 5].map((seed) => (
                                <div key={seed} className={`relative overflow-hidden rounded-2xl ${seed === 2 || seed === 5 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                                    <Image src={getRandomImage(seed)} alt="WAC" fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-[#fab708]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {coreStats.map((s, i) => (
                            <div key={i}>
                                <p className="text-3xl font-outfit font-bold text-[#0a1628]">{s.value}</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#0a1628]/60 mt-0.5">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <motion.div {...fadeIn} className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="h-0.5 w-8 bg-[#de020c]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#de020c]">Our Story</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628] leading-tight">
                                Building Champions. <span className="text-[#096b38]">Uniting Nations.</span>
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                                <p>West African Cheerleading works with schools, universities, clubs, sports organizations, and community groups to develop structured cheerleading programs that encourage athletic excellence, leadership, teamwork, and personal development.</p>
                                <p>We believe cheerleading is more than a sport — it is a powerful tool for youth empowerment, education, and community engagement.</p>
                                <p>Through competitions, training programs, certifications, and strategic partnerships, we aim to create sustainable opportunities for athletes and coaches while positioning West Africa as a recognized force in international cheerleading.</p>
                            </div>
                            <div className="p-6 bg-[#096b38]/5 rounded-2xl border border-[#096b38]/10 flex gap-4 italic">
                                <Quote className="w-8 h-8 text-[#096b38] shrink-0" />
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    &ldquo;Cheerleading develops character, builds confidence, and creates leaders for life. Together, we are building the future of cheerleading across West Africa.&rdquo;
                                    <span className="block mt-3 not-italic font-black text-[10px] uppercase tracking-widest text-[#0a1628]">— WAC Founding Vision</span>
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="space-y-3 md:space-y-4">
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                                    <Image src={getRandomImage(6)} alt="WAC" fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized />
                                </div>
                                <div className="relative aspect-square rounded-2xl overflow-hidden">
                                    <Image src={getRandomImage(7)} alt="WAC" fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized />
                                </div>
                            </div>
                            <div className="space-y-3 md:space-y-4 pt-8">
                                <div className="relative aspect-square rounded-2xl overflow-hidden">
                                    <Image src={getRandomImage(8)} alt="WAC" fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized />
                                </div>
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                                    <Image src={getRandomImage(9)} alt="WAC" fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-[#0a1628] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#fab708]/10 blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#fab708] block mb-3">What We Stand For</span>
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-white">Our Strategic Pillars</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pillars.map((p, i) => (
                            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#fab708]/30 transition-all group">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${p.color} group-hover:scale-110 transition-transform`}>
                                    <p.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                                <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100">
                            <Image src={getRandomImage(10)} alt="WAC Vision" fill className="object-cover" unoptimized />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <div className="w-12 h-0.5 bg-[#fab708] mb-3" />
                                <p className="font-outfit font-bold text-xl">Regional Unity</p>
                                <p className="text-white/60 text-xs mt-1">Building cheerleading across borders</p>
                            </div>
                        </div>

                        <motion.div {...fadeIn} className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="h-0.5 w-8 bg-[#de020c]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#de020c]">Our Vision</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628] leading-tight">
                                Leading African Cheerleading on the <span className="text-[#096b38]">Global Stage</span>
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed">To become the leading cheerleading organization in Africa, creating pathways for athletes and coaches to compete and excel on the global stage.</p>

                            <div className="space-y-3">
                                {values.map((v, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-[#096b38] shrink-0" />
                                        {v}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-gray-50 border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <motion.div {...fadeIn} className="space-y-8">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#096b38] block mb-3">Our Mission</span>
                                <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628] leading-tight">
                                    To promote, develop, and govern cheerleading across West Africa.
                                </h2>
                            </div>
                            <div className="space-y-5">
                                {[
                                    { icon: Trophy, title: "Quality Programs", desc: "Providing quality programs, education, and competitions that inspire excellence." },
                                    { icon: Award, title: "Professional Certification", desc: "Internationally aligned training and certification for coaches and officials." },
                                    { icon: Target, title: "Global Pathways", desc: "Creating opportunities for athletes and coaches to compete internationally." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-12 h-12 bg-[#096b38]/10 border border-[#096b38]/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#096b38] group-hover:border-[#096b38] transition-all">
                                            <item.icon className="w-5 h-5 text-[#096b38] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0a1628] mb-1 text-sm">{item.title}</h4>
                                            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-3">
                            {[11, 12, 13, 14].map((seed) => (
                                <div key={seed} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
                                    <Image src={getRandomImage(seed)} alt="WAC Mission" fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#096b38] block mb-3">Journey</span>
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628] mb-12">The WAC Timeline</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-[26px] left-[10%] right-[10%] h-0.5 bg-gray-100" />
                        {timeline.map((item, i) => (
                            <div key={i} className="relative z-10 space-y-4">
                                <div className="w-12 h-12 bg-white border-4 border-[#096b38] rounded-full flex items-center justify-center mx-auto shadow-xl shadow-[#096b38]/10">
                                    <Calendar className="w-5 h-5 text-[#0a1628]" />
                                </div>
                                <div>
                                    <span className="text-2xl font-outfit font-black text-[#096b38]">{item.year}</span>
                                    <h4 className="text-base font-bold text-[#0a1628] mt-1">{item.title}</h4>
                                    <p className="text-gray-500 text-xs mt-2 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#096b38] block mb-1">Impact Gallery</span>
                            <h2 className="text-2xl md:text-3xl font-outfit font-bold text-[#0a1628]">Moments That Define Us</h2>
                        </div>
                        <NextLink href="/media" className="text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-[#096b38] flex items-center gap-1 transition-colors">
                            View All <ArrowRight className="w-4 h-4" />
                        </NextLink>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[16, 17, 18, 19, 20, 21, 22, 23].map((seed) => (
                            <div key={seed} className="relative aspect-square rounded-xl overflow-hidden group shadow-sm">
                                <Image src={getRandomImage(seed)} alt="WAC" fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20 relative overflow-hidden bg-[#0a1628] text-white">
                <div className="absolute inset-0">
                    <Image src={getRandomImage(4)} alt="CTA" fill className="object-cover opacity-10" unoptimized />
                </div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <div className="flex justify-center mb-4">
                        <Quote className="w-10 h-10 text-[#fab708] opacity-50" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold leading-tight mb-6">
                        &ldquo;Empowering Youth. Building Champions.&rdquo; —<br />
                        <span className="text-[#fab708] italic font-medium">Uniting West Africa Through Cheerleading.</span>
                    </h2>
                    <p className="text-white/40 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
                        West African Cheerleading is committed to building a future where cheerleading transforms lives and communities across the region.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <NextLink href="/membership" className="px-10 py-4 bg-[#096b38] text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#07582e] transition-all shadow-xl shadow-[#096b38]/20">
                            Join the Movement <ChevronRight className="inline w-4 h-4 ml-1" />
                        </NextLink>
                        <NextLink href="/contact" className="px-10 py-4 border border-white/20 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all">
                            Contact WAC
                        </NextLink>
                    </div>
                </div>
            </section>
        </div>
    );
}
