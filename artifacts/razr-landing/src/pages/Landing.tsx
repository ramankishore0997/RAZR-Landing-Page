import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Clock, RefreshCcw, DollarSign, Briefcase, ShieldCheck, BarChart, Check, X, ArrowRight, Users, Building2, Megaphone, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

const WA_LINK = "https://wa.me/917065339146";

const niches = [
  "E-commerce", "Lead Generation", "Affiliate Marketing", "SaaS & Software",
  "Real Estate", "Health & Wellness", "Education & Courses", "Gaming",
  "Crypto & Finance", "Travel & Hospitality", "Fashion & Apparel", "Auto & Motors",
  "Insurance", "Digital Products", "Dropshipping", "Local Business",
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative flex items-center min-h-[90vh]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10 relative">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-xs font-mono tracking-wider uppercase mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Agency Ad Accounts — Available Now
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-6xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-bold tracking-tight mb-6 leading-[0.95]"
              >
                <span className="text-white block">Scale Your Meta Ads.</span>
                <span className="text-blue-500 block">Without Limits.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-medium leading-relaxed"
              >
                RAZR Marketing gives you agency-grade Meta ad accounts — built for high-volume advertisers who need spend capacity, stability, and zero downtime.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto mb-12"
              >
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="button-hero-primary"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white text-black rounded-lg font-semibold text-sm transition-all hover:bg-gray-100 flex items-center justify-center gap-2"
                >
                  Get Agency Account <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact">
                  <span
                    data-testid="link-hero-secondary"
                    className="w-full sm:w-auto px-6 py-3.5 bg-white/5 border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Talk to Sales
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {["₹1999 One-Time Setup", "2% Top-Up Fee", "$50 Min Deposit", "Activated In 1 Hour", "Lifetime Replacement"].map((badge, i) => (
                  <div key={i} className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-gray-300">
                    {badge}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5 relative z-10 w-full"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative bg-[#0d0d12] border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 border border-blue-500/20 rounded-xl pointer-events-none" />
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <h3 className="font-semibold text-white text-sm">Ad Account Overview</h3>
                  <div className="flex items-center gap-1.5 bg-green-500/10 text-green-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Live
                  </div>
                </div>
                <div className="mb-8">
                  <div className="text-xs text-gray-400 mb-1">Ad Spend This Month</div>
                  <div className="text-3xl font-display font-bold text-white mb-4">$42,850.00</div>
                  <div className="flex items-end gap-1 h-24">
                    {[30, 45, 25, 60, 40, 80, 50, 90, 75, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                        className="flex-1 bg-blue-500/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {[
                    { label: "Spend Limit", value: "Unlimited" },
                    { label: "Top-Up Fee", value: "2%" },
                    { label: "Activation", value: "< 1 Hour" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-xs text-gray-400">{row.label}</span>
                      <span className="text-xs font-medium text-white">{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xs text-gray-500">RAZR Marketing</div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Agency Grade</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ──────────────────────────────────────── */}
      <section className="py-8 border-y border-white/5 bg-white/[0.015]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {[
              { value: "2,000+", label: "Accounts Activated" },
              { value: "₹1999", label: "One-Time Setup Fee" },
              { value: "< 1 Hr", label: "Activation Time" },
              { value: "24/7", label: "Support Response" },
            ].map((s, i) => (
              <div key={i} data-testid={`stat-${i}`} className="bg-background px-8 py-6 text-center">
                <div className="font-display text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Is It For ────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">Who it's for</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Built for serious advertisers.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Users,
                title: "Individual Advertisers",
                desc: "Affiliate marketers, lead gen operators, and solo media buyers who've hit the ceiling on personal accounts and need stable high-volume infrastructure.",
                tags: ["Affiliate", "Lead Gen", "Solo Buyers"],
                color: "blue",
              },
              {
                icon: Building2,
                title: "Marketing Agencies",
                desc: "Agencies managing multiple client campaigns who need accounts that don't get restricted, with the ability to add team members and scale billing cleanly.",
                tags: ["Multi-client", "Team Access", "Scale Billing"],
                color: "indigo",
              },
              {
                icon: Megaphone,
                title: "Brands & E-commerce",
                desc: "DTC brands and e-commerce operators who need unlimited daily spend, no restriction risk, and long-term account stability to run evergreen campaigns.",
                tags: ["DTC Brands", "E-commerce", "Evergreen Ads"],
                color: "violet",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-testid={`card-audience-${i}`}
                className="bg-[#111116] border border-white/5 rounded-2xl p-7 flex flex-col gap-5"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${card.color}-500/15`}>
                  <card.icon className={`w-5 h-5 text-${card.color}-400`} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {card.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-white/8 bg-white/5 text-gray-400 font-medium">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Teaser Bento ────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0a0a0c]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">The Advantage</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Infrastructure that wins.</h2>
            </div>
            <Link href="/benefits">
              <span data-testid="link-benefits-all" className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer shrink-0">
                View all benefits <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="md:col-span-2 md:row-span-2 bg-[#111116] border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Unlimited Ad Spend From Day 1</h3>
              <p className="text-gray-400 text-sm">Scale your campaigns instantly. No daily limits, no warm-up periods, no approval delays holding your ROAS back.</p>
              <div className="absolute bottom-0 right-0 left-0 h-28 bg-gradient-to-t from-[#111116] to-transparent flex items-end px-8 pb-4">
                <div className="w-full flex items-end gap-1.5 h-16 opacity-50">
                  {[20, 40, 60, 80, 100].map((h, i) => (
                    <div key={i} className={`flex-1 rounded-t ${i === 4 ? "bg-blue-500" : "bg-white/10"}`} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="md:col-span-1 md:row-span-2 bg-[#111116] border border-white/5 rounded-2xl p-7"
            >
              <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                <RefreshCcw className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Lifetime Replacement</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Account issues? We replace it and transfer your remaining balance. No extra cost, no questions asked.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="md:col-span-1 bg-[#111116] border border-white/5 rounded-2xl p-6"
            >
              <ShieldCheck className="w-5 h-5 text-green-400 mb-4" />
              <h3 className="font-display font-bold text-white mb-1">Lower Restriction Risk</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Agency infrastructure — drastically fewer bans and account flags.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="md:col-span-1 bg-[#111116] border border-white/5 rounded-2xl p-6"
            >
              <Clock className="w-5 h-5 text-orange-400 mb-4" />
              <h3 className="font-display font-bold text-white mb-1">Activated In 60 Min</h3>
              <p className="text-xs text-gray-400 leading-relaxed">From payment to live account — most activations complete within the hour.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="md:col-span-2 bg-[#111116] border border-white/5 rounded-2xl p-6 flex items-center gap-5"
            >
              <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
                <DollarSign className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white mb-0.5">Start With Just $50</h3>
                <p className="text-sm text-gray-400">Minimum $50 deposit. 2% top-up fee. One-time ₹1999 setup. No subscriptions.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="md:col-span-2 bg-[#111116] border border-white/5 rounded-2xl p-6 flex items-center gap-5"
            >
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white mb-0.5">All Niches Supported</h3>
                <p className="text-sm text-gray-400">Whitehat and blackhat categories. E-commerce, finance, health, affiliates — we've got you covered.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">Why upgrade</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Standard vs RAZR.</h2>
          </div>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20">
            <div className="grid grid-cols-3 p-5 bg-white/5 border-b border-white/10">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Feature</div>
              <div className="text-xs font-semibold text-red-400/80 uppercase tracking-wider text-center">Standard Account</div>
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider text-center flex items-center justify-center gap-1.5">
                <Zap className="w-3 h-3" /> RAZR Marketing
              </div>
            </div>
            {[
              { name: "Daily Spend Cap", std: "₹5k–₹15k limit", rz: "Unlimited" },
              { name: "Restriction Risk", std: "Very High", rz: "Very Low" },
              { name: "Support", std: "AI Bots / Tickets", rz: "Direct WhatsApp" },
              { name: "Replacement Policy", std: "None", rz: "Lifetime Free" },
              { name: "Activation Time", std: "Days / Weeks", rz: "Within 1 Hour" },
              { name: "Team / BM Access", std: "Limited", rz: "Full Access" },
              { name: "Niche Support", std: "Whitehat Only", rz: "BH + WH Both" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-5 border-b border-white/5 last:border-0 ${i % 2 === 0 ? "bg-white/[0.015]" : ""}`}>
                <div className="text-sm font-medium text-gray-300">{row.name}</div>
                <div className="text-sm text-center text-red-400/70 flex items-center justify-center gap-1.5">
                  <X className="w-3 h-3 shrink-0" /> {row.std}
                </div>
                <div className="text-sm text-center text-green-400 flex items-center justify-center gap-1.5 font-semibold">
                  <Check className="w-3 h-3 shrink-0" /> {row.rz}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0a0a0c]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">Social proof</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Trusted by advertisers.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote: "Switched from my personal account to RAZR and my daily spend cap went from ₹8k to unlimited. ROAS improved because campaigns stopped getting interrupted.",
                name: "Arjun S.",
                role: "Performance Marketer, Mumbai",
                avatar: "bg-blue-500",
              },
              {
                quote: "We manage 12 client accounts through RAZR. Having priority WhatsApp support and lifetime replacement means we never have a client emergency we can't fix in minutes.",
                name: "Priya M.",
                role: "Agency Director, Bangalore",
                avatar: "bg-indigo-500",
              },
              {
                quote: "The ₹1999 setup fee paid for itself on day one. We run blackhat affiliate offers that can't touch standard Meta accounts — RAZR is the only solution that works.",
                name: "Rohan K.",
                role: "Affiliate Marketer, Delhi",
                avatar: "bg-violet-500",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-testid={`card-testimonial-${i}`}
                className="bg-[#111116] border border-white/5 rounded-2xl p-7 flex flex-col gap-6"
              >
                <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className={`w-9 h-9 rounded-full ${t.avatar} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Niches ───────────────────────────────────────────── */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">Coverage</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Works for your niche.</h2>
            <p className="text-gray-400 mt-4 text-lg max-w-xl">Whether you run whitehat compliance-friendly offers or need blackhat infrastructure — RAZR accounts support it all.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {niches.map((niche, i) => (
              <motion.div
                key={niche}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                data-testid={`badge-niche-${i}`}
                className="px-4 py-2 rounded-full border border-white/8 bg-white/[0.03] text-sm text-gray-300 font-medium hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-white transition-all cursor-default"
              >
                {niche}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Teaser ───────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0a0a0c]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">How it works</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Activated in under an hour.</h2>
            </div>
            <Link href="/process">
              <span data-testid="link-process-all" className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer shrink-0">
                Full process guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-white/5 via-blue-500/50 to-white/5 -translate-y-1/2" />
            {[
              { title: "Submit Request", desc: "Message us on WhatsApp with your niche and requirements.", opacity: "opacity-30" },
              { title: "Complete Payment", desc: "Pay the one-time ₹1999 setup fee via your preferred method.", opacity: "opacity-55" },
              { title: "Account Setup", desc: "We configure and link your agency-grade Meta account.", opacity: "opacity-80" },
              { title: "Start Scaling", desc: "Account delivered within 1 hour. Load funds and go live.", opacity: "opacity-100" },
            ].map((step, i) => (
              <div key={i} data-testid={`card-process-${i}`} className="bg-[#111116] border border-white/5 rounded-xl p-6 relative overflow-hidden z-10">
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-500 ${step.opacity}`} />
                <div className="absolute top-2 right-4 text-5xl font-display font-bold text-white/[0.04] select-none">0{i + 1}</div>
                <h4 className="font-semibold text-white mb-2 text-sm relative z-10">{step.title}</h4>
                <p className="text-xs text-gray-400 relative z-10 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden border border-white/8 bg-[#0d0d14]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 border border-blue-500/10 rounded-3xl pointer-events-none" />
            <div className="relative px-10 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center gap-10 justify-between">
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-xs font-mono tracking-wider uppercase mb-6 text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Currently accepting new accounts
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Ready to stop getting capped?
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  One-time ₹1999 setup fee. Live within the hour. No subscriptions, no hidden charges.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="button-final-cta"
                  className="px-8 py-4 bg-white text-black rounded-lg font-bold text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                  Get Agency Account <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact">
                  <span data-testid="link-final-contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer">
                    Contact Us <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="py-16 px-4 border-t border-white/8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div className="max-w-xs">
              <div className="font-display font-bold text-xl tracking-tighter text-white flex items-center gap-1 mb-3">
                RAZR <span className="text-blue-500">Marketing</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Premium Meta agency ad accounts for performance marketers who need speed, scale, and stability.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Product</div>
                <div className="flex flex-col gap-3">
                  <Link href="/benefits"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Benefits</span></Link>
                  <Link href="/process"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">How It Works</span></Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Support</div>
                <div className="flex flex-col gap-3">
                  <Link href="/faq"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQ</span></Link>
                  <Link href="/contact"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</span></Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Get Started</div>
                <div className="flex flex-col gap-3">
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">WhatsApp Us</a>
                  <span className="text-gray-400">+91 7065339146</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-600">
            <span>© {new Date().getFullYear()} RAZR Marketing. All rights reserved.</span>
            <span>Premium Meta Advertising Solutions</span>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
}
