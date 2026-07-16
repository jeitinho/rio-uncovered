export const pt = {
  meta: {
    title: "Seja um Parceiro Jeitinho | Rio de Janeiro",
    description:
      "Junte-se à rede Jeitinho e apresente seu estabelecimento aos viajantes francófonos que visitam o Rio de Janeiro.",
  },
  langToggle: { pt: "PT", fr: "FR" },
  nav: { back: "Voltar ao blog" },

  hero: {
    title: "Seja um Parceiro Jeitinho",
    subtitle:
      "Conectamos os melhores estabelecimentos do Rio de Janeiro com viajantes francófonos que procuram experiências autênticas.",
    cta: "Quero me tornar parceiro",
  },

  why: {
    title: "Por que a Jeitinho?",
    body: "A Jeitinho é a mídia francófona de referência sobre o Rio de Janeiro, ligada a uma conciergerie premium e a uma comunidade de viajantes ativos. Não trabalhamos com qualquer estabelecimento: selecionamos cuidadosamente cada parceiro para recomendar aos nossos leitores endereços que realmente apreciamos. Privilegiamos a qualidade em vez da quantidade.",
  },

  offer: {
    title: "O que oferecemos",
    items: [
      "Visibilidade",
      "Clientela francófona",
      "Recomendações editoriais",
      "Conteúdo foto / vídeo",
      "Posicionamento no Google",
      "Eventos",
      "Comunidade no WhatsApp",
      "Instagram",
      "Blog",
      "Conciergerie",
      "Rede local",
    ],
  },

  levels: {
    title: "Os níveis de parceria",
    soon: "Em breve",
    items: [
      {
        name: "Nível 1 — Descoberta",
        body:
          "Gratuito. Visita ao estabelecimento. Criação de uma ficha interna. Avaliação. Possibilidade de recomendação pontual.",
      },
      {
        name: "Nível 2 — Parceiro",
        body:
          "Criação de uma ficha no site. Presença nos guias. Visibilidade orgânica. Troca de visibilidade. Convites. Vantagens para nossa comunidade.",
      },
      {
        name: "Nível 3 — Premium",
        body:
          "Recomendações prioritárias. Artigos dedicados. Criação de conteúdo. Organização de eventos. Destaque no Instagram. Comissão sobre reservas quando pertinente.",
      },
      {
        name: "Nível 4 — Club Jeitinho",
        body: "(Em breve) Os estabelecimentos embaixadores da Jeitinho.",
      },
    ],
  },

  philosophy: {
    title: "Nossa filosofia",
    body:
      "Não vendemos publicidade. Construímos parcerias duradouras. Recomendamos apenas estabelecimentos que realmente apreciamos. Nossa prioridade é a confiança da nossa comunidade.",
  },

  form: {
    title: "Torne-se parceiro",
    required: "obrigatório",
    submit: "Enviar candidatura",
    submitting: "Enviando…",
    errorGeneric: "Erro ao enviar. Tente novamente.",

    sections: {
      general: "Informações gerais",
      category: "Categoria",
      address: "Endereço",
      presentation: "Apresentação",
      languages: "Idiomas falados",
      hours: "Horários",
      capacity: "Capacidade",
      seeking: "O que você procura",
      offering: "O que você pode oferecer",
      media: "Mídias",
      message: "Mensagem",
      consent: "Consentimento",
    },

    fields: {
      establishmentName: "Nome do estabelecimento",
      contactName: "Nome do responsável",
      contactRole: "Função",
      phone: "Telefone",
      whatsapp: "WhatsApp",
      email: "Email",
      website: "Site",
      instagram: "Instagram",
      facebook: "Facebook",
      tiktok: "TikTok",
      category: "Categoria",
      address: "Endereço",
      neighborhood: "Bairro",
      googleMapsUrl: "Link do Google Maps",
      gpsCoordinates: "Coordenadas GPS (opcional)",
      presentation: "Apresente seu estabelecimento",
      differentiation: "O que te diferencia?",
      since: "Desde quando existe?",
      openingDays: "Dias de abertura",
      openingHours: "Horários",
      annualClosure: "Fechamento anual",
      seats: "Número de lugares",
      hasTerrace: "Terraço",
      hasAirConditioning: "Ar-condicionado",
      rooms: "Número de quartos",
      tables: "Número de mesas",
      maxGroupSize: "Tamanho máximo do grupo",
      message: "Sua mensagem",
      yes: "Sim",
      no: "Não",
    },

    categories: {
      restaurante: "Restaurante",
      bar: "Bar",
      barraca: "Barraca de praia",
      hotel: "Hotel",
      pousada: "Pousada",
      cafe: "Café",
      confeitaria: "Confeitaria",
      guia: "Guia",
      agencia: "Agência",
      transporte: "Transporte",
      passeio: "Passeio/Excursão",
      artesao: "Artesão",
      loja: "Loja",
      bem_estar: "Bem-estar",
      vida_noturna: "Vida noturna",
      eventos: "Eventos",
      outro: "Outro",
    },

    languages: ["Português", "Français", "English", "Español", "Outro"],

    seeking: [
      "Mais visibilidade",
      "Mais reservas",
      "Clientela francesa",
      "Criação de conteúdo",
      "Organização de eventos",
      "Parceria a longo prazo",
      "Outro",
    ],

    offering: [
      "Desconto",
      "Coquetel de cortesia",
      "Sobremesa de cortesia",
      "Bebida de cortesia",
      "Comissão",
      "Tarifa parceiro",
      "Experiência exclusiva",
      "Privatização",
      "Outro",
    ],

    mediaTypes: ["Logo", "Fachada", "Fotos", "Equipe", "Menu", "Vídeo"],
    mediaHint: "Arraste os arquivos ou clique para selecionar.",

    consent: {
      useInfo: "Autorizo a Jeitinho a utilizar as informações fornecidas",
      contact: "Aceito ser contatado",
      terms: "Aceito os Termos e Condições",
    },
  },

  thanks: {
    title: "Obrigado!",
    body:
      "Sua candidatura foi recebida. Nossa equipe entrará em contato em até 48 horas.",
    ctaWhatsapp: "Entrar na comunidade WhatsApp",
    ctaBlog: "Conhecer a Jeitinho Média",
  },
} as const;

export type Dict = typeof pt;
