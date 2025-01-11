import './App.css';
import BackToTop from './common/BackToTop';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import UpcomingProjects from './components/UpcomingProjects';

function App() {
  return (
    <>
      <Hero />
      <UpcomingProjects />
      <Services />
      <Projects />
      <BackToTop />
    </>
  );
}

export default App;
