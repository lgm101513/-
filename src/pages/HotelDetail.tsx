import React from 'react';
import { useParams } from 'react-router-dom';
import { hotelData } from '../data/hotels';
import BackButton from '../components/shared/BackButton';

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = hotelData.find(h => h.id === id);

  if (!hotel) {
    return <div className="text-center py-20">酒店信息未找到</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <BackButton />
      
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-96 object-cover rounded-xl mb-8"
      />
      
      <h1 className="text-4xl font-bold mb-6">{hotel.name}</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">酒店介绍</h2>
            <p className="whitespace-pre-line">{hotel.fullDescription}</p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">设施服务</h3>
            <ul className="grid grid-cols-2 gap-4">
              {hotel.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></span>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">房型价格</h3>
            {hotel.roomTypes.map((room, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h4 className="font-medium">{room.type}</h4>
                <p className="text-emerald-600">{room.price}</p>
                <p className="text-sm text-gray-600">{room.size}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;