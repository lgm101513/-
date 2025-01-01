import React from 'react';
import { ShoppingBag } from 'lucide-react';

const shoppingItems = [
  {
    name: '土家织锦',
    description: '传统手工艺品，色彩艳丽的织物，适合作为礼品。',
    price: '¥100-1000',
    location: '土家织锦博物馆、特产商店'
  },
  {
    name: '猕猴桃干',
    description: '张家界特产，天然健康的休闲零食。',
    price: '¥20-50/包',
    location: '农贸市场、特产店'
  },
  {
    name: '苗族银饰',
    description: '手工打造的传统银饰，独特的民族特色。',
    price: '¥200-2000',
    location: '民族工艺品商店'
  }
];

const Shopping = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">特色购物</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {shoppingItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <ShoppingBag className="w-6 h-6 text-emerald-600 mr-2" />
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="space-y-2">
                <p className="text-emerald-600 font-medium">价格: {item.price}</p>
                <p className="text-gray-600">购买地点: {item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shopping;