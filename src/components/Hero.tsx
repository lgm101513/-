import React from 'react';
import { images } from '../config/images';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${images.hero}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            探索张家界的自然奇观
          </h1>
          <p className="text-xl text-white/90 mb-8">
            感受世界自然遗产的壮丽，体验独特的土家族文化
          </p>
          <a
            href="#attractions"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full
                     hover:bg-emerald-700 transition-colors text-lg font-medium"
          >
            开始探索
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;