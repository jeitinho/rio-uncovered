export type PartnerStatus =
  | "nouveau"
  | "a_contacter"
  | "premier_rdv"
  | "visite"
  | "validation"
  | "partenaire"
  | "premium"
  | "club_jeitinho"
  | "refuse";

export type PartnerCategory =
  | "restaurante"
  | "bar"
  | "barraca"
  | "hotel"
  | "pousada"
  | "cafe"
  | "confeitaria"
  | "guia"
  | "agencia"
  | "transporte"
  | "passeio"
  | "artesao"
  | "loja"
  | "bem_estar"
  | "vida_noturna"
  | "eventos"
  | "outro";

export interface PartnerApplication {
  status: PartnerStatus;
  lang: "pt" | "fr";
  submittedAt: string;

  // Informations générales
  establishmentName: string;
  contactName: string;
  contactRole?: string;
  phone: string;
  whatsapp: string;
  email: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;

  category: PartnerCategory;

  address: string;
  neighborhood: string;
  googleMapsUrl?: string;
  gpsCoordinates?: string;

  presentation?: string;
  differentiation?: string;
  since?: string;

  languagesSpoken: string[];

  openingDays?: string;
  openingHours?: string;
  annualClosure?: string;

  // Capacity (conditional)
  seats?: string;
  hasTerrace?: boolean;
  hasAirConditioning?: boolean;
  rooms?: string;
  tables?: string;
  maxGroupSize?: string;

  seeking: string[];
  offering: string[];

  mediaFileNames: string[];

  message?: string;

  consentUseInfo: boolean;
  consentContact: boolean;
  consentTerms: boolean;
}
