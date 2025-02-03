import Hero from "./components/sections/Hero"
// import TollScroller from "./components/sections/TollScroller"
import TollScroller from './components/sections/TollScroller';
import Services from './components/sections/Services';
import TopMate from './components/sections/TopMate';
import Rating from './components/sections/Rating';
import Testimonial from './components/sections/Testimonial';
import Social from './components/sections/Social';
import Contact from './components/sections/Contact';

function Home() {
  return (
    <>
      <Hero />
      <TollScroller />
      <Services />
      <TopMate />
      <Rating />
      <Testimonial />
      <Social />
      <Contact />
    </>
  )
}

export default Home