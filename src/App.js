import './App.css';
import BackToTop from './common/BackToTop';
import Footer from './common/Footer';
import Hero from './components/Hero';
import Karmic from './components/Karmic';
import Projects from './components/Projects';
import Services from './components/Services';
import UpcomingProjects from './components/UpcomingProjects';
import Values from './components/Values';

function App() {
  return (
    <>
      <Hero />
      <UpcomingProjects />
      <Services />
      <Projects />
      <Karmic />
      <Values />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
