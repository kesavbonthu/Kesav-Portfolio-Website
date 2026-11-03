"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, CookingPot, Footprints, Mountain, X, ChevronLeft, ChevronRight, Pause, Play, Maximize2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { hobbyPhotos, type HobbyPhoto } from "@/data/hobbies";
import { assetPath } from "@/lib/asset-path";

const hobbies = [
  { label: "Running", icon: Footprints, color: "#f97316" },
  { label: "Photography", icon: Camera, color: "#a78bfa" },
  { label: "Cooking", icon: CookingPot, color: "#10b981" },
  { label: "Hiking", icon: Mountain, color: "#38bdf8" },
];

export default function Hobbies() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<HobbyPhoto | null>(null);

  const gallery = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const reducedMotion = useReducedMotion();
  const photo = hobbyPhotos[active];
  const playing = !paused && !reducedMotion;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    if (gallery.current) observer.observe(gallery.current);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    onVisibility();
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);

  useEffect(() => {
    if (!playing || !visible || !pageVisible || interacting || selected || hobbyPhotos.length < 2) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % hobbyPhotos.length), 5000);
    return () => window.clearInterval(timer);
  }, [playing, visible, pageVisible, interacting, selected]);

  function navigate(index: number) {
    setPaused(true);
    setActive((index + hobbyPhotos.length) % hobbyPhotos.length);
  }

  function openPhoto(photo: HobbyPhoto) {
    setSelected(photo);
    dialog.current?.showModal();
  }

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
        <div ref={gallery} role="region" aria-roledescription="carousel" aria-label="Photography" className="mt-6 overflow-hidden rounded-2xl border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-panel)]"
          onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
          onFocusCapture={() => setInteracting(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") { event.preventDefault(); navigate(active + 1); }
            if (event.key === "ArrowLeft") { event.preventDefault(); navigate(active - 1); }
          }}>
          <div className="relative h-[360px] bg-[#090d14] sm:h-[480px]">
            <AnimatePresence initial={false}>
              <motion.button key={photo.src} type="button" onClick={() => openPhoto(photo)}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.8 }}
                aria-label={`Enlarge photo: ${photo.caption}`} className="absolute inset-0 h-full w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white">
                <img src={assetPath(photo.src)} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="h-full w-full object-contain" />
              </motion.button>
            </AnimatePresence>
            <span aria-hidden="true" className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white"><Maximize2 size={16} /></span>
          </div>
          <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
            <div aria-live={playing ? "off" : "polite"} aria-atomic="true" className="min-w-0">
              <p className="text-sm font-medium">{photo.caption}</p>
              <p className="mt-1 text-xs text-[color:var(--portfolio-muted)]">{String(active + 1).padStart(2, "0")} / {hobbyPhotos.length} · Photography</p>
            </div>
            <div className="flex shrink-0 gap-1">
              <button type="button" aria-label="Previous photo" onClick={() => navigate(active - 1)} className="rounded-full border border-[color:var(--portfolio-border)] p-3 hover:bg-[color:var(--portfolio-paper)]"><ChevronLeft size={18} /></button>
              {!reducedMotion && <button type="button" aria-label={paused ? "Play slideshow" : "Pause slideshow"} onClick={() => setPaused(!paused)} className="rounded-full border border-[color:var(--portfolio-border)] p-3 hover:bg-[color:var(--portfolio-paper)]">{paused ? <Play size={18} /> : <Pause size={18} />}</button>}
              <button type="button" aria-label="Next photo" onClick={() => navigate(active + 1)} className="rounded-full border border-[color:var(--portfolio-border)] p-3 hover:bg-[color:var(--portfolio-paper)]"><ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto px-4 pb-4 sm:px-6" aria-label="Choose a photo">
            {hobbyPhotos.map((item, index) => (
              <button key={item.src} type="button" aria-label={`Show photo ${index + 1}: ${item.caption}`} aria-pressed={index === active}
                onClick={() => navigate(index)} className={`shrink-0 overflow-hidden rounded-lg border-2 p-0.5 transition-opacity ${index === active ? "border-violet-400 opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}>
                <img src={assetPath(item.thumbnail)} alt="" width={80} height={60} loading="lazy" className="h-[60px] w-20 rounded object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
      <dialog ref={dialog} onClose={() => setSelected(null)} aria-label="Photo viewer" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} className="fixed inset-0 m-auto max-h-[90dvh] w-[min(94vw,64rem)] overflow-auto rounded-2xl border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-paper)] p-4 text-[color:var(--portfolio-ink)] backdrop:bg-black/80">
        <div className="mb-3 flex justify-end"><button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close photo" className="rounded-lg p-3 hover:bg-[color:var(--portfolio-panel)]"><X size={20} /></button></div>
        {selected && <figure><img src={assetPath(selected.src)} alt={selected.alt} width={selected.width} height={selected.height} className="max-h-[68dvh] w-full object-contain" /><figcaption className="mt-3 text-center text-sm">{selected.caption}</figcaption></figure>}
      </dialog>
    </section>
  );
}
