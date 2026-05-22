import { FaWhatsapp } from "react-icons/fa";

const WA_LINK = "https://wa.me/917065339146";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group flex items-center gap-3">
      <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 bg-white text-black text-xs font-bold px-3 py-1.5 rounded shadow-lg pointer-events-none">
        Chat with us
      </div>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp us"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-50" />
        <FaWhatsapp className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
