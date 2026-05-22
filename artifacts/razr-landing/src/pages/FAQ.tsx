import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

const WA_LINK = "https://wa.me/917065339146";

const faqs = [
  {
    q: "What is a RAZR Agency Ad Account?",
    a: "A RAZR Agency Ad Account is a premium-grade Meta advertising account provided through our agency infrastructure. It gives you higher spending limits, lower restriction risk, and institutional-level stability.",
    cat: "Account & Pricing"
  },
  {
    q: "What is the setup fee?",
    a: "The one-time setup fee is ₹1999 (lifetime). This covers full account creation, configuration, onboarding support, and lifetime replacement support.",
    cat: "Account & Pricing"
  },
  {
    q: "What is the top-up fee?",
    a: "We charge a 2% fee on every top-up you make to your ad account.",
    cat: "Account & Pricing"
  },
  {
    q: "How long does activation take?",
    a: "Once you complete the setup payment, your agency account is activated and delivered within 1 hour.",
    cat: "Technical"
  },
  {
    q: "What does Lifetime Replacement Support mean?",
    a: "If your account ever encounters an unresolvable issue, we replace it at no additional charge and transfer remaining balances.",
    cat: "Support"
  },
  {
    q: "What niches are supported?",
    a: "We support a wide range of niches including e-commerce, lead generation, SaaS, and affiliate marketing (both whitehat and blackhat).",
    cat: "Technical"
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="font-display text-lg font-bold text-white pr-8">{q}</span>
        <span className="text-gray-400 text-2xl font-light shrink-0">
          {open ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-400 text-sm leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h1 className="font-display text-5xl font-bold tracking-tight text-white mb-4">FAQ.</h1>
            <p className="text-lg text-gray-400">Everything you need to know about RAZR agency accounts.</p>
          </div>

          <div className="grid md:grid-cols-12 gap-12 relative items-start">
            {/* Left Sidebar */}
            <div className="md:col-span-3 md:sticky top-32 space-y-4">
              {["Account & Pricing", "Technical", "Support"].map((cat, i) => (
                <div key={i} className={`text-sm font-medium cursor-pointer ${i === 0 ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                  {cat}
                </div>
              ))}
            </div>

            {/* Center Content */}
            <div className="md:col-span-6 bg-[#111116] border border-white/5 rounded-2xl px-8">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>

            {/* Right Sticky Card */}
            <div className="md:col-span-3 md:sticky top-32">
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6">
                <h4 className="font-display font-bold text-white mb-2">Can't find your answer?</h4>
                <p className="text-xs text-gray-400 mb-6">Our team is available to answer any specific questions you have.</p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-lg transition-colors w-max"
                >
                  Chat with us <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 px-4 border-t border-white/5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RAZR Marketing. All rights reserved.
      </footer>
      <FloatingCTA />
    </div>
  );
}
