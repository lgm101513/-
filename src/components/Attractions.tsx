import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../config/images';

const attractions = [
  {
    id: 'wulingyuan',
    title: '武陵源风景区',
    description: '包含张家界国家森林公园，以石英砂岩峰林地貌为特色的世界自然遗产。',
    image: images.attractions.wulingyuan,
  },
  {
    id: 'tianmen',
    title: '天门山',
    description: '著名的"天门洞"和玻璃栈道，体验惊险刺激的高空漫步。',
    image: images.attractions.tianmen,
  },
  {
    id: 'yuanjiajie',
    title: '袁家界',
    description: '电影《阿凡达》取景地，壮观的石峰景观。',
    image: images.attractions.yuanjiajie,
  },
];

const Attractions = () => {
  return (
    <section id="attractions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">精选景点</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <Link
              key={attraction.id}
              to={`/attraction/${attraction.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={attraction.image}
                alt={attraction.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;