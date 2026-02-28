import TestimonialCard from './TestimonialCard';
import type { Testimonial } from '../../types/trust';

const testimonials: Testimonial[] = [
  {
    name: '김영희',
    rating: 5,
    comment: '딸기가 정말 달아요! 당도 체크 후 배송해주셔서 믿음이 가요. 아이들도 너무 좋아하고 다음에도 꼭 주문할 거예요.',
    avatar: '/images/review-profile-1.png',
    date: '2024-01-15',
  },
  {
    name: '박민수',
    rating: 5,
    comment: '샤인머스켓 한 알 한 알이 예술이에요. 선물용으로 최고! 포장도 고급스럽고 받는 분이 정말 감동하셨어요.',
    avatar: '/images/review-profile-2.png',
    date: '2024-01-10',
  },
  {
    name: '이수진',
    rating: 4,
    comment: '포장 상태가 완벽했고 배송도 빨라요. 재구매 의사 100%. 과일 하나하나 정성이 느껴지는 품질이었습니다.',
    avatar: '/images/review-profile-3.png',
    date: '2024-01-08',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 px-5 md:px-6 bg-[#FAFAFA]">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[clamp(24px,3vw,28px)] font-bold text-[#111] tracking-[-0.02em] mb-3">
            고객님들의 달콤한 후기
          </h2>
          <p className="text-[15px] text-[#888] leading-relaxed tracking-[-0.01em] max-w-md mx-auto">
            브릭스몰을 경험한 고객님들의 생생한 이야기
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
