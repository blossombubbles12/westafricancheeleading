"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Calendar,
  Heart,
  Globe,
  ChevronRight,
  ArrowRight,
  MapPin,
  Sparkles,
  Zap,
  Layers,
  Shield,
  Trophy,
  BookOpen,
  Star,
  Award,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { EventsShowcase } from "@/components/home/EventsShowcase";
import { PostsShowcase } from "@/components/home/PostsShowcase";
import { GalleryShowcase } from "@/components/home/GalleryShowcase";
import { PartnersScroller } from "@/components/ui/PartnersScroller";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ImpactCounters } from "@/components/home/ImpactCounters";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FocusAreasGrid } from "@/components/home/FocusAreasGrid";
import { useCloudinaryPool } from "@/hooks/useCloudinaryPool";

const COUNTRIES = [
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

const BENEFITS = [
  { icon: Trophy, title: "Competition Access", desc: "Participate in regional qualifiers, national championships, and international events." },
  { icon: BookOpen, title: "Coach Certification", desc: "Internationally recognized training programs for coaches, judges, and officials." },
  { icon: Users, title: "Member Network", desc: "Connect with clubs, schools, universities, and athletes across 15 West African nations." },
  { icon: Shield, title: "Athlete Development", desc: "Structured pathways from beginner to elite, with camps, clinics, and talent identification." },
  { icon: Globe, title: "International Exposure", desc: "Opportunities to represent West Africa at continental and world championship levels." },
  { icon: Star, title: "Recognition Programs", desc: "Annual awards, scholarships, and recognition for outstanding athletes and contributors." },
];

export default function Home() {
  const { getRandomImage } = useCloudinaryPool("home");
  const { getRandomImage: getUploadImage } = useCloudinaryPool("uploads");
  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-white overflow-hidden selection:bg-[#fab708]/30">

      <HeroCarousel />

      <PartnersScroller />

      {/* MISSION */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-1 w-12 bg-[#de020c]" />
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#de020c]">
                  Our Purpose
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-outfit font-black text-[#0a1628] leading-[1.05] mb-8">
                More Than a Sport.
                <br />
                <span className="text-[#096b38]">A Movement.</span>
              </h2>
              <div className="space-y-5 text-gray-600 font-medium leading-relaxed max-w-xl text-sm md:text-base">
                <p>
                  West African Cheerleading (WAC) is the premier regional sports organization dedicated to the growth, development, and governance of cheerleading across West Africa.
                </p>
                <p>
                  Our mission is to create opportunities for athletes, coaches, schools, universities, clubs, and communities to participate in cheerleading while promoting excellence, teamwork, leadership, safety, and inclusion.
                </p>
                <p>
                  We work to establish structured programs, organize competitions, provide professional certifications, and create pathways for participation at regional, continental, and international levels.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 mb-8">
                {["Youth Development", "Athlete Training", "Regional Governance", "Sport Excellence"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-[#096b38]/5 text-[#096b38] text-[8px] font-black uppercase tracking-[0.2em] rounded-full border border-[#096b38]/10">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-8">
                <Link href="/about" className="group text-[10px] font-black uppercase tracking-[0.2em] text-[#0a1628] border-b-2 border-[#096b38] pb-1 flex items-center gap-2 hover:text-[#096b38] transition-colors">
                  Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/membership" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#096b38] transition-colors">
                  Join WAC
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-gray-100">
                <Image
                  src={getUploadImage(2)}
                  alt="WAC cheerleading"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#fab708] animate-pulse" />
                    <span className="text-[7px] font-black uppercase tracking-[0.3em] text-[#fab708]">Featured</span>
                  </div>
                  <p className="text-xl font-outfit font-bold">Uniting West Africa Through Cheerleading</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 max-w-[200px] z-10">
                <p className="text-4xl font-outfit font-black text-[#096b38]">15</p>
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-500 mt-1">West African Nations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REGIONAL REACH */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src={getUploadImage(0)} alt="" fill className="object-cover" unoptimized />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#096b38]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fab708]/5 rounded-full blur-[150px]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#fab708] block mb-4">
                Our Reach
              </span>
              <h2 className="text-4xl md:text-5xl font-outfit font-bold leading-tight">
                Serving All of <span className="text-[#fab708]">West Africa</span>
              </h2>
              <p className="text-white/40 text-sm mt-4 max-w-lg leading-relaxed font-medium">
                Proudly collaborating with member organizations, schools, clubs, and communities across 15 West African nations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {COUNTRIES.map((country, i) => (
              <motion.div
                key={country.name}
                {...fadeIn}
                transition={{ delay: i * 0.03 }}
                className="px-4 py-4 bg-white/5 rounded-2xl border border-white/10 text-center text-sm font-bold text-white/80 hover:bg-[#fab708] hover:text-[#0a1628] hover:border-[#fab708] hover:shadow-lg hover:shadow-[#fab708]/10 transition-all duration-300"
              >
                <img src={`https://flagcdn.com/24x18/${country.code}.png`} alt="" className="w-5 h-3.5 inline-block mr-1.5 -mt-0.5 rounded-sm" />{country.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT COUNTERS */}
      <ImpactCounters />

      {/* PROGRAMS */}
      <FocusAreasGrid />

      {/* MEMBERSHIP BENEFITS */}
      <section className="py-20 bg-gradient-to-br from-[#096b38]/5 to-[#fab708]/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#096b38] block mb-4">
              Membership Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-[#0a1628] leading-tight">
              Why Join <span className="text-[#096b38]">WAC?</span>
            </h2>
            <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto leading-relaxed font-medium">
              Unlock opportunities, build connections, and be part of the cheerleading movement across West Africa.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.07 }}
                className="group p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-2xl hover:border-[#096b38]/20 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#096b38]/10 flex items-center justify-center mb-6 group-hover:bg-[#096b38] group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-[#096b38] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-outfit font-bold text-[#0a1628] mb-3 group-hover:text-[#096b38] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#096b38] text-white text-[9px] font-black uppercase tracking-[0.2em] hover:bg-[#07582e] transition-all shadow-xl shadow-[#096b38]/20 active:scale-95"
            >
              Become a Member <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHEERLEADING */}
      <section className="py-20 bg-[#0a1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.07]">
          <Image src={getUploadImage(1)} alt="" fill className="object-cover" unoptimized />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#fab708]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#de020c]/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#fab708] block mb-4">
              Why Cheerleading?
            </span>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold leading-tight">
              More Than a <span className="text-[#fab708]">Sport</span>
            </h2>
            <p className="text-white/40 text-sm mt-4 max-w-lg mx-auto leading-relaxed font-medium">
              Cheerleading develops character, builds confidence, and creates leaders for life.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Star, label: "Leadership", desc: "Take charge and inspire others on and off the mat." },
              { icon: Zap, label: "Confidence", desc: "Build self-belief through performance and achievement." },
              { icon: Users, label: "Teamwork", desc: "Learn to work together toward a common goal." },
              { icon: Shield, label: "Discipline", desc: "Develop focus, commitment, and resilience." },
              { icon: Trophy, label: "Excellence", desc: "Strive for the highest standards in everything." },
              { icon: Globe, label: "Community", desc: "Be part of a vibrant, supportive sports family." },
              { icon: Sparkles, label: "Creativity", desc: "Express yourself through choreography and performance." },
              { icon: Heart, label: "Inclusion", desc: "Everyone belongs — regardless of background or ability." },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-[#fab708]/20 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-[#fab708] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-outfit font-bold text-white mb-1">{item.label}</h4>
                <p className="text-xs text-white/40 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS + NEWS */}
      <section className="bg-white">
        <EventsShowcase />
        <PostsShowcase />
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* GALLERY */}
      <GalleryShowcase />

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#096b38] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.08]">
            <Image src={getUploadImage(2)} alt="" fill className="object-cover" unoptimized />
          </div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#fab708]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <Award className="w-16 h-16 text-[#fab708] mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-outfit font-black leading-tight mb-6">
              Ready to Join the<br />
              <span className="text-[#fab708]">Cheerleading Movement?</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-10"
          >
            Whether you are an athlete, coach, school, university, club, parent, sponsor, or enthusiast — there is a place for you in West African Cheerleading.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/membership"
              className="px-10 py-4 bg-[#fab708] text-[#0a1628] rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#e5a506] transition-all shadow-2xl shadow-[#fab708]/30 flex items-center gap-2 group active:scale-95"
            >
              Join WAC <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/20 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
