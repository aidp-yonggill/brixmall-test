import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TrustSection from '../TrustSection';

describe('TrustSection', () => {
  it('3개 보증 카드가 모두 렌더링됨', () => {
    render(<TrustSection />);
    expect(screen.getByText('당도 17° 이상 보장')).toBeInTheDocument();
    expect(screen.getByText('24시간 신선 배송')).toBeInTheDocument();
    expect(screen.getByText('100% 만족 보증')).toBeInTheDocument();
  });

  it('guarantee-grid data-testid가 존재함', () => {
    render(<TrustSection />);
    const grid = screen.getByTestId('guarantee-grid');
    expect(grid).toBeInTheDocument();
  });

  it('섹션 제목이 표시됨', () => {
    render(<TrustSection />);
    expect(screen.getByText('브릭스몰의 당도 보증 약속')).toBeInTheDocument();
  });
});
