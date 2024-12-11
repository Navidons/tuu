'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type Media = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
};

const mediaContent: Media[] = [
  { type: 'image', src: '/hero-section/hero.png', alt: 'University Campus' },
  { type: 'video', src: '/shows/Science-&-Technology.mp4' },
  { type: 'image', src: '/university-class.jpg', alt: 'Students in Class' },
  { type: 'image', src: '/university-senate.jpg', alt: 'University Senate' },
  { type: 'image', src: '/university-banner.jpg', alt: 'University Banner' },
];

export const TVSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === mediaContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] group">
      {/* TV Frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 rounded-[40px] p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
        {/* TV Screen Bezel */}
        <div className="absolute inset-8 bg-black rounded-[30px] shadow-inner" />
        
        {/* Control Panel */}
        <div className="absolute -right-6 top-20 space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
        </div>

        {/* TV Screen */}
        <div className="relative w-full h-full bg-black rounded-[20px] overflow-hidden">
          {/* Screen Glare Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-20" />
          
          {/* TV Static Effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/noise.png')] animate-[noise_0.5s_infinite] mix-blend-overlay" />
          
          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none z-10 opacity-40" />
          
          {/* Content */}
          <div className="relative w-full h-full">
            {mediaContent.map((media, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                {media.type === 'image' ? (
                  <Image
                    src={media.src}
                    alt={media.alt || ''}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                ) : (
                  <video
                    src={media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Scan Lines Effect */}
          <div className="absolute inset-0 bg-scan-lines pointer-events-none z-30 opacity-10" />
          
          {/* Bottom Light Reflection */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none z-20" />
        </div>

        {/* TV Brand Logo */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-600 text-sm font-semibold tracking-wider opacity-50">
          UNITY TV
        </div>
      </div>

      {/* TV Stand */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-60 h-24">
        {/* Main Stand */}
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-gray-800 to-gray-900 transform translate-y-10 rounded-lg shadow-xl" />
        {/* Base */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-3 bg-gray-800 transform translate-y-10 rounded-full shadow-2xl" />
      </div>
    </div>
  );
};
