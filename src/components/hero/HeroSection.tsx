import Navigation from './Navigation';
import HeroContent from './HeroContent';
import StatsBadge from './StatsBadge';
import { Gauge, Leaf, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[600px] flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/hero-fruit.jpg')`,
      }}
    >
      {/* Dark overlay — rgba(0,0,0,0.4) as per AC-2 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Subtle gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Navigation */}
      <Navigation />

      {/* Main content — vertically centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-5 md:px-6">
        <HeroContent />
      </div>

      {/* Stats badges — bottom */}
      <div className="relative z-10 w-full pb-10 md:pb-12 px-5 md:px-6">
        <div className="mx-auto max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsBadge
            icon={<Gauge size={28} strokeWidth={1.75} />}
            value="15°Bx+"
            label="당도 보증"
          />
          <StatsBadge
            icon={<Leaf size={28} strokeWidth={1.75} />}
            value="24시간"
            label="수확 후 배송"
          />
          <StatsBadge
            icon={<Star size={28} strokeWidth={1.75} />}
            value="99%"
            label="고객 만족도"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 opacity-60">
        <div className="w-5 h-8 rounded-full border-2 border-white/50 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
