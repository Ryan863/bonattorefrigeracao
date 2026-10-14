"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WA_TRIAGE } from "@/lib/constants";

const links = [
  { href: "#camaras", label: "Câmaras" },
  { href: "#engenharia", label: "Engenharia" },
  { href: "#oficina", label: "Oficina" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-line/70 bg-base/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#topo" aria-label="Bonatto Refrigeração – início" className="relative block h-11 w-28 overflow-hidden rounded-lg bg-white">
          <Image src="/images/logo.png" alt="Bonatto Refrigeração" fill sizes="112px" className="scale-[1.45] object-contain" priority />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            id="nav-cta"
            href={WA_TRIAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-steel px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-base transition-all hover:bg-frost active:scale-[0.98] sm:inline-flex"
          >
            Solicitar cotação
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-line text-steel lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line/70 px-5 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line/50 py-4 font-mono text-xs uppercase tracking-[0.22em] text-steel"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WA_TRIAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block rounded-full bg-frost py-4 text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-base"
          >
            Solicitar cotação
          </a>
        </div>
      )}
    </header>
  );
}
