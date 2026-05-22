import { motion } from "framer-motion";
import { MessageCircle, CreditCard, Settings, Rocket, Clock, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

const WA_LINK = "https://wa.me/917065339146";

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Submit Your Request",
    color: "blue",
    duration: "< 5 minutes",
    whatYouDo: "Message us on WhatsApp at +91 7065339146. Tell us your niche (e.g. e-commerce, affiliate, lead gen), whether you need a whitehat or blackhat account, and any other requirements.",
    whatWeDo: "We'll confirm availability, verify your requirements, and send you complete setup instructions and payment details within minutes.",
    tip: "The more specific you are about your niche and offer type, the faster we can match you with the right account configuration.",
  },
  {
    num: "02",
    icon: CreditCard,
    title: "Complete Setup Payment",
    color: "indigo",
    duration: "< 10 minutes",
    whatYouDo: "Pay the one-time ₹1999 setup fee via UPI, bank transfer, or any payment method we share. This is a lifetime fee — you pay it once, ever.",
    whatWeDo: "We verify your payment instantly and begin account preparation. No waiting period after confirmation.",
    tip: "Keep your payment confirmation screenshot. We'll log it against your account for lifetime replacement support.",
  },
  {
    num: "03",
    icon: Settings,
    title: "Account Configuration",
    color: "violet",
    duration: "15–45 minutes",
    whatYouDo: "Share your Business Manager ID (if required) so we can assign the account correctly. We'll walk you through this if you're unsure.",
    whatWeDo: "We configure the agency account, assign the correct permissions, verify delivery settings, and test the account before handing it over.",
    tip: "Most accounts are configured and ready before the 45-minute mark. Complex setups (multi-region, specific niche configs) may take slightly longer.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Account Delivered — Go Live",
    color: "green",
    duration: "Immediately after step 3",
    whatYouDo: "Fund your new account with a minimum $50 deposit. Create your campaign, set your audience, and launch.",
    whatWeDo: "We stay on standby for 24 hours post-activation to handle any questions or issues during your first campaign setup.",
    tip: "Start with a modest budget ($100–$200) for the first 48 hours even though there's no spend cap — let the algorithm optimize before scaling aggressively.",
  },
];

const faqItems = [
  { q: "What if my account gets restricted after activation?", a: "We provide lifetime replacement support. If your account faces an unresolvable restriction, we replace it at no extra charge and transfer any remaining balance." },
  { q: "Do I need an existing Business Manager to get started?", a: "Not necessarily. We can guide you through creating one if needed. If you already have a BM, sharing the ID speeds up the process." },
  { q: "Can I top up in multiple smaller amounts?", a: "Yes. You can top up in any amount above the $50 minimum. The 2% service fee applies to each top-up transaction." },
  { q: "Is there a limit to how many campaigns I can run?", a: "No. Agency accounts have no campaign count limits. Run as many ad sets and campaigns as your budget and strategy require." },
];

export default function Process() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">How it works</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Activated in<br />
              <span className="text-blue-500">under one hour.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Four steps from first message to running live campaigns on your new agency account.
            </p>
          </motion.div>

          {/* Time summary strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 mt-12"
          >
            {[
              { icon: Clock, label: "Average total time", value: "45–60 minutes" },
              { icon: CheckCircle2, label: "Payment required", value: "₹1999 (once)" },
              { icon: MessageCircle, label: "Communication", value: "WhatsApp only" },
            ].map((item, i) => (
              <div key={i} data-testid={`stat-process-${i}`} className="flex items-center gap-3 px-4 py-3 bg-[#111116] border border-white/5 rounded-xl">
                <item.icon className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">{item.label}</div>
                  <div className="text-sm font-semibold text-white">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 bg-[#0a0a0c]">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                data-testid={`card-step-${i}`}
                className={`bg-[#111116] border border-white/5 rounded-2xl overflow-hidden hover:border-${step.color}-500/20 transition-colors`}
              >
                <div className={`h-1 w-full bg-gradient-to-r from-${step.color}-500/60 to-${step.color}-500/20`} />
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Step header */}
                    <div className="lg:w-56 shrink-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 bg-${step.color}-500/15 rounded-xl flex items-center justify-center`}>
                          <step.icon className={`w-5 h-5 text-${step.color}-400`} />
                        </div>
                        <span className={`text-xs font-mono font-bold text-${step.color}-400 uppercase tracking-widest`}>Step {step.num}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">{step.title}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2">What you do</div>
                        <p className="text-sm text-gray-300 leading-relaxed">{step.whatYouDo}</p>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2">What we do</div>
                        <p className="text-sm text-gray-300 leading-relaxed">{step.whatWeDo}</p>
                      </div>
                      <div className="md:col-span-2 bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4">
                        <div className={`text-[10px] font-bold uppercase tracking-widest text-${step.color}-400 mb-1.5`}>Pro tip</div>
                        <p className="text-xs text-gray-400 leading-relaxed">{step.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ mini-section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-4 h-4 text-blue-400" />
              <p className="text-xs font-mono uppercase tracking-widest text-blue-400">Process FAQ</p>
            </div>
            <h2 className="font-display text-4xl font-bold text-white">Common questions about setup.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (i % 2) * 0.07 }}
                data-testid={`card-faq-process-${i}`}
                className="bg-[#111116] border border-white/5 rounded-xl p-6"
              >
                <h4 className="font-semibold text-white text-sm mb-3">{item.q}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq">
              <span data-testid="link-process-faq" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors cursor-pointer font-medium">
                See all frequently asked questions <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0a0a0c]">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Start the process now.</h2>
            <p className="text-gray-400 text-lg mb-10">Message us on WhatsApp. First response in under 5 minutes.</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="button-process-cta"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-lg font-bold text-lg hover:bg-[#1ebe5d] transition-all shadow-[0_0_30px_rgba(37,211,102,0.25)]"
            >
              <FaWhatsapp className="w-6 h-6" />
              Message Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/8">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-xl text-white flex items-center gap-1">
            RAZR <span className="text-blue-500">Marketing</span>
          </div>
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} RAZR Marketing. All rights reserved.</p>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
}
