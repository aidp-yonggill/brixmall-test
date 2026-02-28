import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 14,
  md: 18,
  lg: 22,
};

export default function StarRating({ rating, maxStars = 5, size = 'md' }: StarRatingProps) {
  const iconSize = sizeMap[size];

  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`5점 만점에 ${rating}점`}
    >
      {Array.from({ length: maxStars }, (_, i) => {
        const isFilled = i < Math.round(rating);
        return (
          <Star
            key={i}
            size={iconSize}
            strokeWidth={1.75}
            className={
              isFilled
                ? 'text-amber-400 fill-amber-400'
                : 'text-gray-300 fill-transparent'
            }
            aria-label={isFilled ? 'filled star' : 'empty star'}
          />
        );
      })}
    </div>
  );
}
