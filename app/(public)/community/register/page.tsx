"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Loader2, Upload, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const MEMBER_CATEGORIES = [
  "Athlete",
  "Coach",
  "School/University",
  "Cheer Club/Organization",
  "Official/Judge",
  "Corporate/Sponsor",
  "National Affiliate",
  "Individual Supporter",
];

export default function RegisterPage() {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    category: "",
    location: "",
    portfolio: "",
    biography: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("files", file);
      fd.append("folder", "members");
      const res = await fetch("/api/media", { method: "POST", body: fd });
      const data = await res.json();
      if (res.ok && data.success && data.results?.length > 0) {
        setPhotoUrl(data.results[0].secure_url);
      }
    } catch {} finally {
      setUploading(false);
    }
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
      const res = await fetch("/api/members/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          category: form.category || null,
          role: null,
          location: form.location.trim() || null,
          portfolio: form.portfolio.trim() || null,
          biography: form.biography.trim() || null,
          photo_url: photoUrl || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed. Please try again.");
        return;
      }
      setStep("success");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-[#096b38]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#096b38]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-outfit font-bold text-[#0a1628] mb-3">Registration Received!</h1>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Thank you for joining West African Cheerleading. Our team will review your application and follow up at <strong className="text-[#096b38]">{form.email}</strong>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/" className="px-6 py-3 bg-[#096b38] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#07582e] transition-all">Return Home</Link>
            <Link href="/membership" className="px-6 py-3 border border-gray-200 text-gray-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all">Membership Info</Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#096b38] block mb-3">Join WAC</span>
          <h1 className="text-3xl md:text-5xl font-outfit font-bold text-[#0a1628]">Become a Member</h1>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">Complete the form below to register with West African Cheerleading.</p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          {error && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" /> {error}
            </div>
          )}

          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-5 shadow-sm">
            <h2 className="text-sm font-outfit font-bold text-[#0a1628] flex items-center gap-2">
              <Users className="w-4 h-4 text-[#096b38]" /> Personal Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Full Name *</label>
                <input name="full_name" value={form.full_name} onChange={handleChange} required placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Phone Number</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Member Category</label>
                <select name="category" value={form.category} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold bg-white">
                  <option value="">Select a category...</option>
                  {MEMBER_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Location</label>
                <input name="location" value={form.location} onChange={handleChange} placeholder="City, Country" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Industry / Portfolio</label>
                <input name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="e.g. Education, Sports, Entertainment" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Brief Bio</label>
              <textarea name="biography" value={form.biography} onChange={handleChange} rows={3} placeholder="Tell us a little about yourself or your organization..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold resize-none" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Profile Photo</label>
              <div className="flex items-center gap-4">
                {photoUrl ? (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#096b38] flex-shrink-0">
                    <Image src={photoUrl} alt="" fill className="object-cover" unoptimized />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center flex-shrink-0">
                    <Upload className="w-5 h-5 text-gray-300" />
                  </div>
                )}
                <label className="cursor-pointer px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                  {uploading ? "Uploading..." : "Choose Photo"}
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" disabled={uploading} />
                </label>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-10 py-4 bg-[#096b38] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#07582e] transition-all shadow-xl shadow-[#096b38]/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</> : <><CheckCircle2 className="w-4 h-4" /> Submit Registration</>}
            </button>
            <p className="text-[10px] text-gray-400 mt-4 font-bold">Already a member? <Link href="/community/directory" className="text-[#096b38] hover:underline">Visit the directory</Link></p>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
