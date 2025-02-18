const ScrollingText: React.FC = () => {
  const scrollingContent = [
    'LEARN',
    'PLAY',
    'COMPETE',
    'CONNECT', 
    'PRACTICE',
    'SOLVE'
  ].join(' • ');
  
  return (
    <div className="w-full pt-12 overflow-hidden bg-transparent backdrop-blur-sm">
      <div className="relative flex">
        {/* First scroll container */}
        <div className="flex animate-scroll-rtl-text whitespace-nowrap">
          <span className="mx-12 text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-300">
            {scrollingContent}
          </span>
          <span className="mx-12 text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-300">
            {scrollingContent}
          </span>
        </div>
        
        {/* Duplicate for seamless loop */}
        <div className="flex animate-scroll-rtl-text whitespace-nowrap">
          <span className="mx-12 text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-300">
            {scrollingContent}
          </span>
          <span className="mx-12 text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-300">
            {scrollingContent}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;