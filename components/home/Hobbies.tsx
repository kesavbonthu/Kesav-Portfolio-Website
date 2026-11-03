"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, CookingPot, Footprints, Mountain } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { hobbyPhotos } from "@/data/hobbies";
import { assetPath } from "@/lib/asset-path";

const hobbies = [
  { label: "Running", icon: Footprints, color: "#f97316" },
  { label: "Photography", icon: Camera, color: "#a78bfa" },
  { label: "Cooking", icon: CookingPot, color: "#10b981" },
  { label: "Hiking", icon: Mountain, color: "#38bdf8" },
];

export default function Hobbies() {
  const gallery = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const reducedMotion = useReducedMotion();
  const photo = hobbyPhotos[active];
  const playing = !reducedMotion;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    if (gallery.current) observer.observe(gallery.current);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    onVisibility();
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);

  useEffect(() => {
    if (!playing || !visible || !pageVisible || hobbyPhotos.length < 2) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % hobbyPhotos.length), 5000);
    return () => window.clearInterval(timer);
  }, [playing, visible, pageVisible]);

  useEffect(() => {
    if (!visible || hobbyPhotos.length < 2) return;
    const next = new Image();
    next.src = assetPath(hobbyPhotos[(active + 1) % hobbyPhotos.length].src);
  }, [active, visible]);

  return (
    <section id="hobbies" aria-labelledby="hobbies-heading" className="mb-8 border-b border-[color:var(--portfolio-border)] pb-8">
      <h2 id="hobbies-heading" className="mono-label mb-4 text-[color:var(--portfolio-muted)]">Hobbies</h2>
      <ul className="flex flex-wrap gap-3">
        {hobbies.map(({ label, icon: Icon, color }) => (
          <li key={label} className="flex items-center gap-3 rounded-xl border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-panel)] px-4 py-3 text-sm font-medium">
            <span className="rounded-lg p-2" style={{ backgroundColor: `${color}20` }}><Icon size={19} style={{ color }} aria-hidden="true" /></span>
            {label}
          </li>
        ))}
      </ul>
      {photo && (
        <div ref={gallery} role="region" aria-roledescription="carousel" aria-label="Photography" className="mt-6 overflow-hidden rounded-2xl border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-panel)]">
          <div className="relative h-[340px] overflow-hidden bg-[#090d14] sm:h-[460px]">
            <AnimatePresence initial={false}>
              {[-2, -1, 0, 1, 2].map((offset) => {
                const item = hobbyPhotos[(active + offset + hobbyPhotos.length) % hobbyPhotos.length];
                const centered = offset === 0;
                return (
                  <motion.div key={item.src}
                    initial={{ x: `${offset * 100}%`, scale: 0.9, opacity: 0 }}
                    animate={{ x: `${offset * 100}%`, scale: centered ? 1 : 0.9, opacity: centered ? 1 : 0.45 }}
                    exit={{ x: "-324%", scale: 0.9, opacity: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 1.25, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden={!centered}
                    className="absolute inset-y-6 left-[18%] w-[64%] overflow-hidden rounded-xl border border-white/10 bg-[#111722] shadow-2xl sm:inset-y-8">
                    <img src={assetPath(item.src)} alt="" aria-hidden="true" width={item.width} height={item.height} loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-xl" />
                    <div className="relative h-full w-full">
                      <img src={assetPath(item.src)} alt={centered ? item.alt : ""} width={item.width} height={item.height} loading="lazy" decoding="async" className={`h-full w-full ${centered ? "object-contain" : "object-cover"}`} />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-[#090d14] to-transparent" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-[#090d14] to-transparent" />
          </div>
          <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
            <div aria-live={playing ? "off" : "polite"} aria-atomic="true" className="min-w-0">
              <p className="text-sm font-medium">{photo.caption}</p>
              <p className="mt-1 text-xs text-[color:var(--portfolio-muted)]">{String(active + 1).padStart(2, "0")} / {hobbyPhotos.length} · Photography</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
