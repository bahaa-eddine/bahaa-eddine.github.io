/**
 * Scroll-reveal primitives rendered on the server (zero JS per element).
 * <RevealObserver/> in the layout adds the `in` class when they enter the
 * viewport; CSS in globals.css does the animation. Without JS, everything
 * is simply visible (the hidden state only applies under `html.js`).
 */
import type { CSSProperties, ReactNode } from "react";

type Tag = "div" | "section" | "li" | "article";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: Tag;
};

export function Reveal({ children, delay = 0, y, className, as: Comp = "div" }: RevealProps) {
  const style = { "--rd": `${delay}s`, ...(y !== undefined ? { "--ry": `${y}px` } : {}) } as CSSProperties;
  return (
    <Comp data-reveal="" className={className} style={style}>
      {children}
    </Comp>
  );
}

/** Children marked with <RevealItem> animate in one after another. */
export function Stagger({ children, className, gap = 0.07 }: { children: ReactNode; className?: string; gap?: number }) {
  return (
    <div data-stagger={gap} className={className}>
      {children}
    </div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div data-reveal="" className={className}>
      {children}
    </div>
  );
}
