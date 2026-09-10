import "../globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingActions from "./layout/FloatingIcons";
import Modal from "./layout/modals";
  
export const metadata = {
  title: "Vels Vidyashram",
  description: "Best school in Chennai",
  alternates: {
    canonical: "https://velsvidyashram.ac.in",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <FloatingActions />

      <main className="relative z-0">{children}</main>

      <ScrollToTop />
      <Modal />
      <Footer />
    </>
  );
}