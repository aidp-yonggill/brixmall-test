import type { Product } from '../types/product';

export const PREMIUM_FRUITS: Product[] = [
  {
    id: 'strawberry',
    name: '프리미엄 딸기',
    brix: 14,
    price: 29900,
    originalPrice: 39900,
    image: '/images/strawberry.png',
    alt: '신선한 프리미엄 딸기 클로즈업',
    description: '산지 직송 고당도 딸기',
  },
  {
    id: 'shine-muscat',
    name: '샤인머스캣',
    brix: 18,
    price: 34900,
    originalPrice: 45000,
    image: '/images/shine-muscat.png',
    alt: '투명한 초록빛 샤인머스캣 포도송이',
    description: '달콤한 청포도의 정석',
  },
  {
    id: 'watermelon',
    name: '프리미엄 수박',
    brix: 12,
    price: 24900,
    image: '/images/watermelon.png',
    alt: '신선한 빨간 과육의 수박 단면',
    description: '시원하고 달콤한 여름의 맛',
  },
  {
    id: 'hallabong',
    name: '한라봉',
    brix: 15,
    price: 32900,
    originalPrice: 42000,
    image: '/images/hallabong.png',
    alt: '주황색 한라봉 제주 감귤',
    description: '제주 직송 프리미엄 감귤',
  },
];
