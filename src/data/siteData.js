/**
 * Configurações centralizadas do site - Lash Designer
 * Edite apenas este arquivo para alterar textos, links e imagens.
 */

export const siteData = {
  // Informações gerais da marca
  brand: {
    name: 'Lash Designer',
    tagline: 'Beleza que realça seu olhar',
    logo: '/logo.svg',
    logoAlt: 'Logo Lash Designer',
  },

  // Contato e redes sociais
  contact: {
    whatsapp: {
      number: '5534991876750',
      message: 'Olá! Gostaria de mais informações sobre os serviços.',
    },
    phone: '(34) 99187-6750',
    instagram: 'https://www.instagram.com/annayllecarneiro/',
    instagramUser: '@annayllecarneiro',
  },

  // Navegação
  nav: [
    { label: 'Início', path: '/lash-designer/' },
    { label: 'Quem Somos', path: '/lash-designer/quem-somos' },
    { label: 'Serviços', path: '/lash-designer/servicos' },
    { label: 'Contato', path: '/lash-designer/contato' },
  ],

  // Home - Hero / Banner
  hero: {
    title: 'Realce o seu olhar',
    subtitle: 'Extensão de cílios, design de sobrancelhas e tratamentos que valorizam sua beleza natural.',
    ctaText: 'Agende pelo WhatsApp',
    ctaWhatsApp: true,
    backgroundImage: '/hero-bg.jpg', // Opcional: coloque uma imagem em /public
  },

  // Quem Somos
  about: {
    title: 'Quem Somos',
    intro: 'Sou uma profissional apaixonada por realçar a beleza natural de cada cliente. Com técnica e cuidado, transformo olhares e elevo a autoestima através dos detalhes que fazem a diferença.',
    mission: {
      title: 'Missão',
      text: 'Oferecer serviços de extensão de cílios e design facial com excelência, segurança e carinho, para que cada cliente se sinta única e confiante.',
    },
    vision: {
      title: 'Visão',
      text: 'Ser referência em beleza de cílios e sobrancelhas na região, mantendo sempre a qualidade e a atualização nas melhores técnicas do mercado.',
    },
    values: {
      title: 'Valores',
      items: [
        'Higiene e segurança em primeiro lugar',
        'Atendimento personalizado e acolhedor',
        'Qualidade e durabilidade nos procedimentos',
        'Respeito à beleza e características de cada pessoa',
      ],
    },
  },

  // Serviços
  services: {
    title: 'Nossos Serviços',
    subtitle: 'Técnicas exclusivas para um olhar irresistível',
    list: [
      {
        id: 'volume-brasileiro',
        name: 'Volume Brasileiro',
        description: 'Técnica que utiliza fios leves aplicados em cada cílio natural, criando volume e densidade com aspecto natural e elegante. Ideal para quem deseja um olhar marcante sem exageros.',
        image: 'https://placehold.co/400x300/f8e4ec/e8b4c8?text=Volume+Brasileiro',
        category: 'Extensão de cílios',
      },
      {
        id: 'volume-europeu',
        name: 'Volume Europeu',
        description: 'Aplicação estratégica de fios que proporciona um efeito mais alinhado e sofisticado. Garante volume moderado com acabamento delicado e harmonioso.',
        image: 'https://placehold.co/400x300/f8e4ec/e8b4c8?text=Volume+Europeu',
        category: 'Extensão de cílios',
      },
      {
        id: 'volume-5d',
        name: 'Volume 5D',
        description: 'Técnica que utiliza leques com 5 fios ultrafinos em cada cílio natural, proporcionando mais volume e intensidade ao olhar, sem perder a leveza.',
        image: 'https://placehold.co/400x300/f8e4ec/e8b4c8?text=Volume+5D',
        category: 'Extensão de cílios',
      },
      {
        id: 'efeito-fox-eyes',
        name: 'Efeito Fox Eyes',
        description: 'Mapeamento especial que alonga o olhar, criando um efeito mais puxado e sensual. Ideal para quem deseja um visual moderno e elegante.',
        image: 'https://placehold.co/400x300/f8e4ec/e8b4c8?text=Fox+Eyes',
        category: 'Extensão de cílios',
      },
      {
        id: 'efeito-rimel',
        name: 'Efeito Rímel',
        description: 'Extensão que imita o efeito de máscara de cílios, deixando os fios mais escuros, definidos e com aparência natural, como se estivessem sempre maquiados.',
        image: 'https://placehold.co/400x300/f8e4ec/e8b4c8?text=Efeito+Rimel',
        category: 'Extensão de cílios',
      },
      {
        id: 'design-sobrancelhas',
        name: 'Design de Sobrancelhas',
        description: 'Desenho e correção das sobrancelhas para harmonizar o rosto e valorizar o olhar. Técnicas realizadas conforme o seu estilo e formato facial.',
        image: 'https://placehold.co/400x300/f8e4ec/e8b4c8?text=Design+Sobrancelhas',
        category: 'Design facial',
      },
      {
        id: 'hydragloss',
        name: 'Hydragloss',
        description: 'Tratamento que hidrata, nutre e devolve o brilho natural aos lábios. Proporciona maciez, definição e aparência saudável com resultado imediato.',
        image: 'https://placehold.co/400x300/f8e4ec/e8b4c8?text=Hydragloss',
        category: 'Tratamentos',
      },
    ],
  },

  // Contato (página)
  contactPage: {
    title: 'Entre em Contato',
    subtitle: 'Estou à disposição para tirar suas dúvidas e agendar seu horário.',
    whatsappCta: 'Enviar mensagem no WhatsApp',
    phoneLabel: 'Telefone',
    instagramLabel: 'Instagram',
    followText: 'Siga-me no Instagram e fique por dentro das novidades!',
  },

  // Footer
  footer: {
    copyright: '© ' + new Date().getFullYear() + ' Lash Designer. Desenvolvido por Riquelmy M.',
    madeWith: 'Feito com carinho para realçar seu olhar.',
  },
}

export default siteData
