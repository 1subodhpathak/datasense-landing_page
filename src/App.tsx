// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./Home";
import About from "./components/sections/About";
import Footer from "./components/layout/Footer";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CoursePage from './pages/courses/CoursePage';
// import SQLCourse from './pages/courses/SQLCourse';
// import PythonCourse from './pages/courses/PythonCourse'; 
// import AIMLCourse from './pages/courses/AIMLCourse';
import UpcomingEvents from './pages/UpcomingEvents';
import { useScrollEffect } from './hooks/useScrollEffect';
import AvailableSoon from './pages/AvailableSoon';
import { ProtectedRoute } from './components/ProtectedRoute';
import PricingPage from "./pages/Pricing";
import QuizWrapper from './pages/coderpad/QuizWrapper';

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

function AppContent() {
  useScrollEffect();
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/courses/:courseType" element={<CoursePage />} />
        <Route path="/events" element={<UpcomingEvents />} />
        <Route path="/events/:eventType" element={<UpcomingEvents />} />
        <Route path="/coming-soon" element={<AvailableSoon />} />
        <Route 
          path="/pricing" 
          element={
            <ProtectedRoute>
              <PricingPage />
            </ProtectedRoute>
          } 
        />
        <Route path="/quiz" element={<QuizWrapper />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only apply loading screen for non coming-soon routes
    const currentPath = window.location.pathname;
    if (currentPath === '/coming-soon' || currentPath === '/quiz') {
      setLoading(false);
      return;
    }

    if (document.readyState === 'complete') {
      setTimeout(() => setLoading(false), 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => setLoading(false), 1000);
      });
    }
  }, []);

  return (
    <>
      {loading && window.location.pathname !== '/coming-soon' && (
        <LoadingScreen finishLoading={() => setLoading(false)} />
      )}
      <main className={loading && window.location.pathname !== '/coming-soon' ? 'hidden' : 'block'}>
        <Router>
          <AppContent />
        </Router>
      </main>
    </>
  );
}

export default App;