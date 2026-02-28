import StarRating from './StarRating';
import type { Testimonial } from '../../types/trust';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.name} 프로필`}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-100"
        />
        <div>
          <p className="font-bold text-[#111] tracking-[-0.01em]">
            {testimonial.name}
          </p>
          <p className="text-[13px] text-[#888] tracking-[-0.01em]">
            {testimonial.date}
          </p>
        </div>
      </div>
      <StarRating rating={testimonial.rating} size="sm" />
      <p className="mt-3 text-[15px] leading-relaxed text-[#333] tracking-[-0.01em] line-clamp-4">
        {testimonial.comment}
      </p>
    </div>
  );
}
