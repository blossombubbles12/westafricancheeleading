"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Mission & Vision", href: "/about" },
      { name: "Leadership", href: "/about/board" },
    ],
  },
  { name: "Programs", href: "/programs" },
  { name: "Membership", href: "/membership" },
  { name: "News & Media", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-1.5"
          : "bg-white py-2.5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group shrink-0 ml-2 md:ml-16">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/waclogo.png"
              alt="WAC Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-outfit font-bold leading-tight text-xs md:text-sm tracking-tight text-[#0a1628]">
              West African
            </span>
            <span className="font-outfit font-bold leading-tight text-sm md:text-base tracking-tight text-[#096b38]">
              Cheerleading
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "px-3 py-2 text-xs font-black uppercase tracking-[0.15em] transition-all duration-200 rounded-lg flex items-center gap-0.5",
                  pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href))
                    ? "text-[#096b38] bg-[#096b38]/5"
                    : "text-[#0a1628]/70 hover:text-[#096b38] hover:bg-gray-50"
                )}
              >
                {item.name}
                {item.children && <ChevronDown className="w-2.5 h-2.5 opacity-50" />}
              </Link>

              <AnimatePresence>
                {item.children && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.12 }}
                    className="absolute top-full left-0 mt-0.5 w-52 bg-white rounded-xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden z-50"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] transition-colors border-b border-gray-50 last:border-0",
                          pathname === child.href
                            ? "text-[#096b38] bg-[#096b38]/5"
                            : "text-[#0a1628]/60 hover:text-[#096b38] hover:bg-[#096b38]/5"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link
            href="/membership"
            className="ml-2 px-5 py-2 rounded-xl text-xs font-black uppercase tracking-[0.15em] transition-all shadow-lg bg-[#096b38] text-white hover:bg-[#07582e] active:scale-95"
          >
            Join WAC
          </Link>
        </nav>

        <button
          className="xl:hidden p-2 text-current"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-[#0a1628] w-6 h-6" />
          ) : (
            <Menu className="text-[#0a1628] w-6 h-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl p-4 xl:hidden max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-bold transition-all",
                      pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href))
                        ? "bg-[#096b38]/10 text-[#096b38]"
                        : "text-[#0a1628]/70 hover:bg-gray-50 hover:text-[#096b38]"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-0.5 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2.5 rounded-lg text-xs font-bold transition-all",
                            pathname === child.href
                              ? "bg-[#fab708]/10 text-[#fab708]"
                              : "text-gray-500 hover:text-[#096b38]"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="h-px bg-gray-100 my-3" />
              <Link
                href="/membership"
                className="block w-full text-center px-4 py-3.5 bg-[#096b38] text-white rounded-xl font-bold text-sm hover:bg-[#07582e] transition-all shadow-lg"
              >
                Join WAC
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
