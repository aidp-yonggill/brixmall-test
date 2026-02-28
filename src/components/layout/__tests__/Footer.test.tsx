import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../Footer';

describe('Footer', () => {
  it('회사 정보가 표시됨', () => {
    render(<Footer />);
    expect(screen.getByText('브릭스몰')).toBeInTheDocument();
    expect(screen.getByText('서울시 강남구 테헤란로 123')).toBeInTheDocument();
    expect(screen.getByText(/123-45-67890/)).toBeInTheDocument();
    expect(screen.getByText(/홍길동/)).toBeInTheDocument();
  });

  it('고객 지원 정보가 표시됨', () => {
    render(<Footer />);
    expect(screen.getByText('고객 지원')).toBeInTheDocument();
    expect(screen.getByText('1588-0000')).toBeInTheDocument();
    expect(screen.getByText('support@brixmall.com')).toBeInTheDocument();
  });

  it('소셜 미디어 링크가 hover:text-orange-400 클래스를 포함함', () => {
    render(<Footer />);
    const instagramLink = screen.getByLabelText('Instagram');
    expect(instagramLink).toHaveClass('hover:text-orange-400');
  });

  it('모든 소셜 미디어 링크가 표시됨', () => {
    render(<Footer />);
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument();
  });

  it('저작권 표시가 있음', () => {
    render(<Footer />);
    expect(screen.getByText('© 2024 브릭스몰. All rights reserved.')).toBeInTheDocument();
  });
});
