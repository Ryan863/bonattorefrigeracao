"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Fernando Furini", tag: "Local Guide", text: "Profissionalismo e assistência exemplar! O pessoal resolve qualquer trabalho!" },
  { name: "Carlos Ricardo Famfa Bastos", tag: "Local Guide", text: "Trabalho profissional. Deixaram minha chopeira nota 1000. Recomendo" },
  { name: "Giovani Keecean", tag: "Cliente", text: "Loja e oficina completa, tudo que vc precisa vc encontra. Recomendo!" },
  { name: "Joao Teles", tag: "Cliente", text: "Serviço top" },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-frost text-frost" aria-hidden />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="avaliacoes" className="relative bg-ink px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-frost">03 — Prova social</p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-[0.12em] text-steel-gradient md:text-5xl">
              Quem usa, recomenda
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface px-6 py-4">
            <span className="font-display text-5xl font-bold text-white">4,7</span>
            <div>
              <Stars />
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Google Avaliações</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-line bg-surface p-8 transition-colors hover:border-frost/40"
            >
              <Stars />
              <blockquote className="mt-5 text-lg leading-relaxed text-steel">“{r.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-surface-2 font-display text-sm font-bold text-frost ring-1 ring-line">{r.name[0]}</span>
                <span>
                  <span className="block text-sm font-medium text-white">{r.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{r.tag}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
