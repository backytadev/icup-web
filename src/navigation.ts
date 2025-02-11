import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Principales',
      links: [
        // {
        //   text: 'SaaS',
        //   href: getPermalink('/homes/saas'),
        // },
        // {
        //   text: 'Startup',
        //   href: getPermalink('/homes/startup'),
        // },
        // {
        //   text: 'Mobile App',
        //   href: getPermalink('/homes/mobile-app'),
        // },
        // {
        //   text: 'Personal',
        //   href: getPermalink('/homes/personal'),
        // },
      ],
    },
    {
      text: 'Páginas',
      links: [
        // {
        //   // text: 'Features (Anchor Link)',
        //   text: 'Características (Enlace directo)',
        //   href: getPermalink('/#features'),
        // },
        // {
        //   text: 'Services',
        //   href: getPermalink('/services'),
        // },
        // {
        //   text: 'Pricing',
        //   href: getPermalink('/pricing'),
        // },
        // {
        //   text: 'About us',
        //   href: getPermalink('/about'),
        // },
        // {
        //   text: 'Contact',
        //   href: getPermalink('/contact'),
        // },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Privacy policy',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },
    {
      text: 'Calendario',
      links: [
        // {
        //   text: 'Lead Generation',
        //   href: getPermalink('/landing/lead-generation'),
        // },
        // {
        //   text: 'Long-form Sales',
        //   href: getPermalink('/landing/sales'),
        // },
        // {
        //   text: 'Click-Through',
        //   href: getPermalink('/landing/click-through'),
        // },
        // {
        //   text: 'Product Details (or Services)',
        //   href: getPermalink('/landing/product'),
        // },
        // {
        //   text: 'Coming Soon or Pre-Launch',
        //   href: getPermalink('/landing/pre-launch'),
        // },
        // {
        //   text: 'Subscription',
        //   href: getPermalink('/landing/subscription'),
        // },
      ],
    },
    {
      text: 'Blog',
      links: [
        // {
        //   text: 'Blog List',
        //   href: getBlogPermalink(),
        // },
        // {
        //   text: 'Article',
        //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        // },
        // {
        //   text: 'Article (with MDX)',
        //   href: getPermalink('markdown-elements-demo-post', 'post'),
        // },
        // {
        //   text: 'Category Page',
        //   href: getPermalink('tutorials', 'category'),
        // },
        // {
        //   text: 'Tag Page',
        //   href: getPermalink('astro', 'tag'),
        // },
      ],
    },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [
    {
      text: 'Descargar',
      //  href: 'https://github.com/onwidget/astrowind',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Productos',
      links: [
        { text: 'Biblias y libros', href: '#' },
        { text: 'Adornos y recuerdos', href: '#' },
        { text: 'Equipos de sonido', href: '#' },
        { text: 'Histerias de clientes', href: '#' },
        { text: 'Precios', href: '#' },
        { text: 'Recursos bíblicos', href: '#' },
      ],
    },
    {
      title: 'Tecnología',
      links: [
        { text: 'API de desarrollo', href: '#' },
        { text: 'Colaboradores', href: '#' },
        { text: 'Herramientas', href: '#' },
        { text: 'Hosting y servidores', href: '#' },
        { text: 'Jóvenes en acción', href: '#' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Documentación', href: '#' },
        { text: 'Foro de la congregación', href: '#' },
        { text: 'Preguntas frecuentes', href: '#' },
        { text: 'Habilidades', href: '#' },
        { text: 'Estado', href: '#' },
      ],
    },
    {
      title: 'Iglesia',
      links: [
        { text: 'Blog', href: '#' },
        { text: 'Noticias', href: '#' },
        { text: 'Ayuda Social', href: '#' },
        { text: 'Sobre nosotros', href: '#' },
        { text: 'Tienda Virtual', href: '#' },
        { text: 'Escuela Bíblica', href: '#' },
        { text: 'Biblioteca Virtual', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    {
      text: 'Terms',
      // href: getPermalink('/terms')
    },
    {
      text: 'Privacy Policy',
      // href: getPermalink('/privacy')
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Desarrollado por <a class="text-blue-600 underline dark:text-muted" href="#">backytadev</a>, Lima, Perú · Todos los derechos reservados &copy; 2025.
  `,
};
