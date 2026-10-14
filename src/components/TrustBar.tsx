const sectors = ["Frigoríficos", "Distribuidoras", "Hospitais & Vacinas", "Supermercados", "Cervejarias", "Laboratórios", "Indústria de Alimentos"];

export function TrustBar() {
  const items = [...sectors, ...sectors];
  return (
    <section aria-label="Setores atendidos" className="relative overflow-hidden border-y border-line bg-ink py-6">
      <div className="mx-auto mb-4 flex max-w-7xl items-center gap-4 px-5 md:px-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-frost">Setores atendidos</span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="flex w-max marquee-track">
        {items.map((s, i) => (
          <span key={i} aria-hidden={i >= sectors.length} className="flex items-center whitespace-nowrap font-mono text-xs uppercase tracking-[0.28em] text-muted">
            <span className="px-8">{s}</span>
            <span className="text-line">/</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </section>
  );
}
