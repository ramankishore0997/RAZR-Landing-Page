import { FaWhatsapp } from "react-icons/fa";
import { Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

const WA_LINK = "https://wa.me/917065339146";
const PHONE = "+91 7065339146";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-20 px-4 flex flex-col justify-center">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-16">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">Get in touch.</h1>
            <p className="text-xl text-gray-400 max-w-xl">
              Ready to scale your Meta ads? Reach out directly. Our team is available to activate your agency account within 1 hour.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {/* WhatsApp Card */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="block bg-[#111116] border border-white/10 rounded-2xl p-8 hover:border-[#25D366]/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/5 rounded-full blur-3xl group-hover:bg-[#25D366]/10 transition-colors" />
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-6 text-[#25D366]">
                <FaWhatsapp className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Message on WhatsApp</h3>
              <p className="text-gray-400 mb-8 max-w-sm">Direct chat for instant support, onboarding, and fast account activation.</p>
              <div className="flex items-center gap-2 text-[#25D366] font-semibold text-sm">
                Start Chat <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="block bg-[#111116] border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-white">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Call Sales</h3>
              <p className="text-gray-400 mb-8 max-w-sm">Prefer a conversation? Call us to discuss your specific agency requirements.</p>
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                {PHONE} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-white">What happens after you message us?</h3>
            <div className="flex flex-col md:flex-row gap-6">
              {[
                "We confirm your niche and requirements.",
                "You pay the one-time setup fee.",
                "Account is delivered within 1 hour."
              ].map((step, i) => (
                <div key={i} className="flex-1 border-l border-white/10 pl-6 py-2">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Step 0{i + 1}</div>
                  <div className="text-sm font-medium text-gray-300">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 px-4 border-t border-white/5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RAZR Marketing. All rights reserved.
      </footer>
      <FloatingCTA />
    </div>
  );
}
