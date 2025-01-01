import React from 'react';

const traditionalClothing = [
  {
    name: '土家族服饰',
    description: '以黑、蓝为主的传统服装，刺绣精美，具有浓郁的民族特色。',
    features: ['手工刺绣', '传统图案', '精美配饰'],
    price: '¥300-1000'
  },
  {
    name: '苗族盛装',
    description: '色彩艳丽的民族服装，银饰点缀，适合拍照留念。',
    features: ['银饰装饰', '鲜艳色彩', '独特风格'],
    price: '¥500-2000'
  },
  {
    name: '现代改良装',
    description: '传统与现代结合的改良服装，日常穿着更实用。',
    features: ['现代设计', '民族元素', '舒适实用'],
    price: '¥200-800'
  }
];

const Clothing = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">特色服饰</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {traditionalClothing.map((clothing, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{clothing.name}</h3>
              <p className="text-gray-600 mb-4">{clothing.description}</p>
              <div className="mb-4">
                <h4 className="font-medium mb-2">特点：</h4>
                <ul className="space-y-1">
                  {clothing.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-emerald-600 font-medium">价格: {clothing.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clothing;