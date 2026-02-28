import type { LucideIcon } from 'lucide-react';

interface GuaranteeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function GuaranteeCard({ icon: Icon, title, description }: GuaranteeCardProps) {
  return (
    <div className="bg-white rounded-[20px] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(229,160,0,0.12)]">
        <Icon size={32} strokeWidth={1.75} className="text-[#E5A000]" />
      </div>
      <h3 className="text-lg font-bold text-[#111] tracking-[-0.02em] mb-2">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-[#888] tracking-[-0.01em]">
        {description}
      </p>
    </div>
  );
}
