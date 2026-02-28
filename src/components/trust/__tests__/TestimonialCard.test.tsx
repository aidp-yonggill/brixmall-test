import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TestimonialCard from '../TestimonialCard';

describe('TestimonialCard', () => {
  const mockTestimonial = {
    name: '김영희',
    rating: 5,
    comment: '딸기가 정말 달아요!',
    avatar: '/test-avatar.jpg',
    date: '2024-01-15',
  };

  it('후기 정보가 올바르게 표시됨', () => {
    render(<TestimonialCard testimonial={mockTestimonial} />);
    expect(screen.getByText('김영희')).toBeInTheDocument();
    expect(screen.getByText('딸기가 정말 달아요!')).toBeInTheDocument();
    expect(screen.getByText('2024-01-15')).toBeInTheDocument();
  });

  it('별점 컴포넌트가 올바른 rating과 함께 렌더링됨', () => {
    render(<TestimonialCard testimonial={mockTestimonial} />);
    expect(screen.getByLabelText('5점 만점에 5점')).toBeInTheDocument();
  });

  it('프로필 이미지가 올바르게 표시됨', () => {
    render(<TestimonialCard testimonial={mockTestimonial} />);
    const img = screen.getByAltText('김영희 프로필');
    expect(img).toHaveAttribute('src', '/test-avatar.jpg');
  });
});
