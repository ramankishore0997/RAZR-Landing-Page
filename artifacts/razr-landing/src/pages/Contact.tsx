import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, MessageCircle, Clock, Shield, Zap, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

const WA_LINK = "https://wa.me/917065339146";
const PHONE = "+91 7065339146";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 font-sans">
      <div className="fixed inset-0 pointer-events-none opacity-20 mix-blend-screen z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <Navbar />

      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-4 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]">
              <MessageCircle className="w-4 h-4" />
              We reply within minutes
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
              <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">Get In</span>{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Ready to scale your Meta ads? Message us directly on WhatsApp and our team will activate your agency account within 1 hour.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Primary WhatsApp Card */}
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="link-contact-whatsapp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-8 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/50 hover:bg-[#25D366]/15 transition-all relative overflow-hidden"
            >
              <div className="absolute -inset-x-10 -inset-y-10 bg-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl rounded-full" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="w-7 h-7 text-[#25D366]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">WhatsApp Enquiry</h3>
                <p className="text-white/60 font-medium mb-6">Message us directly for instant support and account activation.</p>
                <div className="text-[#25D366] font-black text-xl tracking-wide">{PHONE}</div>
                <div className="mt-6 flex items-center gap-2 text-[#25D366] font-bold text-sm">
                  Message Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              data-testid="link-contact-phone"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-8 rounded-3xl bg-card/30 border border-white/5 hover:border-primary/30 hover:bg-card/50 transition-all relative overflow-hidden"
            >
              <div className="absolute -inset-x-10 -inset-y-10 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl rounded-full" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Call Us</h3>
                <p className="text-white/60 font-medium mb-6">Prefer a call? Reach out directly and we'll answer all your questions.</p>
                <div className="text-primary font-black text-xl tracking-wide">{PHONE}</div>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm">
                  Call Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          </div>

          {/* Quick info strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { icon: Clock, label: "Response Time", value: "Under 5 Minutes" },
              { icon: Zap, label: "Account Activation", value: "Within 1 Hour" },
              { icon: Shield, label: "Support Hours", value: "7 Days a Week" },
            ].map((item, i) => (
              <div
                key={i}
                data-testid={`card-contact-info-${i}`}
                className="p-6 rounded-2xl bg-card/20 border border-white/5 flex flex-col items-center text-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</div>
                  <div className="text-lg font-black text-white">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 p-1 rounded-3xl bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40"
          >
            <div className="p-8 rounded-[22px] bg-background flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black text-white mb-1">Ready to Activate Your Account?</h3>
                <p className="text-muted-foreground font-medium">One-time setup fee of ₹1999. Live within 1 hour.</p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                data-testid="button-contact-activate"
                className="shrink-0 px-8 py-4 bg-white text-black rounded-xl font-black text-lg hover:bg-white/90 transition-all hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                Activate Now
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
