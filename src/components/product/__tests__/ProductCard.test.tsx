import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductCard, { formatPrice } from '../ProductCard';
import type { Product } from '../../../types/product';

const mockProduct: Product = {
  id: 'strawberry',
  name: '프리미엄 딸기',
  brix: 14,
  price: 29900,
  originalPrice: 39900,
  image: '/images/strawberry.png',
  alt: '신선한 프리미엄 딸기 클로즈업',
  description: '산지 직송 고당도 딸기',
};

const mockProductNoDiscount: Product = {
  id: 'watermelon',
  name: '프리미엄 수박',
  brix: 12,
  price: 24900,
  image: '/images/watermelon.png',
  alt: '신선한 빨간 과육의 수박 단면',
};

describe('formatPrice', () => {
  it('formats number as Korean Won currency', () => {
    expect(formatPrice(29900)).toBe('29,900원');
  });

  it('formats large number correctly', () => {
    expect(formatPrice(1000000)).toBe('1,000,000원');
  });

  it('formats zero', () => {
    expect(formatPrice(0)).toBe('0원');
  });
});

describe('ProductCard', () => {
  it('renders product name', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('프리미엄 딸기')).toBeInTheDocument();
  });

  it('renders product description', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('산지 직송 고당도 딸기')).toBeInTheDocument();
  });

  it('renders Brix badge with correct value', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('14°Bx')).toBeInTheDocument();
  });

  it('renders formatted price', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('29,900원')).toBeInTheDocument();
  });

  it('renders original price with line-through when discount exists', () => {
    render(<ProductCard product={mockProduct} />);
    const originalPriceEl = screen.getByText('39,900원');
    expect(originalPriceEl).toBeInTheDocument();
    expect(originalPriceEl).toHaveClass('line-through');
  });

  it('renders discount percentage badge', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('-25%')).toBeInTheDocument();
  });

  it('does not render original price or discount when no discount', () => {
    render(<ProductCard product={mockProductNoDiscount} />);
    expect(screen.queryByText(/-\d+%/)).not.toBeInTheDocument();
  });

  it('renders image with correct alt text', () => {
    render(<ProductCard product={mockProduct} />);
    const img = screen.getByAltText('신선한 프리미엄 딸기 클로즈업');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/images/strawberry.png');
  });

  it('renders add to cart button', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByRole('button', { name: /장바구니 담기/ })).toBeInTheDocument();
  });

  it('calls onAddToCart when button is clicked', () => {
    const onAddToCart = vi.fn();
    render(<ProductCard product={mockProduct} onAddToCart={onAddToCart} />);
    fireEvent.click(screen.getByRole('button', { name: /장바구니 담기/ }));
    expect(onAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  it('has accessible Brix aria-label', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByLabelText('당도 14 브릭스')).toBeInTheDocument();
  });
});
