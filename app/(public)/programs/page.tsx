"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen, Trophy, Globe, Heart, Star, Sparkles, Shield, ArrowRight, Target, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useCloudinaryPool } from "@/hooks/useCloudinaryPool";

const PROGRAMS_LIST = [
  { icon: Star, title: "Youth Cheer Development", desc: "Introducing young people to cheerleading in a safe and structured environment.", color: "bg-[#096b38]/10 text-[#096b38]" },
  { icon: BookOpen, title: "School Cheer Development", desc: "Supporting primary and secondary schools in creating sustainable cheerleading programs.", color: "bg-[#fab708]/10 text-[#fab708]" },
  { icon: Award, title: "University Cheer Development", desc: "Establishing collegiate cheerleading networks and regional championships.", color: "bg-[#de020c]/10 text-[#de020c]" },
  { icon: Users, title: "Community Cheer Clubs", desc: "Providing opportunities for local clubs and community organizations.", color: "bg-[#096b38]/10 text-[#096b38]" },
  { icon: Trophy, title: "Elite Athlete Development", desc: "Advanced performance pathways for high-performing athletes.", color: "bg-[#fab708]/10 text-[#fab708]" },
  { icon: Target, title: "Leadership Development", desc: "Building future leaders through sport and governance programs.", color: "bg-[#de020c]/10 text-[#de020c]" },
  { icon: Heart, title: "Women & Girls Empowerment", desc: "Encouraging participation, leadership, and opportunities for women and girls.", color: "bg-[#096b38]/10 text-[#096b38]" },
  { icon: Globe, title: "Inclusion & Community Outreach", desc: "Creating opportunities for underserved communities across West Africa.", color: "bg-[#fab708]/10 text-[#fab708]" },
];

const MEMBER_NATIONS = [
  { name: "Nigeria", code: "ng" },
  { name: "Ghana", code: "gh" },
  { name: "Benin", code: "bj" },
  { name: "Togo", code: "tg" },
  { name: "Côte d'Ivoire", code: "ci" },
  { name: "Liberia", code: "lr" },
  { name: "Sierra Leone", code: "sl" },
  { name: "Guinea", code: "gn" },
  { name: "Senegal", code: "sn" },
  { name: "The Gambia", code: "gm" },
  { name: "Burkina Faso", code: "bf" },
  { name: "Mali", code: "ml" },
  { name: "Niger", code: "ne" },
  { name: "Guinea-Bissau", code: "gw" },
  { name: "Cape Verde", code: "cv" },
];

const NATION_BENEFITS = [
  "Regional Representation",
  "Athlete Development Opportunities",
  "Competition Participation",
  "Training Access",
  "Certification Programs",
  "Leadership Development",
  "International Networking",
];

export default function ProgramsPage() {
  const { getRandomImage } = useCloudinaryPool();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-20 pb-12 md:pb-20 bg-[#0a1628] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src={getRandomImage(3)} alt="Programs" fill className="object-cover" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#fab708]/20 text-[#fab708] text-[9px] font-black uppercase tracking-[0.3em] border border-[#fab708]/20 mb-4">
              WAC Programs
            </span>
            <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-4 leading-tight">
              Programs & <span className="text-[#fab708]">Development</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Building the future of cheerleading through structured programs, education, and development pathways.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#de020c] block mb-3">Development Programs</span>
              <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628]">Our Programs</h2>
              <p className="text-gray-500 text-sm mt-3 max-w-lg">Comprehensive programs designed to develop athletes, coaches, and the sport at every level.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROGRAMS_LIST.map((prog, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className={`w-12 h-12 ${prog.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <prog.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-outfit font-bold text-[#0a1628] mb-2">{prog.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#0a1628] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#096b38]/10 rounded-full blur-[120px]" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#fab708] block mb-3">Member Nations</span>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold">Our Reach</h2>
            <p className="text-white/40 text-sm mt-3 max-w-xl mx-auto">WAC welcomes participation from all countries within the West African region.</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-14">
            {MEMBER_NATIONS.map((country, i) => (
              <motion.div key={country.name} {...fadeIn} transition={{ delay: i * 0.03 }}
                className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-center text-sm font-bold text-white/80 hover:bg-[#fab708] hover:text-[#0a1628] transition-all">
                <img src={`https://flagcdn.com/24x18/${country.code}.png`} alt="" className="w-5 h-3.5 inline-block mr-1.5 -mt-0.5 rounded-sm" />{country.name}
              </motion.div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-outfit font-bold text-center mb-6">Member Nation Benefits</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {NATION_BENEFITS.map((ben, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fab708]" />
                  {ben}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Award className="w-12 h-12 text-[#096b38] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628] mb-4">Get Started with WAC Programs</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mb-8">Contact us to learn how your organization can participate in WAC development programs.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-[#096b38] text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#07582e] transition-all shadow-lg flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/membership" className="px-8 py-3.5 border-2 border-[#096b38] text-[#096b38] rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#096b38] hover:text-white transition-all">
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
