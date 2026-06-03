"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Briefcase, Users, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function DirectoryPage() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (index) params.set("index", index);
        const res = await fetch(`/api/directory?${params.toString()}`);
        const data = await res.json();
        setMembers(Array.isArray(data) ? data : []);
      } catch {
        setMembers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, [search, index]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#096b38] block mb-3">WAC Community</span>
          <h1 className="text-3xl md:text-5xl font-outfit font-bold text-[#0a1628]">Member Directory</h1>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">Browse athletes, coaches, schools, clubs, and organizations across West Africa.</p>
        </motion.div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input value={search} onChange={e => { setSearch(e.target.value); setIndex(""); }} placeholder="Search by name, role, or location..." className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#096b38] focus:ring-2 focus:ring-[#096b38]/10 transition-all font-bold bg-white shadow-sm" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1.5 mb-10">
          <button onClick={() => setIndex("")} className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${!index ? "bg-[#096b38] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>All</button>
          {ALPHABET.map(letter => (
            <button key={letter} onClick={() => { setIndex(letter); setSearch(""); }} className={`w-7 h-7 rounded-lg text-[10px] font-bold transition-all ${index === letter ? "bg-[#096b38] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>{letter}</button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-[#096b38]" /></div>
        ) : members.length === 0 ? (
          <div className="text-center py-20">
            <Users className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 text-sm font-bold">No members found</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((m, i) => (
              <motion.div key={m.full_name + i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="flex items-start gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border-2 border-gray-100">
                    {m.photo_url ? <Image src={m.photo_url} alt="" fill className="object-cover" unoptimized /> : <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm font-bold">{m.full_name?.[0]}</div>}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-outfit font-bold text-[#0a1628] truncate">{m.full_name}</h3>
                    {m.role && <p className="text-[10px] font-bold text-gray-400 mt-0.5 flex items-center gap-1"><Briefcase className="w-3 h-3" />{m.role}</p>}
                    {m.location && <p className="text-[10px] font-bold text-gray-400 mt-0.5 flex items-center gap-1"><MapPin className="w-3 h-3" />{m.location}</p>}
                  </div>
                </div>
                {m.biography && <p className="text-xs text-gray-500 mt-3 leading-relaxed line-clamp-2">{m.biography}</p>}
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-[10px] text-gray-400 font-bold">Not listed? <Link href="/community/register" className="text-[#096b38] hover:underline">Register as a member</Link></p>
        </div>
      </div>
    </div>
  );
}
