// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import Hero from './components/sections/Hero';
// import TollScroller from './components/sections/TollScroller';
// import Services from './components/sections/Services';
// import TopMate from './components/sections/TopMate';
// import Rating from './components/sections/Rating';
// import Testimonial from './components/sections/Testimonial';
// import Social from './components/sections/Social';
// import Contact from './components/sections/Contact';
import Home from "./Home";
import About from "./components/sections/About";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        {/* <Hero />
      <TollScroller />
      <Services />
      <TopMate />
      <Rating />
      <Testimonial />
      <Social />
      <Contact /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
