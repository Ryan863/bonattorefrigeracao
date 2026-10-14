export const WHATSAPP_NUMBER = "5549999811449";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_TRIAGE = whatsappLink(
  "Olá, equipe de engenharia da Bonatto Refrigeração! Vim pelo site e gostaria de uma cotação técnica. Tipo de projeto (câmara frigorífica, climatização, manutenção ou peças): ____. Temperatura/volume necessário: ____. Cidade: ____.",
);

export const WA_URGENT = whatsappLink(
  "Olá, Bonatto! Preciso de assistência técnica URGENTE em um equipamento de refrigeração. Podem me atender?",
);

export const SITE = {
  name: "Bonatto Refrigeração",
  phone: "(49) 3442-0993",
  phoneHref: "tel:+554934420993",
  whatsapp: "(49) 99981-1449",
  instagram: "https://www.instagram.com/bonattorefrigeracao/",
  instagramHandle: "@bonattorefrigeracao",
  address: "Rua Calábria, 21 – Bairro Colinas",
  city: "Concórdia – SC, CEP 89700-480",
  plusCode: "QX9H+HH Concórdia, Santa Catarina",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Bonatto+Refrigera%C3%A7%C3%A3o+Rua+Cal%C3%A1bria+21+Conc%C3%B3rdia+SC",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Cal%C3%A1bria+21+Colinas+Conc%C3%B3rdia+SC&output=embed",
  hours: "Segunda a Sexta · a partir das 08:00",
};
