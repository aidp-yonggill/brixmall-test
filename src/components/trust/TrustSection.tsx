import { Droplets, Truck, ShieldCheck } from 'lucide-react';
import GuaranteeCard from './GuaranteeCard';
import type { GuaranteeItem } from '../../types/trust';

const guarantees: GuaranteeItem[] = [
  {
    icon: Droplets,
    title: '당도 17° 이상 보장',
    description: '측정 검증된 당도, 미달 시 전액 환불',
  },
  {
    icon: Truck,
    title: '24시간 신선 배송',
    description: '수확 당일 산지 직송, 최상의 신선도',
  },
  {
    icon: ShieldCheck,
    title: '100% 만족 보증',
    description: '품질 불만족 시 무조건 교환/환불',
  },
];

export default function TrustSection() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 md:py-28 px-5 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[clamp(24px,3vw,28px)] font-bold text-[#111] tracking-[-0.02em] mb-3">
            브릭스몰의 당도 보증 약속
          </h2>
          <p className="text-[15px] text-[#888] leading-relaxed tracking-[-0.01em] max-w-md mx-auto">
            고객님께 약속드립니다. 최고의 품질만을 전해드리겠습니다.
          </p>
        </div>
        <div
          data-testid="guarantee-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {guarantees.map((item) => (
            <GuaranteeCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
