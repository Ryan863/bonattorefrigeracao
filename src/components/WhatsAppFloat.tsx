import { MessageCircle } from "lucide-react";
import { WA_URGENT } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={WA_URGENT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      id="whatsapp-float"
      className="wa-pulse fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-frost text-base shadow-xl transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}
