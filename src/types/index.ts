// src/types/index.ts

export interface NavItem {
  id: number;
  title: string;
  path: string;
}

export interface HeroProps {
  videoUrl?: string;
  forwardDuration?: number;
}

export interface NavbarProps {
  isScrolled?: boolean;
}