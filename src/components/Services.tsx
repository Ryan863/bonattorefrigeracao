"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WA_TRIAGE } from "@/lib/constants";

const cards = [
  {
    tag: "Câmaras & túneis",
    title: "Montagem de câmaras & túneis",
    text: "Projetos personalizados, túneis de congelamento rápido, ultrafreezers e câmaras para vacinas — com estanqueidade perfeita.",
    src: "/images/hero-desktop.png",
    pos: "40% 55%",
  },
  {
    tag: "Climatização",
    title: "Climatização central & chillers",
    text: "Instalação e manutenção de sistemas térmicos e de ventilação para grandes ambientes corporativos, comerciais e industriais.",
    src: "/images/hero-desktop.png",
    pos: "8% 30%",
  },
  {
    tag: "Loja & oficina",
    title: "Loja de peças & oficina própria",
    text: "Compressores e peças a pronta-entrega, manutenção ágil em bancada e suporte resolutivo para qualquer complexidade.",
    src: "/images/hero-desktop.png",
    pos: "92% 60%",
  },
];

export function Services() {
  return (
    <section id="engenharia" className="relative bg-base px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-frost">02 — Soluções</p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-[0.12em] text-steel-gradient md:text-5xl">
            Engenharia do projeto à manutenção
          </h2>
          <p id="oficina" className="max-w-sm text-sm leading-relaxed text-muted">
            Uma equipe só para dimensionar, montar, climatizar e manter — com oficina e loja de peças no mesmo endereço.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <motion.a
              key={c.title}
              href={WA_TRIAGE}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl border border-line bg-surface"
            >
              <Image src={c.src} alt="" fill sizes="(min-width:768px) 33vw, 100vw" style={{ objectPosition: c.pos }} className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-transparent" />
              {/* reflective gradient edge */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-inset ring-frost/50 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative p-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-frost">{c.tag}</span>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-wide text-white">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                  Pedir orçamento <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
