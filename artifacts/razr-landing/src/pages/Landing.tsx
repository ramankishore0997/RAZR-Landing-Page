import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Users, Clock, RefreshCcw, DollarSign, Briefcase, ShieldCheck, HeadphonesIcon, BarChart, Check, X, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

const WA_LINK = "https://wa.me/917065339146";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative flex items-center min-h-[90vh]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10 relative">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-xs font-mono tracking-wider uppercase mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--green-accent))] animate-pulse" />
                AGENCY AD ACCOUNTS
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
                Premium Meta Agency Ad Account Solutions For Fast Scaling & Stable Advertising. Unlock the infrastructure used by top-tier performance marketers.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
              >
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white text-black rounded-lg font-semibold text-sm transition-all hover:bg-gray-100 flex items-center justify-center gap-2"
                >
                  Get Agency Account <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/5 border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Talk to Sales
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {["₹1999 Setup", "2% Top-Up", "$50 Min Deposit", "1Hr Activation"].map((badge, i) => (
                  <div key={i} className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-gray-300">
                    {badge}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Fake Dashboard Card */}
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
                {/* Glow border effect */}
                <div className="absolute inset-0 border border-blue-500/20 rounded-xl pointer-events-none" />
                
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <h3 className="font-semibold text-white">Ad Account Overview</h3>
                  <div className="flex items-center gap-1.5 bg-[hsl(var(--green-accent))]/10 text-[hsl(var(--green-accent))] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--green-accent))] animate-pulse" /> Live
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-sm text-gray-400 mb-1">Ad Spend This Month</div>
                  <div className="text-3xl font-display font-bold text-white mb-4">$42,850.00</div>
                  <div className="flex items-end gap-1 h-24">
                    {[30, 45, 25, 60, 40, 80, 50, 90, 75, 100].map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.05) }}
                        className="flex-1 bg-blue-500/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: "Spend Limit", value: "Unlimited" },
                    { label: "Top-Up Fee", value: "2%" },
                    { label: "Activation", value: "< 1 Hour" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-sm text-gray-400">{row.label}</span>
                      <span className="text-sm font-medium text-white">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xs text-gray-500">ID: ACT-994821</div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Agency Grade</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits - Bento Grid */}
      <section id="benefits" className="py-24 px-4 bg-[#0a0a0c]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">The Infrastructure Advantage.</h2>
            <p className="text-gray-400 text-lg max-w-xl">Everything you need to scale aggressively without the typical roadblocks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Feature 1 - Large */}
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
              <p className="text-gray-400">Scale your campaigns instantly. No daily limits, no warm-up periods holding your ROAS back.</p>
              
              <div className="absolute bottom-0 right-0 left-0 h-32 bg-gradient-to-t from-background to-transparent flex items-end px-8 pb-4">
                 <div className="w-full flex items-end gap-2 h-16 opacity-50">
                    <div className="flex-1 bg-white/10 h-[20%] rounded-t" />
                    <div className="flex-1 bg-white/10 h-[40%] rounded-t" />
                    <div className="flex-1 bg-white/10 h-[60%] rounded-t" />
                    <div className="flex-1 bg-blue-500/50 h-[80%] rounded-t" />
                    <div className="flex-1 bg-blue-500 h-[100%] rounded-t relative">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Feature 2 - Tall */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="md:col-span-1 md:row-span-2 bg-[#111116] border border-white/5 rounded-2xl p-8 border-t-indigo-500/30"
            >
              <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                <RefreshCcw className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Lifetime Support</h3>
              <p className="text-sm text-gray-400 mb-8">If the account faces issues, we replace it and transfer balances at no extra cost.</p>
            </motion.div>

            {/* Feature 3 - Standard */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 bg-[#111116] border border-white/5 rounded-2xl p-6"
            >
              <ShieldCheck className="w-5 h-5 text-green-400 mb-4" />
              <h3 className="font-display font-bold text-white mb-1">Lower Risk</h3>
              <p className="text-xs text-gray-400">Highly stable accounts with drastically reduced restriction rates.</p>
            </motion.div>

            {/* Feature 4 - Standard */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="md:col-span-1 md:row-span-1 bg-[#111116] border border-white/5 rounded-2xl p-6 bg-gradient-to-br from-white/[0.02] to-transparent"
            >
              <Clock className="w-5 h-5 text-orange-400 mb-4" />
              <h3 className="font-display font-bold text-white mb-1">Fast Activation</h3>
              <p className="text-xs text-gray-400">Get your account ready within 60 minutes of payment.</p>
            </motion.div>

            {/* Feature 5 - Wide */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="md:col-span-2 md:row-span-1 bg-[#111116] border border-white/5 rounded-2xl p-6 flex flex-col justify-center border-t-green-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1">Low Minimums</h3>
                  <p className="text-sm text-gray-400">Start with just a $50 minimum deposit and 2% top-up fee. No hidden charges.</p>
                </div>
              </div>
            </motion.div>
            
             {/* Feature 6 - Wide */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="md:col-span-2 md:row-span-1 bg-[#111116] border border-white/5 rounded-2xl p-6 flex flex-col justify-center"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1">Multiple Categories</h3>
                  <p className="text-sm text-gray-400">We support diverse niches including whitehat and blackhat offers.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing - 2 Column */}
      <section id="pricing" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Comparison */}
            <div>
              <h2 className="font-display text-4xl font-bold mb-8 text-white">Why RAZR?</h2>
              <div className="border border-white/10 rounded-xl overflow-hidden bg-black/20 backdrop-blur">
                <div className="grid grid-cols-3 p-4 bg-white/5 border-b border-white/10">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Feature</div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center">Standard</div>
                  <div className="text-xs font-semibold text-white uppercase tracking-wider text-center flex items-center justify-center gap-1">
                     <Zap className="w-3 h-3 text-blue-400" /> RAZR
                  </div>
                </div>
                {[
                  { name: "Spend Limit", std: "$50/day", rz: "Unlimited" },
                  { name: "Restriction Risk", std: "High", rz: "Very Low" },
                  { name: "Support", std: "AI Bots", rz: "Direct Chat" },
                  { name: "Replacement", std: "None", rz: "Lifetime Free" },
                  { name: "Approval Rate", std: "Average", rz: "High" }
                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 p-4 border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <div className="text-sm font-medium text-gray-300">{row.name}</div>
                    <div className="text-sm text-center text-red-400/80 flex items-center justify-center gap-1">
                      <X className="w-3 h-3" /> {row.std}
                    </div>
                    <div className="text-sm text-center text-green-400 flex items-center justify-center gap-1 font-semibold">
                      <Check className="w-3 h-3" /> {row.rz}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pricing Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="bg-[#0f0f13] border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-8 px-3 py-1 bg-blue-500 text-white text-[10px] font-bold tracking-wider uppercase rounded-b-md">
                  Most Popular
                </div>
                <h3 className="text-xl font-medium text-gray-300 mb-2">Agency Tier</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-6xl font-bold text-white">₹1999</span>
                  <span className="text-gray-500 text-sm">one-time</span>
                </div>
                <p className="text-sm text-gray-400 mb-8 border-b border-white/10 pb-8">Lifetime setup fee. No monthly subscriptions.</p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Unlimited Day 1 Spend",
                    "2% Top-Up Fee Only",
                    "Activation Within 1 Hour",
                    "Lifetime Replacement Support",
                    "Priority Chat Access"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-blue-400" />
                      </div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full py-4 bg-white text-black text-center rounded-lg font-semibold text-sm transition-all hover:bg-gray-100 mb-6"
                >
                  Activate Account Now
                </a>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex -space-x-2">
                    {["bg-blue-400", "bg-purple-400", "bg-indigo-400", "bg-green-400", "bg-orange-400"].map((color, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full border border-black ${color} opacity-80`} />
                    ))}
                  </div>
                  <div className="text-[10px] font-medium text-gray-500">2,000+ advertisers activated</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process - Horizontal Timeline */}
      <section id="process" className="py-24 px-4 bg-[#0a0a0c]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">How it works.</h2>
            <p className="text-gray-400 text-lg">From request to running ads in 60 minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-white/5 via-blue-500/50 to-white/5 -translate-y-1/2" />
            
            {[
              { title: "Submit Request", desc: "Message us on WhatsApp to get started instantly.", opacity: "opacity-40" },
              { title: "Complete Payment", desc: "Pay the one-time ₹1999 setup fee.", opacity: "opacity-60" },
              { title: "Account Setup", desc: "We prepare your agency-grade account.", opacity: "opacity-80" },
              { title: "Start Scaling", desc: "Account delivered within 1 hour.", opacity: "opacity-100" }
            ].map((step, i) => (
              <div key={i} className="bg-[#111116] border border-white/5 rounded-xl p-6 relative overflow-hidden z-10 group">
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-500 ${step.opacity}`} />
                <div className="absolute top-2 right-4 text-6xl font-display font-bold text-white/[0.03] select-none">
                  0{i + 1}
                </div>
                <h4 className="font-semibold text-white mb-2 relative z-10">{step.title}</h4>
                <p className="text-sm text-gray-400 relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 text-center md:text-left">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display font-bold text-2xl tracking-tighter text-white">RAZR.</div>
            <p className="text-xs text-gray-500 mt-1">Premium Meta Advertising Solutions</p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="/faq" className="hover:text-white">FAQ</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
}
