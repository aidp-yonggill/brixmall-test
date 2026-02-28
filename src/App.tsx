import HeroSection from './components/hero/HeroSection';

function App() {
  return (
    <div className="font-sans">
      <HeroSection />

      {/* Products section placeholder — scroll target for CTA */}
      <section
        id="products"
        className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-5 md:px-6"
      >
        <div className="text-center">
          <h2 className="text-[clamp(24px,3vw,28px)] font-bold text-[#111] tracking-[-0.02em] mb-4">
            프리미엄 과일 컬렉션
          </h2>
          <p className="text-[15px] text-[#888] leading-relaxed tracking-[-0.01em]">
            곧 다양한 프리미엄 과일이 준비됩니다.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
