import React from 'react';
import { Bus, Train, Plane } from 'lucide-react';

const transportOptions = [
  {
    icon: <Plane className="w-8 h-8" />,
    title: '航空',
    description: '张家界荷花机场有直达北京、上海、广州等主要城市的航班。',
    details: [
      '距离市区约32公里',
      '有机场大巴和出租车服务',
      '每日多个航班往返'
    ]
  },
  {
    icon: <Train className="w-8 h-8" />,
    title: '铁路',
    description: '张家界火车站连接全国主要城市，高铁和普通列车均有开通。',
    details: [
      '位于市中心位置',
      '有公交车和出租车接驳',
      '提供行李寄存服务'
    ]
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: '公路',
    description: '市内公交和旅游专线覆盖主要景点，出行便捷。',
    details: [
      '景区专线直达各景点',
      '公交车覆盖市区主要区域',
      '可租车自驾游览'
    ]
  }
];

const Transportation = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">交通指南</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {transportOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-emerald-600 mr-3">{option.icon}</div>
                <h3 className="text-xl font-semibold">{option.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <ul className="space-y-2">
                {option.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transportation;