import "../globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./layout/modals";
import FloatingActions from "./layout/FloatingIcons";

export const metadata = {
  title: "Vels Vidyashram",
  description: "Best school in Chennai",
  canonical: "https://velsvidyashram.ac.in",
};

export default function RootLayout({ children }) {
  return (
    <>
        <Header />
        <FloatingActions />
         {/* <Modal /> */}
        <main className="relative z-0">
          {children}
        </main>
        <ScrollToTop />

        <Footer />
    </>
  );
}
