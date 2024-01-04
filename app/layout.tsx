import Header from '@/components/Header/Header';
import '@/styles/main.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './RootLayout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className={styles.wrapper}>
          <Header />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
