import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import FloatingActions from "./layout/FloatingIcons";
import Modal from './layout/modals';
import ScrollToTop from "./components/ScrollToTop";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vels Vidyashram",
  description: "Best school in Chennai",
  canonical: "https://velsvidyashram.ac.in"
};

export default function RootLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
         <Modal />
        <FloatingActions />
        <main style={{ overflowX: "clip" }}>
          {children}
        </main>
        <ScrollToTop />
        <Footer />
    </div>
  );
}
