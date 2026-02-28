import { ShoppingCart } from 'lucide-react';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

/**
 * Formats a number as Korean Won currency string.
 * e.g. 29900 → "29,900원"
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ko-KR').format(price) + '원';
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { name, brix, price, originalPrice, image, alt, description } = product;
  const hasDiscount = originalPrice != null && originalPrice > price;
  const discountPercent = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    onAddToCart?.(product);
  };

  return (
    <article
      className="group relative flex flex-col bg-white rounded-[20px] overflow-hidden
        shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)]
        transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
        hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
        focus-within:ring-2 focus-within:ring-[#E5A000] focus-within:ring-offset-2"
    >
      {/* Image area — 60% of card */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F5F5F7]">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            group-hover:scale-105"
        />

        {/* Brix badge — top right */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5
            bg-gradient-to-r from-[#E5A000] to-[#F0B429] text-white
            rounded-full text-[13px] font-bold tracking-[-0.01em]
            shadow-[0_2px_8px_rgba(229,160,0,0.35)]"
          aria-label={`당도 ${brix} 브릭스`}
        >
          <span className="text-[11px]">🍯</span>
          <span>{brix}°Bx</span>
        </div>

        {/* Discount badge */}
        {hasDiscount && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1
              bg-[#FF3B30] text-white rounded-full
              text-[12px] font-bold"
          >
            -{discountPercent}%
          </div>
        )}
      </div>

      {/* Info area — 40% of card */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Name & description */}
        <div>
          <h3 className="text-[17px] font-bold text-[#111] tracking-[-0.02em] leading-tight">
            {name}
          </h3>
          {description && (
            <p className="mt-1 text-[13px] text-[#888] leading-relaxed tracking-[-0.01em]">
              {description}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-auto">
          {hasDiscount && (
            <span className="text-[14px] text-[#888] line-through" aria-label={`원래 가격 ${formatPrice(originalPrice)}`}>
              {formatPrice(originalPrice)}
            </span>
          )}
          <span className="text-[20px] font-extrabold text-[#111] tracking-[-0.02em]">
            {formatPrice(price)}
          </span>
        </div>

        {/* Add to cart button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-2 w-full h-[48px]
            bg-[#111] text-white rounded-[12px]
            text-[15px] font-semibold tracking-[-0.01em]
            transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            hover:bg-[#E5A000] active:scale-[0.98]
            focus:outline-none focus:ring-2 focus:ring-[#E5A000] focus:ring-offset-2"
          aria-label={`${name} 장바구니 담기`}
        >
          <ShoppingCart size={18} strokeWidth={2} />
          장바구니 담기
        </button>
      </div>
    </article>
  );
}
