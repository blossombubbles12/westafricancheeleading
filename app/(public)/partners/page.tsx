"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Handshake, Globe, Building2, GraduationCap, Landmark, Users, Megaphone, Target, ArrowRight, TrendingUp, Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useCloudinaryPool } from "@/hooks/useCloudinaryPool";

const PARTNER_TYPES = [
  { icon: Building2, title: "Corporations", desc: "Corporate partners supporting cheerleading development through funding and resources." },
  { icon: GraduationCap, title: "Educational Institutions", desc: "Schools, universities, and educational organizations." },
  { icon: Landmark, title: "Sports Federations", desc: "National and regional sports governing bodies." },
  { icon: Globe, title: "Government Agencies", desc: "Government departments supporting youth and sports development." },
  { icon: Heart, title: "NGOs", desc: "Non-profit organizations focused on youth empowerment and education." },
  { icon: Users, title: "Development Organizations", desc: "International development agencies and foundations." },
  { icon: Trophy, title: "International Sports Bodies", desc: "Global cheerleading and sports organizations." },
  { icon: Megaphone, title: "Media Organizations", desc: "Broadcast, print, and digital media partners." },
];

const PARTNER_BENEFITS = [
  { icon: Globe, title: "Regional Visibility", desc: "Prominent recognition across 15 West African nations." },
  { icon: Heart, title: "Youth Development Impact", desc: "Direct contribution to empowering young athletes." },
  { icon: TrendingUp, title: "Brand Exposure", desc: "Marketing opportunities at WAC events and platforms." },
  { icon: Award, title: "CSR Initiatives", desc: "Corporate social responsibility alignment with sport." },
  { icon: Users, title: "Community Engagement", desc: "Connect with communities across the region." },
  { icon: Target, title: "Sustainable Development", desc: "Support long-term sports infrastructure growth." },
];

export default function PartnersPage() {
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
          <Image src={getRandomImage(5)} alt="Partners" fill className="object-cover" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#fab708]/20 text-[#fab708] text-[9px] font-black uppercase tracking-[0.3em] border border-[#fab708]/20 mb-4">
              Partners & Sponsors
            </span>
            <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-4 leading-tight">
              Partner With <span className="text-[#fab708]">Us</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Together, we can build the future of cheerleading across West Africa. Join us as a partner, sponsor, or collaborator.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#096b38] block mb-3">Who We Partner With</span>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628]">Partnership Opportunities</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">WAC welcomes partnerships with organizations committed to youth development and sport.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PARTNER_TYPES.map((pt, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#096b38]/20 transition-all group">
                <div className="w-12 h-12 bg-[#096b38]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#096b38] group-hover:scale-110 transition-all">
                  <pt.icon className="w-6 h-6 text-[#096b38] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-outfit font-bold text-[#0a1628] mb-2">{pt.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#fab708] block mb-3">Why Partner</span>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628]">Why Partner With WAC?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARTNER_BENEFITS.map((ben, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <ben.icon className="w-8 h-8 text-[#fab708] mb-4" />
                <h3 className="text-base font-outfit font-bold text-[#0a1628] mb-2">{ben.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{ben.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a1628] text-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-5">
          <Handshake className="w-12 h-12 text-[#fab708] mx-auto" />
          <h2 className="text-3xl font-outfit font-bold">Interested in Partnering?</h2>
          <p className="text-white/40 text-sm leading-relaxed">We actively seek partnerships with corporations, educational institutions, sports federations, and international organizations.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#fab708] text-[#0a1628] rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#e5a506] transition-all shadow-xl">
            Become a Partner <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
