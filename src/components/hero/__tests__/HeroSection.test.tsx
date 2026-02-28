import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from '../HeroSection';
import Navigation from '../Navigation';
import HeroContent from '../HeroContent';
import StatsBadge from '../StatsBadge';
import { Star } from 'lucide-react';

describe('HeroSection', () => {
  it('renders the hero section as a full-screen element', () => {
    const { container } = render(<HeroSection />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    expect(section?.className).toContain('h-screen');
  });

  it('renders hero background image', () => {
    const { container } = render(<HeroSection />);
    const section = container.querySelector('section');
    expect(section?.style.backgroundImage).toContain('hero-fruit.jpg');
  });

  it('renders dark overlay with correct opacity', () => {
    const { container } = render(<HeroSection />);
    const overlay = container.querySelector('.bg-black\\/40');
    expect(overlay).toBeInTheDocument();
  });

  it('renders all three stats badges', () => {
    render(<HeroSection />);
    expect(screen.getByText('15°Bx+')).toBeInTheDocument();
    expect(screen.getByText('당도 보증')).toBeInTheDocument();
    expect(screen.getByText('24시간')).toBeInTheDocument();
    expect(screen.getByText('수확 후 배송')).toBeInTheDocument();
    expect(screen.getByText('99%')).toBeInTheDocument();
    expect(screen.getByText('고객 만족도')).toBeInTheDocument();
  });
});

describe('Navigation', () => {
  it('renders the logo with home link', () => {
    render(<Navigation />);
    const logoLink = screen.getByText('BrixMall').closest('a');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink?.getAttribute('href')).toBe('#');
  });

  it('renders navigation links', () => {
    render(<Navigation />);
    expect(screen.getByText('소개')).toBeInTheDocument();
    expect(screen.getByText('상품')).toBeInTheDocument();
    expect(screen.getByText('후기')).toBeInTheDocument();
    expect(screen.getByText('문의')).toBeInTheDocument();
  });

  it('toggles mobile menu on hamburger click', () => {
    render(<Navigation />);
    const hamburger = screen.getByLabelText('메뉴 열기/닫기');
    expect(hamburger).toBeInTheDocument();

    // Initially mobile menu is not shown (only desktop links)
    const links = screen.getAllByText('소개');
    expect(links.length).toBe(1); // Only desktop

    // Click hamburger to open
    fireEvent.click(hamburger);
    const linksAfter = screen.getAllByText('소개');
    expect(linksAfter.length).toBe(2); // Desktop + mobile
  });

  it('changes style on scroll', () => {
    const { container } = render(<Navigation />);
    const nav = container.querySelector('nav');
    expect(nav?.className).toContain('bg-transparent');

    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 200, writable: true });
    fireEvent.scroll(window);

    expect(nav?.className).toContain('backdrop-blur');
  });
});

describe('HeroContent', () => {
  it('renders headline text', () => {
    render(<HeroContent />);
    expect(screen.getByText(/당도 보증,/)).toBeInTheDocument();
    expect(screen.getByText('프리미엄')).toBeInTheDocument();
  });

  it('renders subcopy text', () => {
    render(<HeroContent />);
    expect(screen.getByText(/15°Bx 이상 당도 보증으로/)).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<HeroContent />);
    const ctaButton = screen.getByText('프리미엄 과일 보기');
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.tagName).toBe('BUTTON');
  });

  it('CTA button scrolls to products section on click', () => {
    // Create a mock products section
    const productsDiv = document.createElement('div');
    productsDiv.id = 'products';
    productsDiv.scrollIntoView = vi.fn();
    document.body.appendChild(productsDiv);

    render(<HeroContent />);
    const ctaButton = screen.getByText('프리미엄 과일 보기');
    fireEvent.click(ctaButton);

    expect(productsDiv.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });

    document.body.removeChild(productsDiv);
  });
});

describe('StatsBadge', () => {
  it('renders with icon, value, and label', () => {
    render(
      <StatsBadge
        icon={<Star data-testid="star-icon" />}
        value="99%"
        label="고객 만족도"
      />
    );
    expect(screen.getByTestId('star-icon')).toBeInTheDocument();
    expect(screen.getByText('99%')).toBeInTheDocument();
    expect(screen.getByText('고객 만족도')).toBeInTheDocument();
  });
});
