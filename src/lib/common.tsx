import { motion, useReducedMotion, animate } from 'framer-motion';
import { useEffect, useState, type ReactNode, type CSSProperties } from 'react';

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Появление при показе слайда (слайд монтируется заново — анимация каждый раз) */
export function In({ children, d = 0, y = 22, style, className }: { children: ReactNode; d?: number; y?: number; style?: CSSProperties; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} style={style}
      initial={reduce ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 + d, ease: EASE }}>
      {children}
    </motion.div>
  );
}

export function Counter({ to, dur = 1.6, delay = 0.2, format }: { to: number; dur?: number; delay?: number; format: (n: number) => string }) {
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);
  useEffect(() => {
    if (reduce) { setV(to); return; }
    const c = animate(0, to, { duration: dur, delay, ease: [0.22, 1, 0.36, 1], onUpdate: setV });
    return () => c.stop();
  }, [to, dur, delay, reduce]);
  return <>{format(v)}</>;
}

/** Плавно догоняющее значение — для слайдеров */
export function useSmooth(target: number) {
  const [v, setV] = useState(target);
  useEffect(() => {
    const c = animate(v, target, { duration: 0.5, ease: [0.22, 1, 0.36, 1], onUpdate: setV });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return v;
}

export function Head({ eyebrow, title, lead, light }: { eyebrow: string; title: ReactNode; lead?: ReactNode; light?: boolean }) {
  return (
    <div style={{ marginBottom: 34 }} className={light ? 'dark-slide' : ''}>
      <In><div className="eyebrow">{eyebrow}</div></In>
      <In d={0.05}><h2 className="h-lg" style={{ marginTop: 12 }}>{title}</h2></In>
      {lead && <In d={0.1}><p className="lead">{lead}</p></In>}
    </div>
  );
}
