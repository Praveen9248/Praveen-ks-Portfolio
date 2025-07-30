import {
  NavBar,
  Footer,
  Home,
  About,
  Projects,
  Certification,
  Contact,
} from "./components";
function App() {
  return (
    <>
      <NavBar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certification />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
