import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Users, Clock, RefreshCcw, DollarSign, Briefcase, ShieldCheck, HeadphonesIcon, BarChart, CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

const WA_LINK = "https://wa.me/917065339146";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 font-sans">
      
      {/* Dynamic Background Noise & Gradients */}
      <div className="fixed inset-0 pointer-events-none opacity-20 mix-blend-screen z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-56 md:pb-32 px-4 relative flex flex-col items-center justify-center min-h-[90vh]">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]"
          >
            <Shield className="w-4 h-4" />
            Blackhat & Whitehat Accounts Available
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-8 leading-[1.05]"
          >
            <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">Scale Your Ads</span> <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative">
              Without Limits.
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-[2px]" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Premium Meta Agency Ad Account Solutions For Fast Scaling & Stable Advertising.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="button-hero-primary"
              className="group relative w-full sm:w-auto px-8 py-5 bg-white text-black rounded-xl font-bold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Get Agency Ad Account</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="button-hero-secondary"
              className="w-full sm:w-auto px-8 py-5 bg-card/40 backdrop-blur-sm border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2"
            >
              Talk To Support
            </a>
          </motion.div>

          {/* Stats below hero */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5 relative backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-50" />
            {[
              { label: "Fast Activation", value: "1 Hour" },
              { label: "Setup Fee", value: "₹1999" },
              { label: "Top-Up Fee", value: "2%" },
              { label: "Min Deposit", value: "$50" }
            ].map((stat, i) => (
              <div key={i} data-testid={`card-stat-${i}`} className="p-8 bg-background/80 backdrop-blur-xl flex flex-col items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust / Stats Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {[
              "Fast Activation",
              "Lifetime Support",
              "Scaling Ready",
              "Agency Grade"
            ].map((stat, i) => (
              <div key={i} data-testid={`badge-trust-${i}`} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-lg font-bold tracking-tight text-white">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">The Agency-Grade <span className="text-primary">Advantage</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">Stop dealing with restrictions and low spend limits. Unlock the infrastructure used by top-tier performance marketers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative z-10">
            {[
              { icon: Zap, title: "Unlimited Ad Spend From Day 1", desc: "Scale instantly without warming up accounts." },
              { icon: ShieldCheck, title: "Lower Risk of Restrictions", desc: "Highly stable accounts with reduced restriction rates." },
              { icon: HeadphonesIcon, title: "Priority Chat Support", desc: "Direct chat support for immediate resolution." },
              { icon: TrendingUp, title: "Better Scaling Ability", desc: "Unmatched stability for high-volume campaigns." },
              { icon: Users, title: "High-Quality Audience & Leads", desc: "Access premium inventory and better lead quality." },
              { icon: Clock, title: "Fast Activation Within 1 Hour", desc: "Get your account ready within 60 minutes." },
              { icon: RefreshCcw, title: "Lifetime Replacement Support", desc: "Balance transfer support if the account faces issues." },
              { icon: DollarSign, title: "Minimum Deposit: $50", desc: "Start with just a $50 minimum deposit." },
              { icon: Briefcase, title: "Multiple Business Categories", desc: "Supports different niches, categories, and offers." },
              { icon: BarChart, title: "Higher Spending Capacity", desc: "No daily limits holding your ROAS back." },
              { icon: Shield, title: "Business-Friendly Setup", desc: "Clean infrastructure for long-term advertising." },
              { icon: Users, title: "Easy Scaling & Team Access", desc: "Add your media buyers without hassle." },
            ].map((benefit, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                key={i}
                data-testid={`card-benefit-${i}`}
                className="p-8 rounded-2xl bg-card/30 border border-white/5 hover:border-primary/30 hover:bg-card/60 transition-all group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl rounded-full" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all group-hover:border-primary/30">
                    <benefit.icon className="w-6 h-6 text-white/70 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white leading-tight">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto max-w-lg text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Simple Pricing</h2>
            <p className="text-xl text-muted-foreground font-medium">One transparent tier. Ultimate performance.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-1 rounded-[32px] bg-gradient-to-b from-white/10 via-primary/20 to-transparent relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-b from-primary to-accent opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-[32px]" />
            <div className="p-8 md:p-12 rounded-[30px] bg-background border border-white/5 relative overflow-hidden h-full z-10">
              
              <div className="inline-flex px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold tracking-wide uppercase mb-8">
                Agency Tier
              </div>

              <div className="text-7xl font-black mb-2 text-white tracking-tighter">₹1999</div>
              <div className="text-muted-foreground mb-10 font-bold uppercase tracking-widest text-sm">Lifetime Setup Fee</div>
              
              <div className="space-y-5 mb-10 text-left">
                {[
                  { icon: TrendingUp, text: "2% Top-Up Fee Only" },
                  { icon: Clock, text: "Activation Within 1 Hour" },
                  { icon: Shield, text: "Lifetime Replacement Support" },
                  { icon: Zap, text: "Unlimited Day 1 Spend" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-white font-medium text-lg">{feature.text}</span>
                  </div>
                ))}
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                data-testid="button-pricing-activate"
                className="block w-full py-5 bg-white text-black rounded-xl font-black text-lg hover:bg-white/90 transition-all hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
              >
                Activate Account Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-4 border-t border-white/5 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Fast Activation Process</h2>
            <p className="text-xl text-muted-foreground font-medium">From request to running ads in 60 minutes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {[
              { num: "01", title: "Submit Request", desc: "Message us on WhatsApp to get started instantly." },
              { num: "02", title: "Complete Payment", desc: "Pay the one-time ₹1999 setup fee." },
              { num: "03", title: "Account Setup", desc: "We prepare your agency-grade account." },
              { num: "04", title: "Start Scaling", desc: "Account delivered within 1 hour. Start running ads." }
            ].map((step, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                data-testid={`card-process-${i}`}
                className="relative pt-8 md:pt-0"
              >
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center text-xl font-black mb-8 relative z-10 mx-auto md:mx-0 shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]">
                  {step.num}
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-muted-foreground font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-1 rounded-3xl bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30"
          >
            <div className="p-10 md:p-14 rounded-[22px] bg-background text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Ready to start scaling?
              </h2>
              <p className="text-xl text-muted-foreground font-medium mb-10 max-w-xl mx-auto">
                Message us on WhatsApp and get your agency account activated within 1 hour.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="button-cta-banner"
                  className="px-10 py-5 bg-white text-black rounded-xl font-black text-lg hover:bg-white/90 transition-all hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] flex items-center gap-2"
                >
                  Get Agency Ad Account <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  data-testid="link-cta-contact"
                  className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Contact Us <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 border-t border-white/10 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[100px] rounded-[100%] pointer-events-none" />
        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-black text-4xl tracking-tighter text-white mb-2 flex items-center gap-1">
              RAZR<span className="text-primary text-5xl leading-none">.</span>
            </div>
            <p className="text-muted-foreground font-medium">Premium Meta Advertising Solutions</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#benefits" className="text-muted-foreground hover:text-white transition-colors font-medium">Benefits</a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors font-medium">Pricing</a>
            <a href="#process" className="text-muted-foreground hover:text-white transition-colors font-medium">Process</a>
            <a href="/faq" className="text-muted-foreground hover:text-white transition-colors font-medium">FAQ</a>
            <a href="/contact" className="text-muted-foreground hover:text-white transition-colors font-medium">Contact</a>
          </div>
        </div>
        <div className="container mx-auto mt-16 pt-8 border-t border-white/5 text-center text-sm font-medium text-muted-foreground/60">
          © {new Date().getFullYear()} RAZR Agency Ad Account. All rights reserved.
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
}
