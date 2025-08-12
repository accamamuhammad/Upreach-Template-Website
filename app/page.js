import Nav from "./components/Primary/Nav";
import Hero from "./components/Primary/Hero";
import Services from "./components/Primary/Services";
import AboutUs from "./components/Primary/AboutUs";

export default function Home() {
  return (
    <main className="bg-primary font-sans">
      <Nav />
      <Hero />
      <Services />
      <AboutUs />
    </main>
  );
}
