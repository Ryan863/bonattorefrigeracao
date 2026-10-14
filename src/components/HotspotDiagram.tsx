"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Cpu, Gauge, ShieldCheck, Siren } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const spots = [
  { id: "isolamento", icon: Layers, x: 62, y: 38, title: "Isolamento térmico estrito", text: "Painéis isotérmicos PIR/EPS com montagem hermética para manter a temperatura estável e reduzir o consumo de energia." },
  { id: "automacao", icon: Cpu, x: 46, y: 44, title: "Automação & controle digital", text: "Controladores digitais com monitoramento de temperatura, alarmes e degelo programado para operação sem surpresas." },
  { id: "compressores", icon: Gauge, x: 84, y: 48, title: "Compressores de alto desempenho", text: "Conjuntos dimensionados para a sua carga térmica, com foco em eficiência energética e vida útil." },
  { id: "vedacao", icon: ShieldCheck, x: 39, y: 58, title: "Vedação hermética", text: "Portas e batentes com estanqueidade perfeita para vacinas, insumos sensíveis e produtos perecíveis." },
  { id: "assistencia", icon: Siren, x: 62, y: 15, title: "Assistência rápida & preventiva", text: "Oficina própria e atendimento ágil: manutenção preventiva e corretiva antes que você perca estoque." },
];

export function HotspotDiagram() {
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      setPinned(true);
      const st = ScrollTrigger.create({
        trigger: section.current,
        start: "top top",
        end: "+=2200",
        pin: true,
        onUpdate: (self) => setActive(Math.min(spots.length - 1, Math.floor(self.progress * spots.length))),
      });
      return () => {
        st.kill();
        setPinned(false);
      };
    });
    return () => mm.revert();
  }, []);

  const current = spots[active];

  return (
    <section ref={section} id="camaras" className="relative flex min-h-[100svh] items-center overflow-hidden bg-base py-24 md:py-10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1fr_1.5fr] lg:items-center lg:gap-14">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-frost">01 — Anatomia da câmara</p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-[0.12em] text-steel-gradient md:text-5xl">
            Cada detalhe sob controle
          </h2>

          <ol className="mt-8 hidden space-y-1 lg:block">
            {spots.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={i === active}
                  className={`flex w-full items-center gap-4 rounded-xl border px-4 py-3 text-left transition-all duration-500 ${
                    i === active ? "border-frost/40 bg-frost/[0.07] text-white" : "border-transparent text-muted hover:text-steel"
                  }`}
                >
                  <span className="font-mono text-xs text-frost">0{i + 1}</span>
                  <span className="text-sm">{s.title}</span>
                </button>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-2xl border border-line bg-surface p-5 transition-all" aria-live="polite">
            <current.icon className="size-5 text-frost" aria-hidden />
            <h3 className="mt-3 font-display text-lg font-semibold tracking-wide text-white">{current.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{current.text}</p>
          </div>
          {pinned && <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted/70">Role para explorar ↓</p>}
        </div>

        <div className="relative aspect-[1024/572] w-full overflow-hidden rounded-3xl border border-line bg-ink shadow-[0_40px_120px_-40px_rgba(56,189,248,0.25)]">
          <Image src="/images/hero-desktop.png" alt="Câmara frigorífica e compressores industriais em aço inox" fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
          {spots.map((s, i) => {
            const on = i === active;
            const flip = s.x > 60;
            return (
              <button
                key={s.id}
                type="button"
                aria-label={s.title}
                onClick={() => setActive(i)}
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
              >
                <span className={`relative grid size-6 place-items-center rounded-full border transition-all duration-500 sm:size-7 ${on ? "border-frost bg-frost/30 scale-110" : "border-white/40 bg-base/50"}`}>
                  {on && <span className="hotspot-ring absolute inset-0 rounded-full bg-frost/50" />}
                  <span className={`size-2 rounded-full transition-colors ${on ? "bg-frost" : "bg-white/70"}`} />
                </span>
                <span
                  className={`pointer-events-none absolute top-1/2 hidden items-center transition-all duration-500 sm:flex ${flip ? "right-full flex-row-reverse" : "left-full"} ${on ? "opacity-100" : "opacity-0"}`}
                >
                  <span className="h-px w-8 bg-frost" />
                  <span className="whitespace-nowrap rounded-md border border-frost/40 bg-base/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-frost backdrop-blur">
                    {s.title}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
