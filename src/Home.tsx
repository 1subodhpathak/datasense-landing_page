import Hero from './components/sections/Hero';
import TollScroller from './components/sections/TollScroller';
// import Services from './components/sections/Services';

import Courses from './components/sections/Courses';
import TopMate from './components/sections/TopMate';
import Rating from './components/sections/Rating';
import Testimonial from './components/sections/Testimonial';
import Social from './components/sections/Social';
import Contact from './components/sections/Contact';
import ServicesMainNew from './components/sections/ServiceMainNew';
// import ServicesMain from './components/sections/ServicesMain';
import PracticeArea from './components/sections/PracticeArea';
import GamingArena from './components/sections/GamingArena';
import AIServices from './components/sections/AIServices';
// import ToolScrollerImage from './components/sections/ToolScrollerImage';
import TestimonyOne from './components/sections/TestimonyOne';
import BadgeScroller from './components/sections/BadgeScroller';
import ImageScroller from './components/sections/ImageScroller';

const Home = () => {
  return (
    <>
      <Hero />
      <TollScroller />
      {/* <Services /> */}
      {/* <ServicesMain /> */}
      <ServicesMainNew />
      <Courses />
      <BadgeScroller />
      <PracticeArea />
      <TestimonyOne />
      <GamingArena />
      <ImageScroller />
      <AIServices />
      {/* <ToolScrollerImage /> */}
      <TopMate />
      <Rating />
      <Testimonial />
      <Social />
      <Contact />
    </>
  );
};

export default Home;