import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TestimonialsSection from '../TestimonialsSection';

describe('TestimonialsSection', () => {
  it('섹션 제목이 렌더링됨', () => {
    render(<TestimonialsSection />);
    expect(screen.getByText('고객님들의 달콤한 후기')).toBeInTheDocument();
  });

  it('3개 후기가 모두 렌더링됨', () => {
    render(<TestimonialsSection />);
    expect(screen.getByText('김영희')).toBeInTheDocument();
    expect(screen.getByText('박민수')).toBeInTheDocument();
    expect(screen.getByText('이수진')).toBeInTheDocument();
  });

  it('별점이 올바르게 표시됨', () => {
    render(<TestimonialsSection />);
    const ratings = screen.getAllByRole('img');
    expect(ratings.length).toBeGreaterThanOrEqual(3);
  });
});
