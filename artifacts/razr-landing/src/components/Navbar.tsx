import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK = "https://wa.me/917065339146";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Benefits", href: "/benefits" },
  { label: "Process", href: "/process" },
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
          <Link href="/" data-testid="link-logo">
            <div className="font-display font-bold text-xl tracking-tighter text-white cursor-pointer select-none flex items-center gap-1">
              RAZR <span className="text-blue-500">Marketing</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span className={`relative group text-sm font-medium transition-colors cursor-pointer py-2 ${location === link.href ? "text-white" : "text-gray-400 hover:text-white"}`}>
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-transform origin-left duration-300 ${location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="link-nav-cta"
              className="hidden md:flex items-center gap-1.5 bg-white text-black px-4 py-2 rounded-md font-semibold text-xs hover:bg-gray-200 transition-colors"
            >
              Get Started <ArrowRight className="w-3 h-3" />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              data-testid="button-mobile-menu"
              className="md:hidden text-white p-1"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

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
              <div className="font-display font-bold text-xl tracking-tighter text-white flex items-center gap-1">
                RAZR <span className="text-blue-500">Marketing</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                data-testid="button-mobile-close"
                className="text-white p-2 bg-white/5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-3xl font-display font-bold text-gray-300 hover:text-white transition-colors block">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                data-testid="link-mobile-cta"
                className="mt-8 bg-white text-black py-4 rounded-lg font-bold text-center text-lg"
              >
                Get Agency Account
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
