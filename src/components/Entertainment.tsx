import React from 'react';
import { Music, Theater, Mountain } from 'lucide-react';

const activities = [
  {
    icon: <Theater className="w-8 h-8" />,
    title: '魅力湘西表演',
    description: '大型实景民族歌舞表演，展现土家族、苗族风情。',
    schedule: '每晚 19:30-21:00',
    price: '¥238/人起'
  },
  {
    icon: <Mountain className="w-8 h-8" />,
    title: '玻璃栈道体验',
    description: '天门山玻璃栈道，刺激惊险的高空漫步。',
    schedule: '8:00-17:00',
    price: '¥160/人'
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: '民族歌舞互动',
    description: '参与土家族、苗族特色歌舞表演，体验民族文化。',
    schedule: '每日多场次',
    price: '¥120/人'
  }
];

const Entertainment = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">文化娱乐</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-emerald-600 mr-3">{activity.icon}</div>
                <h3 className="text-xl font-semibold">{activity.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <div className="space-y-2">
                <p className="text-gray-600">时间: {activity.schedule}</p>
                <p className="text-emerald-600 font-medium">价格: {activity.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Entertainment;