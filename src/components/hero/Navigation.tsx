import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavigationLink } from './types';

const navLinks: NavigationLink[] = [
  { label: '소개', href: '#about' },
  { label: '상품', href: '#products' },
  { label: '후기', href: '#reviews' },
  { label: '문의', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-[20px] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
        >
          <img
            src="/images/logo.png"
            alt="BrixMall"
            className="h-10 w-auto"
          />
          <span
            className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-[#111]' : 'text-white'
            }`}
          >
            BrixMall
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-medium text-[15px] tracking-[-0.01em] transition-colors duration-200 ${
                  isScrolled
                    ? 'text-[#333] hover:text-[#E5A000]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-[12px] transition-colors duration-200 ${
            isScrolled
              ? 'text-[#333] hover:bg-black/5'
              : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴 열기/닫기"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-[20px] shadow-[0_4px_6px_rgba(0,0,0,0.04),0_12px_24px_rgba(0,0,0,0.06)] animate-slide-down">
          <ul className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 px-4 rounded-[12px] text-[#333] hover:text-[#E5A000] hover:bg-[rgba(229,160,0,0.08)] font-medium text-[15px] transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
