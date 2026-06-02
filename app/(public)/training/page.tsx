"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Shield, Award, Users, Target, ArrowRight, CheckCircle2, GraduationCap, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useCloudinaryPool } from "@/hooks/useCloudinaryPool";

const TRAINING_PROGRAMS = [
  {
    icon: GraduationCap,
    title: "Coach Certification",
    desc: "Comprehensive training covering athlete safety, coaching methodology, team management, performance development, and leadership.",
    topics: ["Athlete Safety", "Coaching Methodology", "Team Management", "Performance Development", "Leadership"],
    color: "bg-[#096b38]/10 text-[#096b38]",
  },
  {
    icon: ClipboardCheck,
    title: "Judge Certification",
    desc: "Developing qualified competition officials with strong knowledge of scoring, rules, and fair evaluation.",
    topics: ["Competition Rules", "Scoring Systems", "Evaluation Standards", "Fair Play Protocols"],
    color: "bg-[#fab708]/10 text-[#fab708]",
  },
  {
    icon: Target,
    title: "Athlete Development Workshops",
    desc: "Intensive workshops improving technical skills, performance quality, and competitive readiness.",
    topics: ["Technical Skills", "Performance Quality", "Competition Prep", "Nutrition & Wellness"],
    color: "bg-[#de020c]/10 text-[#de020c]",
  },
  {
    icon: Shield,
    title: "Safety & Risk Management",
    desc: "Promoting best practices for athlete protection, injury prevention, and risk management in cheerleading.",
    topics: ["Injury Prevention", "Emergency Response", "Safe Training", "Athlete Protection", "Risk Assessment"],
    color: "bg-[#096b38]/10 text-[#096b38]",
  },
  {
    icon: Award,
    title: "Event Management Certification",
    desc: "Training future sports administrators and event organizers in competition management and logistics.",
    topics: ["Event Planning", "Logistics", "Venue Management", "Volunteer Coordination"],
    color: "bg-[#fab708]/10 text-[#fab708]",
  },
];

export default function TrainingPage() {
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
          <Image src={getRandomImage(6)} alt="Training" fill className="object-cover" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#fab708]/20 text-[#fab708] text-[9px] font-black uppercase tracking-[0.3em] border border-[#fab708]/20 mb-4">
              WAC Training
            </span>
            <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-4 leading-tight">
              Training & <span className="text-[#fab708]">Certification</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Professional development programs for coaches, judges, athletes, and event officials — aligned with international standards.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#096b38] block mb-3">Programs</span>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628]">Certification & Training Programs</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">Comprehensive training designed to build capacity across the cheerleading ecosystem.</p>
          </div>
          <div className="space-y-6">
            {TRAINING_PROGRAMS.map((prog, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }}
                className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#096b38]/10 transition-all group">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className={`w-16 h-16 ${prog.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <prog.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-outfit font-bold text-[#0a1628] mb-3">{prog.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{prog.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {prog.topics.map((topic, j) => (
                        <span key={j} className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full text-[10px] font-bold text-gray-600">
                          <CheckCircle2 className="w-3 h-3 text-[#096b38]" /> {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a1628] text-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-5">
          <GraduationCap className="w-12 h-12 text-[#fab708] mx-auto" />
          <h2 className="text-3xl font-outfit font-bold">Start Your Certification Journey</h2>
          <p className="text-white/40 text-sm leading-relaxed">Contact us for information on upcoming training programs and certification schedules.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#fab708] text-[#0a1628] rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#e5a506] transition-all shadow-xl">
            Enquire Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
