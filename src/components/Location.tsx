import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import { SITE, WA_TRIAGE, WA_URGENT } from "@/lib/constants";

const rows = [
  { icon: MapPin, label: "Endereço", value: `${SITE.address}\n${SITE.city}` },
  { icon: Phone, label: "Telefone fixo", value: SITE.phone, href: SITE.phoneHref },
  { icon: MessageCircle, label: "WhatsApp comercial", value: SITE.whatsapp, href: WA_URGENT },
  { icon: Clock, label: "Atendimento", value: SITE.hours },
];

export function Location() {
  return (
    <section id="contato" className="bg-base px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-frost">04 — Localização &amp; plantão</p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-[0.12em] text-steel-gradient md:text-5xl">
            Oficina em Concórdia
          </h2>
          <dl className="mt-10 divide-y divide-line rounded-3xl border border-line bg-surface">
            {rows.map((r) => (
              <div key={r.label} className="flex gap-5 p-6">
                <r.icon className="mt-1 size-5 shrink-0 text-frost" aria-hidden />
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">{r.label}</dt>
                  <dd className="mt-1 whitespace-pre-line text-lg text-white">
                    {r.href ? (
                      <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="transition-colors hover:text-frost">
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-steel transition-colors hover:border-frost/60 hover:text-white">
              <Navigation className="size-4" aria-hidden /> Traçar rota
            </a>
            <a href={WA_TRIAGE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-frost px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-base transition-colors hover:bg-white">
              <MessageCircle className="size-4" aria-hidden /> Pedir cotação
            </a>
          </div>
        </div>

        <div className="relative min-h-[26rem] overflow-hidden rounded-3xl border border-line bg-surface">
          <iframe
            title="Mapa – Bonatto Refrigeração, Rua Calábria 21, Concórdia SC"
            src={SITE.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0 [filter:invert(0.92)_hue-rotate(185deg)_saturate(0.7)_brightness(0.9)]"
          />
        </div>
      </div>
    </section>
  );
}
