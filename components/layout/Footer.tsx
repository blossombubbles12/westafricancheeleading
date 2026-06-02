import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Instagram } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About WAC", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Membership", href: "/membership" },
      { label: "News & Media", href: "/news" },
      { label: "Contact Us", href: "/contact" },
      { label: "Donate", href: "/donate" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Competitions & Events", href: "/events" },
      { label: "Training & Certification", href: "/training" },
      { label: "Partners & Sponsors", href: "/partners" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Leadership", href: "/about/board" },
      { label: "Media Gallery", href: "/media" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#096b38] via-[#fab708] to-[#de020c]" />
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/waclogo.png"
                  alt="WAC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-[15px] font-outfit font-bold text-white leading-tight">
                  West African
                </h2>
                <h2 className="text-xl font-outfit font-bold text-[#fab708] leading-tight">
                  Cheerleading
                </h2>
              </div>
            </Link>
            <p className="text-base text-white/50 max-w-xs leading-relaxed font-medium">
              The premier regional sports organization dedicated to promoting cheerleading, developing athletes, and building champions across West Africa.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/wacleaders" },
                { icon: Twitter, href: "https://twitter.com/wacleaders" },
                { icon: Instagram, href: "https://www.instagram.com/wacleaders" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/wacleaders" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 text-white/50 rounded-xl hover:bg-[#fab708] hover:text-[#0a1628] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/80">
                {group.title}
              </h3>
              <ul className="space-y-2.5 text-base font-medium">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-[#fab708] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/80">
              Contact
            </h3>
            <div className="space-y-3 text-base font-medium">
              <a
                href="mailto:info@westafricancheerleading.org"
                className="flex items-center gap-2 text-white/40 hover:text-[#fab708] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> General Info
              </a>
              <a
                href="mailto:membership@westafricancheerleading.org"
                className="flex items-center gap-2 text-white/40 hover:text-[#fab708] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> Membership
              </a>
              <a
                href="mailto:training@westafricancheerleading.org"
                className="flex items-center gap-2 text-white/40 hover:text-[#fab708] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> Training
              </a>
              <a
                href="mailto:partnerships@westafricancheerleading.org"
                className="flex items-center gap-2 text-white/40 hover:text-[#fab708] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> Partnerships
              </a>
              <a
                href="mailto:media@westafricancheerleading.org"
                className="flex items-center gap-2 text-white/40 hover:text-[#fab708] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> Media
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-white/30 uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} West African Cheerleading. All rights reserved.</p>
          <p>Built for athletes. Driven by passion.</p>
        </div>
      </div>
    </footer>
  );
}
