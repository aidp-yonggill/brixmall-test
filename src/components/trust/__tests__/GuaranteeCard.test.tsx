import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Droplets } from 'lucide-react';
import GuaranteeCard from '../GuaranteeCard';

describe('GuaranteeCard', () => {
  it('아이콘, 제목, 설명이 모두 렌더링됨', () => {
    render(
      <GuaranteeCard
        icon={Droplets}
        title="당도 보증"
        description="17° 이상 보장"
      />
    );
    expect(screen.getByText('당도 보증')).toBeInTheDocument();
    expect(screen.getByText('17° 이상 보장')).toBeInTheDocument();
  });
});
