
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Footer from "./components/footer";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="projects" className="page-section">
          <Projects />
        </section>

        <section id="resume" className="page-section">
          <Resume />
        </section>
      </main>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;
