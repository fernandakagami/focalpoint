import "./globals.scss";

import { Inter_Tight } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
});


export const metadata = {
  title: "Focal Point",
  description: "It is a test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={interTight.className}>
        {children}
      </body>
    </html>
  );
}
