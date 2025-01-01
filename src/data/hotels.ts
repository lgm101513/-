export const hotelData = [
  {
    id: 'crowne',
    name: '武陵源皇冠假日酒店',
    description: '五星级酒店，位于景区核心位置，提供豪华住宿体验。',
    price: '¥888起/晚',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    fullDescription: `
      武陵源皇冠假日酒店坐落于世界自然遗产地核心区域，是张家界地区首家国际奢华品牌酒店。

      • 地理位置：紧邻武陵源风景区大门
      • 房型：豪华房、行政房、套房等
      • 配套设施：
        - 全日制餐厅
        - 健身中心
        - 商务中心
        - 会议室
      
      交通：提供机场接送服务
    `,
    amenities: [
      '免费WiFi',
      '室内恒温泳池',
      '24小时健身中心',
      '行政酒廊',
      '免费停车场'
    ],
    roomTypes: [
      {
        type: '豪华大床房',
        price: '¥888/晚',
        size: '40平方米'
      },
      {
        type: '行政套房',
        price: '¥1688/晚',
        size: '80平方米'
      }
    ]
  },
  {
    id: 'boutique',
    name: '天门山精品客栈',
    description: '现代中式风格精品客栈，临近天门山景区。',
    price: '¥468起/晚',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80',
    fullDescription: `
      天门山精品客栈融合现代与传统设计元素，为游客提供舒适的住宿体验。

      • 地理位置：距离天门山索道站5分钟步行
      • 房型：观景房、家庭房、套房
      • 特色服务：
        - 免费接送景区
        - 当地特色早餐
        - 旅游咨询服务
        
      交通：可预约接送机服务
    `,
    amenities: [
      '免费WiFi',
      '观景露台',
      '24小时前台',
      '行李寄存',
      '免费早餐'
    ],
    roomTypes: [
      {
        type: '观景大床房',
        price: '¥468/晚',
        size: '30平方米'
      },
      {
        type: '家庭套房',
        price: '¥668/晚',
        size: '45平方米'
      }
    ]
  },
  {
    id: 'resort',
    name: '张家界森林度假酒店',
    description: '森林中的度假胜地，提供独特的自然体验。',
    price: '¥728起/晚',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80',
    fullDescription: `
      张家界森林度假酒店坐落于原始森林中，让游客享受与自然亲密接触的度假体验。

      • 地理位置：位于国家森林公园内
      • 房型：森林木屋、豪华套房
      • 特色设施：
        - 户外温泉
        - 森林步道
        - 观景平台
        - 农家餐厅
        
      特色：每个房间都有独立观景阳台
    `,
    amenities: [
      '免费WiFi',
      '户外温泉',
      '观景餐厅',
      '丛林探险',
      '免费停车'
    ],
    roomTypes: [
      {
        type: '森林木屋',
        price: '¥728/晚',
        size: '35平方米'
      },
      {
        type: '豪华温泉套房',
        price: '¥1288/晚',
        size: '60平方米'
      }
    ]
  }
];