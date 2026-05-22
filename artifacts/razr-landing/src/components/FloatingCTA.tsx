import { FaWhatsapp } from "react-icons/fa";
import { ChevronRight } from "lucide-react";

const WA_LINK = "https://wa.me/917065339146";

export default function FloatingCTA() {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          data-testid="button-float-whatsapp"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform flex items-center justify-center"
          aria-label="WhatsApp us"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          data-testid="link-sticky-cta"
          className="bg-background/80 backdrop-blur-xl border border-white/10 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white/5 transition-all shadow-2xl flex items-center gap-2"
        >
          Get Started Now <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
