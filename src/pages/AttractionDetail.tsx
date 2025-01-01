import React from 'react';
import { useParams } from 'react-router-dom';
import { attractionsData } from '../data/attractions';
import BackButton from '../components/shared/BackButton';

const AttractionDetail = () => {
  const { id } = useParams();
  const attraction = attractionsData.find(a => a.id === id);

  if (!attraction) {
    return <div className="text-center py-20">景点未找到</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <BackButton />
      
      <img
        src={attraction.image}
        alt={attraction.title}
        className="w-full h-96 object-cover rounded-xl mb-8"
      />
      
      <h1 className="text-4xl font-bold mb-6">{attraction.title}</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">景点介绍</h2>
            <p className="whitespace-pre-line">{attraction.fullDescription}</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">游览贴士</h3>
          <ul className="space-y-2">
            {attraction.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 mr-2"></span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttractionDetail;