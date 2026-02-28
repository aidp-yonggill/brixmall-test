import type { StatsBadgeProps } from './types';

export default function StatsBadge({ icon, value, label }: StatsBadgeProps) {
  return (
    <div className="bg-white/10 backdrop-blur-[16px] p-6 rounded-[16px] text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
      <div className="text-white/90 mb-3 flex justify-center">{icon}</div>
      <div className="text-[clamp(24px,3vw,32px)] font-bold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] tracking-tight leading-tight">
        {value}
      </div>
      <div className="text-[13px] text-white/75 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] tracking-normal">
        {label}
      </div>
    </div>
  );
}
