import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 — Company Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <img
                src="/images/footer-logo.png"
                alt="BrixMall 로고"
                className="h-9 w-auto brightness-0 invert opacity-90"
              />
              <span className="text-white font-bold text-lg tracking-tight">
                브릭스몰
              </span>
            </div>
            <ul className="space-y-3 text-[14px] leading-relaxed">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gray-500" />
                <span>서울시 강남구 테헤란로 123</span>
              </li>
              <li className="text-gray-500">사업자등록번호: 123-45-67890</li>
              <li className="text-gray-500">대표자: 홍길동</li>
            </ul>
          </div>

          {/* Column 2 — Customer Support */}
          <div>
            <h3 className="text-white font-bold text-[15px] tracking-[-0.01em] mb-6">
              고객 지원
            </h3>
            <ul className="space-y-3 text-[14px] leading-relaxed">
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gray-500" />
                <a
                  href="tel:1588-0000"
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  1588-0000
                </a>
              </li>
              <li className="text-gray-500 pl-6">평일 09:00-18:00</li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gray-500" />
                <a
                  href="mailto:support@brixmall.com"
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  support@brixmall.com
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 font-medium"
                >
                  자주 묻는 질문 (FAQ) →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Social Media */}
          <div>
            <h3 className="text-white font-bold text-[15px] tracking-[-0.01em] mb-6">
              소셜 미디어
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-3 text-[14px] hover:text-orange-400 transition-colors duration-200 group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 group-hover:bg-orange-400/10 transition-colors duration-200">
                  <Instagram size={18} />
                </span>
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-3 text-[14px] hover:text-orange-400 transition-colors duration-200 group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 group-hover:bg-orange-400/10 transition-colors duration-200">
                  <Facebook size={18} />
                </span>
                Facebook
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex items-center gap-3 text-[14px] hover:text-orange-400 transition-colors duration-200 group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 group-hover:bg-orange-400/10 transition-colors duration-200">
                  <Youtube size={18} />
                </span>
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 text-center text-[13px] text-gray-500">
          © 2024 브릭스몰. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
