import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Users, Clock, RefreshCcw, DollarSign, Briefcase, ShieldCheck, HeadphonesIcon, BarChart, CheckCircle2, ArrowRight, Infinity } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

const WA_LINK = "https://wa.me/917065339146";

const categories = [
  {
    label: "Performance",
    color: "blue",
    benefits: [
      { icon: Zap, title: "Unlimited Ad Spend From Day 1", desc: "No daily cap, no spending warm-up. Your campaigns can scale as fast as your budget allows — from $50 to $50,000 without hitting a ceiling." },
      { icon: TrendingUp, title: "Better Scaling Ability", desc: "Agency accounts provide consistent delivery at scale. More spend, better algorithms, better delivery — your ROAS improves as you scale, not the other way around." },
      { icon: BarChart, title: "Higher Spending Capacity", desc: "Access true high-volume spend infrastructure. Run campaigns that standard accounts simply can't sustain without constant intervention." },
      { icon: Users, title: "High-Quality Audience & Leads", desc: "Agency accounts have access to premium inventory placements that deliver better audience quality and higher-intent leads across all campaign objectives." },
    ],
  },
  {
    label: "Stability & Security",
    color: "indigo",
    benefits: [
      { icon: ShieldCheck, title: "Lower Risk of Restrictions", desc: "Standard accounts face aggressive automated flags. Agency infrastructure is recognized differently — you get fewer false positives, less interruption, more uptime." },
      { icon: RefreshCcw, title: "Lifetime Replacement Support", desc: "If your account ever faces an unresolvable issue, we replace it immediately. No waiting, no escalation tickets — just a working account, same day." },
      { icon: Shield, title: "Remaining Balance Transfer", desc: "Account replaced? Any unspent balance is transferred to your new account. You never lose money due to a platform issue on our end." },
      { icon: Infinity, title: "Long-Term Advertising Support", desc: "RAZR accounts are built for longevity — not quick flips. You get an infrastructure partner, not just an account reseller." },
    ],
  },
  {
    label: "Support & Access",
    color: "green",
    benefits: [
      { icon: HeadphonesIcon, title: "Priority Chat Support", desc: "Direct WhatsApp access to our team — no ticket queues, no AI bots. Real answers in under 5 minutes during operating hours." },
      { icon: Users, title: "Easy Scaling & Team Access", desc: "Add media buyers, account managers, or clients to your Business Manager directly. Full role-based access without restrictions." },
      { icon: Briefcase, title: "Agency-Level Support Infrastructure", desc: "You get support that matches the quality of the account. Escalation paths, technical help, and billing assistance — all through one channel." },
      { icon: CheckCircle2, title: "Business-Friendly Setup", desc: "We configure everything through your Business Manager. Clean account structure, compliant setup, ready for long-term use." },
    ],
  },
  {
    label: "Pricing & Access",
    color: "orange",
    benefits: [
      { icon: DollarSign, title: "Minimum Deposit: $50", desc: "Start advertising immediately with a $50 minimum fund. No large upfront commitments — test your campaigns before scaling." },
      { icon: CheckCircle2, title: "2% Top-Up Fee Only", desc: "Every top-up costs just 2% extra. On $1,000 spent, you pay $20 in service fees. That's it. No monthly fees, no retainers." },
      { icon: Briefcase, title: "Supports Multiple Business Categories", desc: "Whitehat e-commerce, lead gen, SaaS, education — and blackhat affiliate, restricted verticals, and grey-area categories. All supported." },
      { icon: TrendingUp, title: "Suitable For Different Niches & Offers", desc: "Whether you're running DRTV-style video ads or native-style creatives across multiple funnels, RAZR accounts handle it all." },
    ],
  },
];

export default function Benefits() {
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
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">What you get</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Every advantage,<br />
              <span className="text-blue-500">in one account.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              RAZR Marketing agency accounts are built for performance marketers who treat Meta advertising as serious infrastructure — not a side channel.
            </p>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14"
          >
            {[
              { label: "Spend Cap", value: "None" },
              { label: "Activation", value: "< 1 Hour" },
              { label: "Setup Fee", value: "₹1999" },
              { label: "Top-Up", value: "2% Only" },
            ].map((s, i) => (
              <div key={i} data-testid={`stat-benefits-${i}`} className="bg-[#111116] border border-white/5 rounded-xl p-5">
                <div className="font-display text-2xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits by category */}
      {categories.map((cat, ci) => (
        <section key={cat.label} className={`py-20 px-4 ${ci % 2 === 1 ? "bg-[#0a0a0c]" : ""}`}>
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-10">
              <div className={`h-px flex-1 bg-${cat.color}-500/20`} />
              <span className={`text-xs font-mono uppercase tracking-widest text-${cat.color}-400 font-semibold px-3`}>{cat.label}</span>
              <div className={`h-px flex-1 bg-${cat.color}-500/20`} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {cat.benefits.map((b, bi) => (
                <motion.div
                  key={bi}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (bi % 2) * 0.07 }}
                  data-testid={`card-benefit-${ci}-${bi}`}
                  className={`bg-[#111116] border border-white/5 rounded-2xl p-7 hover:border-${cat.color}-500/20 transition-colors group`}
                >
                  <div className={`w-10 h-10 bg-${cat.color}-500/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-${cat.color}-500/25 transition-colors`}>
                    <b.icon className={`w-5 h-5 text-${cat.color}-400`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-3">{b.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 px-4 bg-[#0a0a0c]">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Ready to unlock all of this?</h2>
            <p className="text-gray-400 text-lg mb-10">One-time ₹1999 setup fee. Live within the hour. Message us on WhatsApp now.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                data-testid="button-benefits-cta"
                className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-100 transition-all"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                Get Agency Account
              </a>
              <a
                href="/contact"
                data-testid="link-benefits-contact"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
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
