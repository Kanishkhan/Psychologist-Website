import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Office from "@/components/Office";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Office />
      <Footer />
    </main>
  );
}
