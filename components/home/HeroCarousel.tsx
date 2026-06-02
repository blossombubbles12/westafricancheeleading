"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCloudinaryPool } from "@/hooks/useCloudinaryPool";
import { transformCloudinary } from "@/lib/cloudinary-client";

interface HeroSlide {
    tag: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    image?: string;
}

const HERO_CONTENT: HeroSlide[] = [
    {
        tag: "West African Cheerleading",
        title: "Empowering Youth.\nBuilding Champions.",
        subtitle: "Uniting West Africa through the power of cheerleading — developing athletes, coaches, and leaders at every level.",
        ctaLabel: "Join the Movement",
        ctaHref: "/membership",
    },
    {
        tag: "Competitions & Events",
        title: "Where Champions\nAre Made.",
        subtitle: "From regional qualifiers to international championships — we create platforms for athletes to shine on the global stage.",
        ctaLabel: "View Events",
        ctaHref: "/events",
    },
    {
        tag: "Athlete Development",
        title: "Train. Compete.\nExcel.",
        subtitle: "World-class coaching, certification programs, and development pathways for athletes, coaches, and officials across West Africa.",
        ctaLabel: "Explore Programs",
        ctaHref: "/programs",
    },
];

export function HeroCarousel() {
    const { images, loading: poolLoading } = useCloudinaryPool("sliders", 10);
    const [slides, setSlides] = useState<HeroSlide[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (!poolLoading) {
            const enriched = HERO_CONTENT.map((s, idx) => ({
                ...s,
                image: transformCloudinary(images[idx % images.length]) || "",
            }));
            setSlides(enriched);
            setLoading(false);
        }
    }, [images, poolLoading]);

    const slideNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const slidePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        if (slides.length === 0) return;
        const interval = setInterval(slideNext, 7000);
        return () => clearInterval(interval);
    }, [slideNext, slides.length]);

    if (loading) return (
        <div className="h-screen flex items-center justify-center bg-[#0a1628]" />
    );

    return (
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-[#0a1628]">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={{
                        enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
                        center: { x: 0, opacity: 1 },
                        exit: (d: number) => ({ x: d < 0 ? "100%" : "-100%", opacity: 0, transition: { duration: 0.5 } }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: "spring", stiffness: 260, damping: 30 }, opacity: { duration: 0.4 } }}
                    className="absolute inset-0"
                >
                    {slides[currentIndex]?.image && (
                        <Image
                            src={slides[currentIndex].image!}
                            alt={slides[currentIndex].title}
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/60 to-[#0a1628]/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-20 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-3xl"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fab708]/10 text-[#fab708] text-[8px] font-black uppercase tracking-[0.25em] border border-[#fab708]/20 mb-6"
                        >
                            <Sparkles className="w-3 h-3" />
                            {slides[currentIndex].tag}
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-outfit font-black text-white leading-[1.05] tracking-tight whitespace-pre-line"
                        >
                            {slides[currentIndex].title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="text-white/60 text-base md:text-lg font-medium max-w-xl mt-6 leading-relaxed"
                        >
                            {slides[currentIndex].subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="flex gap-4 mt-10"
                        >
                            <Link
                                href={slides[currentIndex].ctaHref}
                                className="group px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl flex items-center justify-center gap-2 bg-[#096b38] text-white hover:bg-[#07582e] active:scale-95 shadow-[#096b38]/20"
                            >
                                {slides[currentIndex].ctaLabel}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                className="px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-white/20 text-white/80 hover:bg-white/10 hover:text-white flex items-center justify-center"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6">
                <button
                    onClick={slidePrev}
                    className="p-2 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
                            className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? "w-10 bg-[#fab708]" : "w-2 bg-white/20 hover:bg-white/40"}`}
                        />
                    ))}
                </div>
                <button
                    onClick={slideNext}
                    className="p-2 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
}
