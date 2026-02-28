import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductGrid from '../ProductGrid';

describe('ProductGrid', () => {
  it('renders section heading', () => {
    render(<ProductGrid />);
    expect(screen.getByText('프리미엄 과일 컬렉션')).toBeInTheDocument();
  });

  it('renders all 4 fruit cards', () => {
    render(<ProductGrid />);
    expect(screen.getByText('프리미엄 딸기')).toBeInTheDocument();
    expect(screen.getByText('샤인머스캣')).toBeInTheDocument();
    expect(screen.getByText('프리미엄 수박')).toBeInTheDocument();
    expect(screen.getByText('한라봉')).toBeInTheDocument();
  });

  it('renders 4 add-to-cart buttons', () => {
    render(<ProductGrid />);
    const buttons = screen.getAllByRole('button', { name: /장바구니 담기/ });
    expect(buttons).toHaveLength(4);
  });

  it('renders unique product ids via list items', () => {
    render(<ProductGrid />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
  });

  it('renders product list with accessible role', () => {
    render(<ProductGrid />);
    expect(screen.getByRole('list', { name: '프리미엄 과일 상품 목록' })).toBeInTheDocument();
  });

  it('renders Brix badges for all products', () => {
    render(<ProductGrid />);
    expect(screen.getByText('14°Bx')).toBeInTheDocument();
    expect(screen.getByText('18°Bx')).toBeInTheDocument();
    expect(screen.getByText('12°Bx')).toBeInTheDocument();
    expect(screen.getByText('15°Bx')).toBeInTheDocument();
  });
});
