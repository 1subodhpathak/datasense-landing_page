import Hero from './components/sections/Hero';
import CardSection from './components/sections/CardSection';
import TollScroller from './components/sections/TollScroller';
import Services from './components/sections/Services';
import Courses from './components/sections/Courses';
import TopMate from './components/sections/TopMate';
import Rating from './components/sections/Rating';
import Testimonial from './components/sections/Testimonial';
import Social from './components/sections/Social';
import Contact from './components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <TollScroller />
      <CardSection />
      <Services />
      <Courses />
      <TopMate />
      <Rating />
      <Testimonial />
      <Social />
      <Contact />
    </>
  );
};

export default Home;