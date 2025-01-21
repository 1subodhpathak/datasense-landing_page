// src/App.tsx
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
// import About from './components/sections/About';
import TollScroller from './components/sections/TollScroller';
import Services from './components/sections/Services';
import TopMate from './components/sections/TopMate';
import Rating from './components/sections/Rating';
import Testimonial from './components/sections/Testimonial';
import Social from './components/sections/Social';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <TollScroller />
      <Services />
      <TopMate />
      <Rating />
      <Testimonial />
      <Social />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;