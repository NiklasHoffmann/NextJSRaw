export const siteConfig = {
  name: 'Next.js Starter',
  description:
    'A production-ready Next.js starter with TypeScript, Tailwind CSS, MongoDB, i18n, and more.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/yourusername/nextjs-starter',
  },
  creator: {
    name: 'Your Name',
    url: 'https://yourwebsite.com',
  },
};

export type SiteConfig = typeof siteConfig;
