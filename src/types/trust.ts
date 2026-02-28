import type { LucideIcon } from 'lucide-react';

export interface GuaranteeItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
