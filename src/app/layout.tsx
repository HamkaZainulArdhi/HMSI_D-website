// "use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/index.css";
import { poppins, playfairDisplay } from "@/styles/fonts";
import { Providers } from "./providers";
import { siteMetadata } from "@/lib/metadata";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${poppins.className} ${playfairDisplay.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}



