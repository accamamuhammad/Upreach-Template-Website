import Nav from "./components/Primary/Nav";
import Hero from "./components/Primary/Hero";
import Services from "./components/Primary/Services";
import AboutUs from "./components/Primary/AboutUs";
import Testimonials from "./components/Primary/Testimonials";
import Team from "./components/Primary/Team";

export default function Home() {
  return (
    <main className="bg-primary font-sans overflow-hidden">
      <Nav />
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />
      <Team />
    </main>
  );
}
