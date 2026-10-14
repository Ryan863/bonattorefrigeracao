import { MessageCircle } from "lucide-react";
import { ShimmerButton } from "./ShimmerButton";
import { SITE, WA_TRIAGE, WA_URGENT } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t border-line bg-ink px-5 py-28 text-center md:px-8 md:py-40">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/hero-desktop.png" alt="" loading="lazy" className="absolute inset-0 -z-10 size-full object-cover opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-frost">Próximo passo</p>
      <h2 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-bold uppercase leading-tight tracking-[0.12em] text-steel-gradient md:text-6xl">
        Envie sua planta. Receba o projeto.
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
        Mande as especificações da câmara, a planta do espaço ou agende uma visita técnica. Nossa engenharia responde direto pelo WhatsApp.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <ShimmerButton href={WA_TRIAGE}>
          <MessageCircle className="size-4" aria-hidden /> Falar com Engenharia
        </ShimmerButton>
        <ShimmerButton href={WA_URGENT} variant="ghost">
          Assistência urgente
        </ShimmerButton>
      </div>
      <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        WhatsApp {SITE.whatsapp} · Fixo {SITE.phone}
      </p>
    </section>
  );
}
