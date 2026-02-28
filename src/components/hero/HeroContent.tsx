export default function HeroContent() {
  const handleCTAClick = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="text-center opacity-0 animate-fade-in">
      {/* Eyebrow label */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-[12px] border border-white/20 rounded-full px-5 py-2 mb-8 opacity-0 animate-fade-in-delay-1">
        <span className="w-2 h-2 rounded-full bg-[#E5A000] animate-pulse" />
        <span className="text-[13px] font-medium text-white/90 tracking-normal">
          지금 시즌 과일 입고 완료
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-[clamp(32px,5vw,48px)] font-[800] text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] leading-[1.15] tracking-[-0.02em] opacity-0 animate-fade-in-delay-1">
        당도 보증,{' '}
        <br className="md:hidden" />
        <span className="text-[#E5A000]">프리미엄</span> 과일
      </h1>

      {/* Subcopy */}
      <p className="text-[clamp(16px,2vw,20px)] text-white/85 mb-10 max-w-[600px] mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] leading-relaxed tracking-[-0.01em] opacity-0 animate-fade-in-delay-2">
        15°Bx 이상 당도 보증으로{' '}
        <br className="md:hidden" />
        달콤함이 다른 과일을 경험하세요
      </p>

      {/* CTA Button */}
      <button
        onClick={handleCTAClick}
        className="opacity-0 animate-fade-in-delay-3 bg-[#E5A000] hover:bg-[#CC8E00] text-white font-semibold text-[15px] h-[52px] px-8 rounded-[16px] transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(229,160,0,0.4)] active:scale-[0.98] active:shadow-[0_1px_4px_rgba(229,160,0,0.25)] cursor-pointer"
      >
        프리미엄 과일 보기
      </button>
    </div>
  );
}
