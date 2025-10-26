import { useState, useEffect } from 'react';

const images = ['/founder-next-door.jpeg', '/founder-next-door-2.jpeg'];

const LatestUpdates = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="flex-shrink-0">
      <div className="border-l border-border pl-8">
        <h3 className="font-serif text-2xl font-bold mb-6 pb-2 border-b border-border">
          LATEST UPDATES
        </h3>
        <div className="relative w-full aspect-[3/4]">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="Founder Next Door"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default LatestUpdates;
