import HomePageClient from './HomePageClient';

/** SEO runs only on the server */
export const metadata = {
  title: 'Dmax Solar • Future-proof Renewable Solutions',
  description:
    'Cutting-edge solar EPC, storage & EV infrastructure delivered with measurable ROI.',
};

export default function Page() {
  return <HomePageClient />;
}




