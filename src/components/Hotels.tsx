import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { hotelData } from '../data/hotels';

const Hotels = () => {
  return (
    <section id="hotels" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">住宿推荐</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {hotelData.map((hotel) => (
            <Link
              key={hotel.id}
              to={`/hotel/${hotel.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-gray-600">4.8</span>
                </div>
                <p className="text-gray-600 mb-4">{hotel.description}</p>
                <p className="text-emerald-600 font-medium">{hotel.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;