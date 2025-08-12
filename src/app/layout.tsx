import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const playFairDisplay = Playfair_Display({
  variable: "--font-playFairDisplay",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Queen Arit Circle",
  description: "Queen Arit Circle || community || Spicy-honest mentorship ",
  icons: "/QueenAritCircle.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playFairDisplay.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
