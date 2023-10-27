import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from "next";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Travel Minds",
  description: "Travel Minds - your personal AI travel agent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
