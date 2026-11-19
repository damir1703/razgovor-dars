import { motion } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';
import { useStep } from './ctx';

/** Показывает детей начиная с шага n (n=0 — сразу). Место под элемент резервируется, чтобы слайд не прыгал. */
export function Step({ n, children, style, className, as = 'div' }: { n: number; children: ReactNode; style?: CSSProperties; className?: string; as?: 'div' | 'span' }) {
  const step = useStep();
  const on = step >= n;
  const M = as === 'span' ? motion.span : motion.div;
  return (
    <M className={className} style={{ ...style, pointerEvents: on ? undefined : 'none' }}
      initial={false} animate={{ opacity: on ? 1 : 0, y: on ? 0 : 18, filter: on ? 'blur(0px)' : 'blur(6px)' }}
      transition={{ duration: .45, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </M>
  );
}
