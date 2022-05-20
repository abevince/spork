import { DefaultSeoProps } from 'next-seo';

export const defaultSeo: DefaultSeoProps = {
  title: 'Spork',
  description:
    'Spork is a creator-driven and community-loving platform for chefs, food entrepreneurs, or simply all food lovers worldwide.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'http://theplate.org',
    site_name: 'Spork',
  },
};
