"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Calendar, ClipboardList, Megaphone, Camera, Heart, Globe, ArrowRight, Handshake, Sparkles, CheckCircle2, Loader2, Send } from "lucide-react";
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
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", location: "", skills: "", availability: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.full_name.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          location: form.location.trim() || null,
          skills: form.skills.trim() || null,
          availability: form.availability.trim() || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Submission failed."); return; }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-[#096b38]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#096b38]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628] mb-3">Application Received!</h1>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Thank you for your interest in volunteering with WAC. We will review your application and reach out at <strong className="text-[#096b38]">{form.email}</strong>.
          </p>
          <Link href="/" className="px-6 py-3 bg-[#096b38] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#07582e] transition-all">Return Home</Link>
        </motion.div>
      </div>
    );
  }

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

      <section id="volunteer-form" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <Handshake className="w-12 h-12 text-[#096b38] mx-auto mb-4" />
            <h2 className="text-3xl font-outfit font-bold text-[#0a1628]">Apply Now</h2>
            <p className="text-gray-500 text-sm mt-2">Fill in your details and we will get back to you.</p>
          </div>
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" /> {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-5 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Full Name *</label>
                <input name="full_name" value={form.full_name} onChange={handleChange} required placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Phone</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Location</label>
                <input name="location" value={form.location} onChange={handleChange} placeholder="City, Country" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Skills & Experience</label>
              <textarea name="skills" value={form.skills} onChange={handleChange} rows={3} placeholder="Relevant skills, experience, or qualifications..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold resize-none" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Availability</label>
              <input name="availability" value={form.availability} onChange={handleChange} placeholder="e.g. Weekends, Evenings, Full-time, Event-based" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-3.5 bg-[#096b38] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#07582e] transition-all shadow-lg shadow-[#096b38]/20 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <><Send className="w-4 h-4" /> Submit Application</>}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
