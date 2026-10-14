"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MessageCircle } from "lucide-react";
import { ShimmerButton } from "./ShimmerButton";
import { WA_TRIAGE } from "@/lib/constants";

const LINES = ["Engenharia térmica", "de precisão"];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero-char]", { opacity: 0, y: 35, stagger: 0.04, duration: 0.9, delay: 0.15 })
          .from("[data-hero-fade]", { opacity: 0, y: 18, stagger: 0.12, duration: 0.8 }, "-=0.5");
        gsap.to("[data-hero-bg]", {
          scale: 1.08,
          duration: 14,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="topo" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-base pb-16 pt-32 md:items-center md:pb-24">
      {/* background: portrait on mobile, landscape on desktop */}
      <div
        data-hero-bg
        className="absolute inset-0 -z-10 will-change-transform [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
      >
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/hero-desktop.png" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-mobile.png" alt="" fetchPriority="high" className="size-full object-cover object-[60%_center]" />
        </picture>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_50%,rgba(8,9,10,0.88),transparent_65%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-base to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <p data-hero-fade className="mb-7 inline-flex items-center gap-3 rounded-full border border-frost/30 bg-frost/[0.07] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-frost backdrop-blur sm:text-[11px]">
          <span className="size-1.5 rounded-full bg-frost" aria-hidden />
          Oficina especializada &amp; engenharia térmica · Concórdia – SC
        </p>

        <h1 className="font-display text-[clamp(2rem,6.4vw,5.6rem)] font-bold uppercase leading-[1.05] tracking-[0.12em] md:tracking-[0.15em]">
          <span className="sr-only">Engenharia térmica de precisão para quem não pode parar</span>
          <span aria-hidden className="block text-steel-gradient">
            {LINES.map((line) => (
              <span key={line} className="block">
                {line.split(" ").map((word, wi) => (
                  <span key={wi} className="inline-block whitespace-nowrap">
                    {word.split("").map((c, ci) => (
                      <span key={ci} data-hero-char className="inline-block">
                        {c}
                      </span>
                    ))}
                    {"\u00A0"}
                  </span>
                ))}
              </span>
            ))}
          </span>
        </h1>

        <p data-hero-fade className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Câmaras frigoríficas, climatização industrial e oficina completa para quem não pode parar — com assistência técnica ágil para proteger seu estoque e suas cargas perecíveis.
        </p>

        <div data-hero-fade className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ShimmerButton href={WA_TRIAGE}>
            <MessageCircle className="size-4" aria-hidden /> Falar com Engenharia no WhatsApp
          </ShimmerButton>
          <ShimmerButton href="#camaras" variant="ghost" external={false}>
            Ver soluções
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
