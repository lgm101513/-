import React from 'react';
import { Link } from 'react-router-dom';
import { foodData } from '../data/food';

const Food = () => {
  return (
    <section id="food" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">特色美食</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {foodData.map((food) => (
            <Link
              key={food.id}
              to={`/food/${food.id}`}
              className="overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
                <p className="text-gray-600 mb-4">{food.description}</p>
                <p className="text-emerald-600 font-medium">{food.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food;