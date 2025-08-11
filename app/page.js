import Nav from "./components/Primary/Nav";
import Hero from "./components/Primary/Hero";
import Services from "./components/Primary/Services";

export default function Home() {
  return (
    <main className="bg-primary">
      <Nav />
      <Hero />
      <Services />
    </main>
  );
}
