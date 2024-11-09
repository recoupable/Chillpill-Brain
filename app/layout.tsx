'use client';

import localFont from "next/font/local";
import "./globals.css";
import { OneTap, SyncstreamProvider } from "@syncstreamai/syncstream";
import "@syncstreamai/syncstream/dist/index.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SyncstreamProvider
          clientId="b8464499-c81c-48e0-82d7-cb6fa1b7d012"
        >
          <OneTap spotifyDefaultLink="spotify:artist:2hlmm7s2ICUX0LVIhVFlZQ"/>
          {children}
        </SyncstreamProvider>
      </body>
    </html>
  );
}
