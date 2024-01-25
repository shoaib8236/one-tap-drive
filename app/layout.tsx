import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.scss";
import {
  Header,
  Footer
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rent a Car",
  description: "Most affordable car rental service in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
