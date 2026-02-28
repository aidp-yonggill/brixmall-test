import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StarRating from '../StarRating';

describe('StarRating', () => {
  it('5점 만점에 4점일 때 꽉 찬 별 4개, 빈 별 1개 렌더링', () => {
    render(<StarRating rating={4} />);
    const filledStars = screen.getAllByLabelText(/filled/i);
    const emptyStars = screen.getAllByLabelText(/empty/i);
    expect(filledStars).toHaveLength(4);
    expect(emptyStars).toHaveLength(1);
  });

  it('5점 만점에 5점일 때 꽉 찬 별 5개 렌더링', () => {
    render(<StarRating rating={5} />);
    const filledStars = screen.getAllByLabelText(/filled/i);
    expect(filledStars).toHaveLength(5);
  });

  it('접근성 라벨이 올바르게 설정됨', () => {
    render(<StarRating rating={3.5} />);
    expect(screen.getByLabelText('5점 만점에 3.5점')).toBeInTheDocument();
  });

  it('size prop에 따라 렌더링됨', () => {
    const { container } = render(<StarRating rating={3} size="lg" />);
    expect(container.querySelector('[role="img"]')).toBeInTheDocument();
  });
});
