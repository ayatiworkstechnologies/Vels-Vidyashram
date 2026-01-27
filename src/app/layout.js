import { Sora, Inter } from "next/font/google";
import "./globals.css";

/* ======================
   GOOGLE FONTS (NEXT/FONT)
====================== */

// Primary – Sora (Titles / Subtitles)
const sora = Sora({
  subsets: ["latin"],
  weight: ["600"], // Semi-Bold
  variable: "--font-primary",
  display: "swap",
});

// Secondary – Inter (Body / Tags)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"], // Regular, Medium
  variable: "--font-secondary",
  display: "swap",
});

export const metadata = {
  title: "Vels Vidyashram",
  description: "Vels Vidyashram Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <main className="relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
