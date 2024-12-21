import { AboutUs } from "@/components/about/AboutUs";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { Gallery } from "@/components/gallery/Gallery";
import { Header } from "@/components/header/Header";
import { Navbar } from "@/components/header/Navbar";
import { Services } from "@/components/services/Services";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
