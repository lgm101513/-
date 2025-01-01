import React from 'react';
import { useParams } from 'react-router-dom';
import { foodData } from '../data/food';
import BackButton from '../components/shared/BackButton';

const FoodDetail = () => {
  const { id } = useParams();
  const food = foodData.find(f => f.id === id);

  if (!food) {
    return <div className="text-center py-20">美食信息未找到</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <BackButton />
      
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-96 object-cover rounded-xl mb-8"
      />
      
      <h1 className="text-4xl font-bold mb-6">{food.name}</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">美食介绍</h2>
            <p className="whitespace-pre-line">{food.fullDescription}</p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">主要食材</h3>
            <ul className="space-y-2">
              {food.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">价格</h3>
            <p className="text-emerald-600 font-medium text-lg">{food.price}</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">推荐餐厅</h3>
            <ul className="space-y-3">
              {food.locations.map((location, index) => (
                <li key={index} className="text-gray-600">{location}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;