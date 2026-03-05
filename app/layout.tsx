import type { Metadata } from 'next';
import { Cairo, Almarai } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'مبادرة أمل | للإغاثة والأعمال الإنسانية',
  description: 'منصة إنسانية تهدف لتسليط الضوء على معاناة المحتاجين ودعم المشاريع الإغاثية.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${almarai.variable}`}>
      <body className="antialiased bg-[#fcfcf9] text-[#1a1a1a]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
