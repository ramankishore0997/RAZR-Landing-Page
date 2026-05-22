import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronRight, Menu, X } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-background/80 backdrop-blur-2xl"
            : "border-white/5 bg-background/40 backdrop-blur-xl"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" data-testid="link-logo">
            <div className="font-black text-3xl tracking-tighter bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-2 cursor-pointer select-none">
              RAZR<span className="text-primary text-4xl leading-none">.</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                  className={`hover:text-white transition-colors ${
                    location === link.href ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="link-nav-whatsapp"
              className="hidden md:flex bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-2.5 rounded-full font-semibold text-sm transition-all items-center gap-2 hover:border-white/20"
            >
              Get Started <ChevronRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              data-testid="button-mobile-menu"
              className="md:hidden text-white/70 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  className="text-white/70 hover:text-white font-semibold text-lg transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  className="text-white/70 hover:text-white font-semibold text-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="link-mobile-cta"
              className="mt-2 w-full py-4 bg-primary text-white rounded-xl font-bold text-center text-lg"
            >
              Get Agency Ad Account
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
