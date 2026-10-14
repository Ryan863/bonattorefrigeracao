import { Instagram as InstaIcon, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export function InstagramCard() {
  return (
    <section aria-label="Instagram" className="bg-base px-5 pb-24 md:px-8">
      <a
        href={SITE.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-line bg-surface p-8 transition-colors hover:border-frost/50 md:flex-row md:items-center md:p-12"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-frost/10 blur-3xl transition-opacity group-hover:opacity-100" />
        <div className="relative flex items-center gap-6">
          <span className="grid size-16 shrink-0 place-items-center rounded-2xl border border-line bg-ink text-frost">
            <InstaIcon className="size-7" aria-hidden />
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-frost">{SITE.instagramHandle}</p>
            <h2 className="mt-2 font-display text-xl font-semibold tracking-wide text-white md:text-2xl">
              Acompanhe instalações, manutenções e o dia a dia técnico
            </h2>
          </div>
        </div>
        <span className="relative inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-steel">
          Seguir no Instagram <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
        </span>
      </a>
    </section>
  );
}
