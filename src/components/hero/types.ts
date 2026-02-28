import type { ReactNode } from 'react';

export interface StatsBadgeProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}
