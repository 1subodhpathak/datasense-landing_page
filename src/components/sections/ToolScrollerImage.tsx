// Array of 20 images - replace with your actual image paths
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

function ToolScrollerImage() {
  return (
    <section className="relative w-full bg-black overflow-hidden py-16">
      {/* Top curved border */}
      <div className="absolute top-0 left-0 w-full h-16">
        <div className="w-full h-full bg-dark-cyan/90 rounded-b-[100%]" />
      </div>
      
      {/* Bottom curved border */}
      <div className="absolute bottom-0 left-0 w-full h-16">
        <div className="w-full h-full bg-dark-cyan/90 rounded-t-[100%]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Image Scroll Container */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll-x gap-8 py-4">
            {images.map((image, index) => (
              <div
                key={`image-1-${index}`}
                className="shrink-0 flex items-center justify-center"
              >
                <img 
                  src={image} 
                  alt={`Scroll image ${index + 1}`}
                  className="w-48 h-40 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
            {images.map((image, index) => (
              <div
                key={`image-2-${index}`}
                className="shrink-0 flex items-center justify-center"
              >
                <img 
                  src={image} 
                  alt={`Scroll image ${index + 1}`}
                  className="w-48 h-40 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolScrollerImage;