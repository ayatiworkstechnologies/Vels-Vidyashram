import "../globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./layout/modals";
import FloatingActions from "./layout/FloatingIcons";

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
      <Modal />
      <FloatingActions />

      <main className="relative z-0 overflow-x-clip">
        {children}
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
}