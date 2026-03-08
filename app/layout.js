import { DM_Sans, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import RouteTransitionEffects from '@/components/layout/RouteTransitionEffects';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Web Hosting India | Fast & Secure - Hostazo',
  description: 'Need help getting online? Hostazo makes web hosting easy. 24/7 human support, free migration, and easy website builder. Join Now!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${dmSans.className}`}>
      <body suppressHydrationWarning>
        <RouteTransitionEffects />
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
