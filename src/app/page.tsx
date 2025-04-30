import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
