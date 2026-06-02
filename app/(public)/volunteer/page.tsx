"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Calendar, ClipboardList, Megaphone, Camera, Heart, Globe, ArrowRight, Handshake, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useCloudinaryPool } from "@/hooks/useCloudinaryPool";

const OPPORTUNITIES = [
  { icon: Calendar, title: "Event Management", desc: "Help organize and run WAC competitions, championships, and events across the region." },
  { icon: Users, title: "Coaching Support", desc: "Assist with athlete training, skill development, and program delivery." },
  { icon: ClipboardList, title: "Administration", desc: "Support the day-to-day operations and governance of the organization." },
  { icon: Megaphone, title: "Marketing & Communications", desc: "Help tell the WAC story through social media, design, and content creation." },
  { icon: Camera, title: "Photography & Media", desc: "Capture the energy and excitement of cheerleading events and activities." },
  { icon: Heart, title: "Athlete Services", desc: "Provide support and services to athletes during training and competitions." },
  { icon: Globe, title: "Regional Coordination", desc: "Help coordinate WAC activities and outreach across different West African nations." },
  { icon: Sparkles, title: "Fundraising & Development", desc: "Support fundraising initiatives and partnership development." },
];

export default function VolunteerPage() {
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
          <Image src={getRandomImage(7)} alt="Volunteer" fill className="object-cover" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#fab708]/20 text-[#fab708] text-[9px] font-black uppercase tracking-[0.3em] border border-[#fab708]/20 mb-4">
              Volunteer
            </span>
            <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-4 leading-tight">
              Volunteer & <span className="text-[#fab708]">Careers</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Volunteers and professionals play a vital role in our success. Join us and make a difference in cheerleading across West Africa.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#de020c] block mb-3">Opportunities</span>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628]">Volunteer Opportunities</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">Find a role that matches your skills and passion for cheerleading and youth development.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OPPORTUNITIES.map((opp, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <opp.icon className="w-10 h-10 text-[#de020c] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-base font-outfit font-bold text-[#0a1628] mb-2">{opp.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{opp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-5">
          <Handshake className="w-12 h-12 text-[#096b38] mx-auto" />
          <h2 className="text-3xl font-outfit font-bold text-[#0a1628]">Join Our Team</h2>
          <p className="text-gray-500 text-sm leading-relaxed">Express your interest in volunteering with WAC. We will reach out as opportunities become available.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#096b38] text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#07582e] transition-all shadow-xl">
              Get Involved <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/membership" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#096b38] text-[#096b38] rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#096b38] hover:text-white transition-all">
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
