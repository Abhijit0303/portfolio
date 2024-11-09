import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { data } from "./cms/data";

function App() {
  return (
    <div className="min-h-screen bg-secondary text-primary">
      <Header data={data.header} />
      <main className="overflow-hidden">
        <Hero data={data.hero} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        {/* <Testimonials data={data.testimonials} /> */}
        <Contact data={data.contact} />
      </main>
      <Footer data={data.footer} />
    </div>
  );
}

export default App;
