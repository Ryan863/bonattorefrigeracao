import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-line bg-base px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:flex-row">
        <p>© {new Date().getFullYear()} {SITE.name} · Câmaras Frigoríficas</p>
        <p>{SITE.address} · {SITE.city}</p>
      </div>
    </footer>
  );
}
