import { useState } from 'react';
import ProductCard from './ProductCard';
import { PREMIUM_FRUITS } from '../../data/products';
import type { Product } from '../../types/product';

export default function ProductGrid() {
  const [cartMessage, setCartMessage] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartMessage(`${product.name}이(가) 장바구니에 담겼습니다.`);
    setTimeout(() => setCartMessage(null), 2000);
  };

  return (
    <section
      id="products"
      className="py-20 md:py-24 lg:py-[120px] bg-[#FAFAFA] px-5 md:px-6"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-[rgba(229,160,0,0.12)] text-[#CC8E00] rounded-full text-[13px] font-semibold tracking-[-0.01em] mb-4">
            PREMIUM SELECTION
          </span>
          <h2
            id="products-heading"
            className="text-[clamp(24px,3vw,28px)] font-bold text-[#111] tracking-[-0.02em] mb-3"
          >
            프리미엄 과일 컬렉션
          </h2>
          <p className="text-[15px] text-[#888] leading-relaxed tracking-[-0.01em] max-w-[480px] mx-auto">
            엄선된 농장에서 최적의 당도로 수확한 프리미엄 과일을 만나보세요.
          </p>
        </div>

        {/* Product grid: 1col mobile, 2col tablet, 4col desktop */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          role="list"
          aria-label="프리미엄 과일 상품 목록"
        >
          {PREMIUM_FRUITS.map((product) => (
            <div key={product.id} role="listitem">
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>

        {/* Toast notification for cart */}
        {cartMessage && (
          <div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
              px-6 py-3 bg-[#111] text-white rounded-full
              text-[14px] font-medium shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              animate-[slideUp_0.3s_ease-out]"
            role="status"
            aria-live="polite"
          >
            {cartMessage}
          </div>
        )}
      </div>
    </section>
  );
}
