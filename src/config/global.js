export default {
  global: {
    Name: 'Guía práctica de confección en marroquinería',
    Description:
      'La idea fundamental en este componente es ofrecer un enfoque detallado sobre la confección de productos de marroquinería, destacando el armado, la costura y el acabado de cada pieza. A través de una guía estructurada, se aprenderán los pasos esenciales para lograr artículos estéticamente atractivos y funcionalmente resistentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Guía paso a paso para la confección de productos de marroquinería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Confección de bolsillos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Confección bolso de pinza y variaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Confección bolso con base',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Confección bolso de giro',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Confección bolso curvo con pinza',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Confección de billetera femenina',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Confección del monedero',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Confección de correa',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Terminación, empaque e higiene y seguridad industrial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF3_52450391_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Guía paso a paso para la confección de productos de marroquinería.',
      referencia:
        'Emprender Tu Espacio. (2020). Taller Gratuito de Marroquinería CLASE 1: Herramientas y materiales.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lwSMCBiq3cY',
    },
    {
      tema: 'Terminación, empaque e higiene y seguridad industrial',
      referencia:
        'Tutoriales de cuero. (2024). Clase #1 Curso básico para trabajar el cuero (Aprende desde cero).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ojEs4s8X8Tk',
    },
  ],
  glosario: [
    {
      termino: 'Acabado',
      significado:
        'Proceso final en la confección de marroquinería que mejora la estética y resistencia del producto.',
    },
    {
      termino: 'Adhesivo',
      significado:
        'Sustancia utilizada para unir piezas de cuero o material sintético en la marroquinería.',
    },
    {
      termino: 'Armado',
      significado:
        'Etapa en la que se ensamblan las piezas de un producto antes de la costura.',
    },
    {
      termino: 'Billetera',
      significado:
        'Accesorio de marroquinería diseñado para guardar dinero, documentos y tarjetas.',
    },
    {
      termino: 'Bolsillo',
      significado:
        'Compartimento incorporado en bolsos y billeteras para facilitar el almacenamiento de objetos pequeños.',
    },
    {
      termino: 'Cierre',
      significado:
        'Mecanismo que permite la apertura y cierre seguro de bolsillos y compartimentos en marroquinería.',
    },
    {
      termino: 'Confección',
      significado:
        'Proceso de fabricación de artículos en cuero o materiales similares mediante técnicas especializadas.',
    },
    {
      termino: 'Costura',
      significado:
        'Técnica de unión de piezas de marroquinería mediante hilos y agujas, ya sea de forma manual o mecánica.',
    },
    {
      termino: 'Diseño',
      significado:
        'Planificación estética y funcional de un producto de marroquinería antes de su fabricación.',
    },
    {
      termino: 'Ensamblaje',
      significado:
        'Acción de unir diferentes partes de un artículo de marroquinería para su conformación final.',
    },
    {
      termino: 'Forro',
      significado:
        'Material interior de un bolso o billetera que aporta refuerzo y acabado estético.',
    },
    {
      termino: 'Hebilla',
      significado:
        'Pieza metálica o plástica utilizada en correas y cinturones para ajustarlos de manera segura.',
    },
    {
      termino: 'Patronaje',
      significado:
        'Técnica que permite crear moldes para la confección de productos en marroquinería.',
    },
    {
      termino: 'Pespunte',
      significado:
        'Tipo de costura que refuerza las uniones en los artículos de cuero y otros materiales.',
    },
    {
      termino: 'Vivo',
      significado:
        'Tira de material que se coloca en los bordes de los bolsos para reforzar y mejorar el acabado estético.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Nacional de Seguridad y Salud en el Trabajo. (2023). Guía de seguridad industrial para talleres de marroquinería. Agencia Europea para la Seguridad y la Salud en el Trabajo.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, L. (2021). Historia del cuero y su evolución en la marroquinería. Revista de Historia del Arte y Diseño, 34(2), 45-60.',
      link: '',
    },
    {
      referencia:
        'Torres, J., & Ramírez, P. (2020). El diseño en la industria marroquinera y su impacto en el mercado global. Revista de Innovación y Diseño, 18(3), 112-129.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Cardona Orozco',
          cargo: 'Evaluadora de contenidos',
          centro: 'Centro Atención Sector Agropecuario - Regional Risaralda',
        },
        {
          nombre: 'Elizabeth Mena Rengifo',
          cargo: 'E-Pedagoga instruccional',
          centro: 'Centro Atención Sector Agropecuario - Regional Risaralda',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
