// src/App.tsx
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Hero from './components/sections/Hero';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;