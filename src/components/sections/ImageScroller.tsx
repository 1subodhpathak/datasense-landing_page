const ImageScroller = () => {
  const images = [
    '/assets/Collectibles/1.png',
    '/assets/Collectibles/2.png',
    '/assets/Collectibles/3.png',
    '/assets/Collectibles/4.png',
    '/assets/Collectibles/5.png',
    '/assets/Collectibles/6.png',
    '/assets/Collectibles/7.png',
    '/assets/Collectibles/8.png',
    '/assets/Collectibles/9.png',
    '/assets/Collectibles/10.png',
    '/assets/Collectibles/11.png',
    '/assets/Collectibles/12.png',
    '/assets/Collectibles/13.png',
    '/assets/Collectibles/14.png',
    '/assets/Collectibles/15.png',
    '/assets/Collectibles/16.png',
    '/assets/Collectibles/17.png',
    '/assets/Collectibles/18.png',
    '/assets/Collectibles/19.png',
    '/assets/Collectibles/20.png',
  ];

  // Calculate the total width: 20 images × (160px width + 32px gap)
  const totalWidth = images.length * (160 + 32); // 160px = w-40, 32px = gap-8

  return (
    <div className="relative w-full overflow-hidden bg-white py-16">
      {/* Top curved border */}
      <div className="absolute top-0 left-0 w-full h-16">
        <div className="w-full h-full bg-dark-cyan/90 rounded-b-[100%]" />
      </div>
      {/* Bottom curved border */}
      <div className="absolute bottom-0 left-0 w-full h-16">
        <div className="w-full h-full bg-dark-cyan/90 rounded-t-[100%]" />
      </div>
      
      <div className="relative flex overflow-hidden">
        {/* Scrolling container */}
        <div 
          className="flex gap-8 py-4 whitespace-nowrap"
          style={{
            animation: `scroll-seamless ${totalWidth / 60}s linear infinite`, // Adjust speed: totalWidth/speed
            width: `${totalWidth * 2}px` // Double width for seamless loop
          }}
        >
          {/* First set of images */}
          {images.map((image, index) => (
            <div
              key={`image-1-${index}`}
              className="shrink-0 relative group inline-flex"
            >
              {/* Glowing border animation */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-caribbean via-bright-cyan to-caribbean rounded-xl blur opacity-75 group-hover:opacity-100 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-teal-800 backdrop-blur-xl rounded-xl p-4 border border-caribbean/30 
                            transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-caribbean/50">
                <img 
                  src={image} 
                  alt={`Tool ${index + 1}`}
                  className="w-54 h-40 object-contain rounded-lg"
                />
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {images.map((image, index) => (
            <div
              key={`image-2-${index}`}
              className="shrink-0 relative group inline-flex"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-caribbean via-bright-cyan to-caribbean rounded-xl blur opacity-75 group-hover:opacity-100 animate-pulse"></div>
              <div className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-teal-800 backdrop-blur-xl rounded-xl p-4 border border-caribbean/30 
                            transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-caribbean/50">
                <img 
                  src={image} 
                  alt={`Tool ${index + 1}`}
                  className="w-54 h-40 object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageScroller;