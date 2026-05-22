import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

export default function Terms() {
  const sections = [
    {
      id: "account-services",
      title: "Account Services",
      content: "RAZR Marketing provides agency-grade Meta ad accounts. These accounts are provisioned for advertising purposes only. We do not guarantee ad performance or ROAS. It is the advertiser's responsibility to manage campaigns and adhere to Meta's advertising policies."
    },
    {
      id: "payments",
      title: "Payments & Fees",
      content: "All payments for account setups, top-ups, and other services are final. The setup fee is strictly non-refundable once the account has been delivered and verified active. Account top-ups are subject to processing times and applicable transaction fees as stated at the time of purchase."
    },
    {
      id: "refunds",
      title: "Refund Policy",
      content: "Due to the nature of agency accounts and the immediate deployment of infrastructure, setup fees are non-refundable. If an account cannot be provisioned due to an issue on our end, a full refund will be provided."
    },
    {
      id: "prohibited",
      title: "Prohibited Use",
      content: "Users may not use RAZR accounts for illegal activities, distributing malware, or violating local laws. While we support various niches, any activity that results in immediate platform-level bans due to illegal content may result in service termination without refund."
    },
    {
      id: "replacement",
      title: "Account Replacement",
      content: "RAZR provides lifetime replacement for accounts that face platform-level restrictions (e.g., restricted from advertising) through no fault of policy violations (e.g., standard Meta sweeps). In the event of a replacement, balance transfers are provided when possible, but are subject to Meta's release of the funds."
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: "RAZR Marketing is not liable for lost profits, lost data, or business interruption resulting from account restrictions, downtime, or Meta platform bugs. Our liability is strictly limited to the replacement of the ad account infrastructure."
    },
    {
      id: "contact",
      title: "Contact",
      content: "For questions regarding these terms, please contact us via our WhatsApp support line."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4 border-b border-white/5">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: May 2025</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 relative">
            <div className="md:w-3/12 shrink-0">
              <div className="sticky top-24 flex flex-col gap-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Sections</div>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:w-9/12 space-y-16">
              {sections.map((s, i) => (
                <div key={s.id} id={s.id} className="relative scroll-mt-24">
                  <div className="absolute -left-8 md:-left-16 top-0 text-7xl font-display font-bold text-white/[0.02] select-none pointer-events-none">
                    0{i + 1}
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white mb-6 relative z-10">{s.title}</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4 relative z-10">
                    <p>{s.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                  <a href="https://wa.me/917065339146" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">WhatsApp Us</a>
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