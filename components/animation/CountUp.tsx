"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const element = ref.current;
    const match = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!element || reduced || !match) return;
    const target = Number(match[2].replaceAll(",", ""));
    const decimals = match[2].split(".")[1]?.length || 0;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1000, 1);
        const amount = target * (1 - Math.pow(1 - progress, 3));
        element.textContent = progress === 1 ? value : `${match[1]}${amount.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${match[3]}`;
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); element.textContent = value; };
  }, [value, reduced]);
  return <span className="count-up"><span className="sr-only">{value}</span><span ref={ref} aria-hidden="true">{value}</span></span>;
}
