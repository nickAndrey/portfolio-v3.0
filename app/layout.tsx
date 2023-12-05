import ThemeProvider from '@/contexts/theme';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import Header from '@/components/common/Header/Header';
import '@/scss/main.scss';
import styles from '@/scss/root-layout.module.scss';

const raleway = Raleway({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ThemeProvider>
          <div className={styles['root-layout-container']}>
            <Header />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
