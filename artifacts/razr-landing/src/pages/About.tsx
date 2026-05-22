import { motion } from "framer-motion";
import { Link } from "wouter";
import { Server, UserCheck, Eye, Shield, Cpu, RefreshCcw, MessageCircle, Clock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

const WA_LINK = "https://wa.me/917065339146";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-6">Our story</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              We built RAZR because we needed it.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              RAZR Marketing was founded by performance marketers who hit the ceiling on standard Meta accounts. We built the infrastructure we wished existed.
            </p>
          </div>
        </div>
      </section>

      {/* Mission block */}
      <section className="py-24 px-4 bg-[#0a0a0c] border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center text-white max-w-4xl mx-auto leading-tight mb-20">
            "Our mission is simple — give every serious advertiser access to the infrastructure that only the biggest agencies used to have access to."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Server,
                title: "Infrastructure First",
                desc: "We think like engineers, not resellers. Our focus is on providing stable, robust account infrastructure."
              },
              {
                icon: UserCheck,
                title: "Advertiser-Side Always",
                desc: "Your scaling goals are our goals. We are built to help you spend more, convert more, and grow without friction."
              },
              {
                icon: Eye,
                title: "Radical Transparency",
                desc: "No hidden fees. No vague promises. You get exactly what you pay for — premium agency-grade accounts."
              }
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#111116] border border-white/5 rounded-2xl p-8"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <v.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes RAZR different */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-10">What makes RAZR different?</h2>
              <div className="space-y-8">
                {[
                  { icon: Shield, title: "Premium Whitelisted Assets", desc: "We only provide accounts with the highest trust scores." },
                  { icon: Cpu, title: "Automated Provisioning", desc: "Our system prepares your accounts swiftly and accurately." },
                  { icon: MessageCircle, title: "Direct Priority Support", desc: "No ticketing queues, just direct WhatsApp access." },
                  { icon: RefreshCcw, title: "Seamless Replacements", desc: "If an account drops, we replace it instantly." },
                ].map((d, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                      <d.icon className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{d.title}</h4>
                      <p className="text-sm text-gray-400">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111116] border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
              <h3 className="font-display text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-500" /> Account Spec Sheet
              </h3>
              <div className="space-y-4 relative z-10">
                {[
                  { label: "Account Type", value: "Agency Grade" },
                  { label: "Platform", value: "Meta Ads" },
                  { label: "Support", value: "WhatsApp Direct" },
                  { label: "Replacement", value: "Lifetime Free" },
                  { label: "Activation", value: "< 1 Hour" },
                  { label: "Niches", value: "BH + WH" },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="font-semibold text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-t from-blue-900/10 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">Ready to get started?</h2>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Message us on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
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
                  <Link href="/about"><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</span></Link>
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
            <div className="flex gap-4">
              <Link href="/terms"><span className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</span></Link>
              <Link href="/privacy"><span className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</span></Link>
            </div>
            <span>Premium Meta Advertising Solutions</span>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
}