import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

const WA_LINK = "https://wa.me/917065339146";

const faqs = [
  {
    q: "What is a RAZR Agency Ad Account?",
    a: "A RAZR Agency Ad Account is a premium-grade Meta advertising account provided through our agency infrastructure. It gives you higher spending limits, lower restriction risk, and institutional-level stability — the same accounts used by top-tier performance marketers globally.",
  },
  {
    q: "What is the setup fee and what does it include?",
    a: "The one-time setup fee is ₹1999 (lifetime). This covers full account creation, configuration, onboarding support, and lifetime replacement support. There are no hidden or recurring charges for the account itself.",
  },
  {
    q: "What is the top-up fee?",
    a: "We charge a 2% fee on every top-up you make to your ad account. For example, if you add $1000, you pay $20 as the service fee. This is the only ongoing cost beyond your actual ad spend.",
  },
  {
    q: "What is the minimum deposit to start running ads?",
    a: "The minimum deposit to fund your agency ad account and start running campaigns is $50.",
  },
  {
    q: "How long does account activation take?",
    a: "Once you complete the setup payment, your agency account is activated and delivered within 1 hour. In most cases it's much faster — often within 15–30 minutes during business hours.",
  },
  {
    q: "What does 'Lifetime Replacement Support' mean?",
    a: "If your account ever encounters an unresolvable issue, we replace it at no additional charge. If there is a remaining balance at the time of replacement, we also transfer it to your new account.",
  },
  {
    q: "What niches and business categories are supported?",
    a: "RAZR agency accounts support a wide range of niches including e-commerce, lead generation, SaaS, digital products, affiliate marketing, and more. Both whitehat and blackhat advertising categories are supported. Contact us with your specific niche if you need confirmation.",
  },
  {
    q: "Can I add team members or give BM access?",
    a: "Yes. The account is delivered through Business Manager and can be shared with your media buyers, clients, or team members with appropriate roles — just like any standard Meta business account.",
  },
  {
    q: "What is the difference between Blackhat and Whitehat accounts?",
    a: "Whitehat accounts are used for fully policy-compliant advertising. Blackhat accounts are for campaigns in restricted categories that standard personal or business accounts would immediately reject or ban. Both options are available — specify your requirement when you contact us.",
  },
  {
    q: "How do I get started?",
    a: "Message us on WhatsApp at +91 7065339146. Share your advertising niche and requirements. We'll confirm availability, share payment details, and activate your account within 1 hour of payment.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
      data-testid={`card-faq-${index}`}
      className="rounded-2xl border border-white/5 bg-card/20 hover:border-white/10 transition-colors overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        data-testid={`button-faq-toggle-${index}`}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <span className="text-base md:text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 text-muted-foreground font-medium leading-relaxed border-t border-white/5 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 font-sans">
      <div className="fixed inset-0 pointer-events-none opacity-20 mix-blend-screen z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <Navbar />

      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-4 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
              <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">Frequently Asked</span>{" "}
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              Everything you need to know about RAZR agency ad accounts. Still have questions?{" "}
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                Message us directly.
              </a>
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 rounded-3xl bg-card/30 border border-white/5 text-center"
          >
            <h3 className="text-2xl font-black text-white mb-3">Still have questions?</h3>
            <p className="text-muted-foreground font-medium mb-8 max-w-md mx-auto">
              Our team is available 7 days a week. Message us on WhatsApp and get a response in under 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                data-testid="button-faq-whatsapp"
                className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-xl font-black text-lg hover:bg-[#1ebe5d] transition-all hover:scale-[1.02] shadow-[0_0_25px_rgba(37,211,102,0.3)]"
              >
                <FaWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="/contact"
                data-testid="link-faq-contact"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Contact Page <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-background">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-black text-3xl tracking-tighter text-white flex items-center gap-1">
            RAZR<span className="text-primary text-4xl leading-none">.</span>
          </div>
          <p className="text-muted-foreground font-medium text-sm">© {new Date().getFullYear()} RAZR Agency Ad Account. All rights reserved.</p>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
}
