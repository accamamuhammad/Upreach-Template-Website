import Nav from "./components/Primary/Nav";
import Hero from "./components/Primary/Hero";
import Services from "./components/Primary/Services";
import AboutUs from "./components/Primary/AboutUs";
import Testimonials from "./components/Primary/Testimonials";
import Team from "./components/Primary/Team";
import QandA from "./components/Primary/QandA";
import CTA from "./components/Primary/CTA";

export default function Home() {
  return (
    <main className="bg-primary font-sans w-[100vw]">
      <Nav />
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />
      <Team />
      <QandA />
      <CTA />
    </main>
  );
}
