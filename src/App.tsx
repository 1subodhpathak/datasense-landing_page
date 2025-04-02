// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./Home";
import About from "./components/sections/About";
import Footer from "./components/layout/Footer";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SQLCourse from './pages/courses/SQLCourse';
import UpcomingEvents from './pages/UpcomingEvents';

// Define proper TypeScript props interface
interface LoadingScreenProps {
  finishLoading: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ finishLoading }) => {
  useEffect(() => {
    // Simulate checking if everything is loaded
    const timeoutId = setTimeout(() => {
      finishLoading();
    }, 3000); // Adjust time as needed
    
    return () => clearTimeout(timeoutId);
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-16 h-16 border-4 border-cyan-500 rounded-full border-t-transparent"
      />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  
  // Optional: Use actual page load events instead of just a timer
  useEffect(() => {
    // Check if the window is fully loaded
    if (document.readyState === 'complete') {
      setTimeout(() => setLoading(false), 1000); // Minimum display time for loader
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => setLoading(false), 1000);
      });
    }
  }, []);

  return (
    <>
      {loading && <LoadingScreen finishLoading={() => setLoading(false)} />}
      <main className={loading ? 'hidden' : 'block'}>
        <Router>
          <div className="min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses/sql" element={<SQLCourse />} />
              <Route path="/events" element={<UpcomingEvents />} />
              <Route path="/events/:eventType" element={<UpcomingEvents />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </main>
    </>
  );
}

export default App;