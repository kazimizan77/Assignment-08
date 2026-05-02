import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="max-w-[1600px] mx-auto px-6">{children}</main>
      <Footer />
    </div>
  );
}
