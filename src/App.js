import './App.css';
import Header from './Components/Header'
import Services from './Components/Services'
import Projects from './Components/Projects'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section className ="services">
        <Services />
      </section>
      <section className ="projects">
        <Projects />
      </section>
      {/* TODO */}
      {/* <section className ="case-studies">
        <CaseStudies />
      </section>
      <section className ="image-gallery">
        <ImageGallery />
      </section>
      <section className ="testimonials">
        <Testimonials />
      </section>
      <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
