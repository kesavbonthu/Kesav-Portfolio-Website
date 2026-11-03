"use client";

import { useRef, useState } from "react";
import { Camera, CookingPot, Footprints, Mountain, X } from "lucide-react";
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
      {hobbyPhotos.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hobbyPhotos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-xl border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-panel)]">
              <button type="button" onClick={() => openPhoto(photo)} aria-label={`Enlarge photo: ${photo.caption || photo.alt}`} className="group block w-full cursor-zoom-in overflow-hidden">
                <img src={assetPath(photo.src)} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105" />
              </button>
              {photo.caption && <figcaption className="px-4 py-3 text-sm text-[color:var(--portfolio-muted)]">{photo.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
      <dialog ref={dialog} aria-label="Photo viewer" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} className="fixed inset-0 m-auto max-h-[90dvh] w-[min(94vw,64rem)] overflow-auto rounded-2xl border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-paper)] p-4 text-[color:var(--portfolio-ink)] backdrop:bg-black/80">
        <div className="mb-3 flex justify-end"><button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close photo" className="rounded-lg p-3 hover:bg-[color:var(--portfolio-panel)]"><X size={20} /></button></div>
        {selected && <figure><img src={assetPath(selected.src)} alt={selected.alt} width={selected.width} height={selected.height} className="max-h-[68dvh] w-full object-contain" /><figcaption className="mt-3 text-center text-sm">{selected.caption}</figcaption></figure>}
      </dialog>
    </section>
  );
}
