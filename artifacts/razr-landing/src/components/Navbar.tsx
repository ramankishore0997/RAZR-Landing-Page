import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK = "https://wa.me/917065339146";

const navLinks = [
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          {/* Left Logo */}
          <Link href="/">
            <div className="font-display font-bold text-2xl tracking-tighter text-white cursor-pointer select-none">
              RAZR.
            </div>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isHash = link.href.startsWith("/#");
              const content = (
                <span className="relative group text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer py-2">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </span>
              );

              return isHash ? (
                <a key={link.label} href={link.href}>{content}</a>
              ) : (
                <Link key={link.label} href={link.href}>{content}</Link>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex bg-white text-black px-4 py-2 rounded-md font-semibold text-xs hover:bg-gray-200 transition-colors"
            >
              Get Started
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0c] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="font-display font-bold text-2xl tracking-tighter text-white">
                RAZR.
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white p-2 bg-white/5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-8">
              {navLinks.map((link) => {
                const isHash = link.href.startsWith("/#");
                const content = (
                  <span className="text-3xl font-display font-bold text-gray-300 hover:text-white transition-colors block">
                    {link.label}
                  </span>
                );

                return isHash ? (
                  <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{content}</a>
                ) : (
                  <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{content}</Link>
                );
              })}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-8 bg-white text-black py-4 rounded-lg font-bold text-center text-lg"
              >
                Get Agency Account
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
