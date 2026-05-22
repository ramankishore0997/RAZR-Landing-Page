import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

export default function Privacy() {
  const sections = [
    {
      id: "info-we-collect",
      title: "Information We Collect",
      content: "We collect information you provide directly to us when using our services. This includes your name, business name, WhatsApp number, email address, and billing information necessary to provision your agency accounts."
    },
    {
      id: "how-we-use",
      title: "How We Use It",
      content: "We use your information exclusively to provide, maintain, and improve our ad account services. This includes setting up your accounts, processing top-ups, communicating updates, and resolving support issues."
    },
    {
      id: "whatsapp",
      title: "WhatsApp Communication",
      content: "As our primary support channel is WhatsApp, by engaging with us, you consent to receive service-related messages, account alerts, and billing updates via WhatsApp. We do not send spam or unsolicited marketing messages."
    },
    {
      id: "security",
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your personal information and account access details. We do not sell, rent, or share your data with third parties for marketing purposes."
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      content: "We interface with Meta platforms to provision your accounts. Your use of the accounts is subject to Meta's privacy policies and data practices. We also use secure payment gateways to process transactions."
    },
    {
      id: "rights",
      title: "Your Rights",
      content: "You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your data when it is no longer needed for service provision or legal compliance."
    },
    {
      id: "contact",
      title: "Contact",
      content: "If you have any questions about this Privacy Policy or our data practices, please contact us via our WhatsApp support line."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4 border-b border-white/5">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
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