"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, UserPlus, Globe, Search, ArrowRight, ShieldCheck, Award, Star, BookOpen, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useCloudinaryPool } from "@/hooks/useCloudinaryPool";

const MEMBERSHIP_CATEGORIES = [
  { icon: Users, title: "Athletes", desc: "Individual cheerleaders at all levels — from beginner to elite." },
  { icon: UserPlus, title: "Coaches", desc: "Professional coaches seeking certification and development." },
  { icon: BookOpen, title: "Schools", desc: "Primary and secondary schools with cheerleading programs." },
  { icon: Award, title: "Universities", desc: "Collegiate cheerleading programs and athletic departments." },
  { icon: Users, title: "Cheer Clubs", desc: "Independent clubs and community-based cheerleading organizations." },
  { icon: ShieldCheck, title: "Officials", desc: "Judges, referees, and competition officials." },
  { icon: Star, title: "Corporate Members", desc: "Organizations supporting cheerleading development." },
  { icon: Globe, title: "National Affiliates", desc: "National cheerleading bodies across West Africa." },
];

const MEMBERSHIP_BENEFITS = [
  { icon: Award, title: "Regional Recognition", desc: "Official WAC membership credentials and recognition." },
  { icon: Trophy, title: "Competition Access", desc: "Eligibility to participate in WAC competitions and events." },
  { icon: BookOpen, title: "Training Opportunities", desc: "Access to coach and athlete development programs." },
  { icon: ShieldCheck, title: "Certification Discounts", desc: "Reduced rates on certification programs." },
  { icon: Users, title: "Networking", desc: "Connect with cheerleading professionals across the region." },
  { icon: Star, title: "Leadership Programs", desc: "Opportunities for leadership and governance roles." },
];

export default function MembershipPage() {
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
          <Image src={getRandomImage(9)} alt="Membership" fill className="object-cover" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#fab708]/20 text-[#fab708] text-[9px] font-black uppercase tracking-[0.3em] border border-[#fab708]/20 mb-4">
              WAC Membership
            </span>
            <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-4 leading-tight">
              Membership <span className="text-[#fab708]">Hub</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Join the West African Cheerleading community. Whether you are an athlete, coach, school, club, or corporate partner — there is a place for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/community/register" className="group">
              <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-[#fab708]/20 transition-all duration-500 h-full relative overflow-hidden">
                <div className="w-16 h-16 bg-[#096b38] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <UserPlus className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-outfit font-bold text-[#0a1628] mb-3">Become a Member</h3>
                <p className="text-gray-500 font-medium max-w-sm">Register as an athlete, coach, school, club, or official and join the WAC community.</p>
                <div className="mt-6 flex items-center gap-2 text-[#096b38] font-black uppercase tracking-[0.2em] text-xs">
                  Register Now <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/community/directory" className="group">
              <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-[#fab708]/20 transition-all duration-500 h-full relative overflow-hidden">
                <div className="w-16 h-16 bg-[#fab708] text-[#0a1628] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-outfit font-bold text-[#0a1628] mb-3">Member Directory</h3>
                <p className="text-gray-500 font-medium max-w-sm">Search the WAC member registry to find athletes, coaches, schools, and clubs.</p>
                <div className="mt-6 flex items-center gap-2 text-[#fab708] font-black uppercase tracking-[0.2em] text-xs">
                  Browse Directory <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#096b38] block mb-3">Categories</span>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628]">Membership Categories</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">WAC welcomes participation from individuals and organizations at every level.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MEMBERSHIP_CATEGORIES.map((cat, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#096b38]/20 transition-all group">
                <div className="w-12 h-12 bg-[#096b38]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#096b38] group-hover:scale-110 transition-all">
                  <cat.icon className="w-6 h-6 text-[#096b38] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-outfit font-bold text-[#0a1628] mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#fab708] block mb-3">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628]">Why Become a Member?</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">Unlock opportunities and be part of the cheerleading movement.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MEMBERSHIP_BENEFITS.map((ben, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <ben.icon className="w-8 h-8 text-[#096b38] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-base font-outfit font-bold text-[#0a1628] mb-2">{ben.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{ben.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a1628] text-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-5">
          <Award className="w-12 h-12 text-[#fab708] mx-auto" />
          <h2 className="text-3xl font-outfit font-bold">Ready to Join WAC?</h2>
          <p className="text-white/40 text-sm leading-relaxed">Complete your registration and become part of the cheerleading community across West Africa.</p>
          <Link href="/community/register" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#fab708] text-[#0a1628] rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#e5a506] transition-all shadow-xl">
            Register Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
