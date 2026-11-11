"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { Place } from "@/data/teaching";

const TeachingMap = dynamic(() => import("./TeachingMap"), {
  ssr: false,
  loading: () => <div className="map-fallback">Loading map…</div>,
});

const LEGEND: { kind: Place["kind"]; label: string }[] = [
  { kind: "current", label: "Teaching now" },
  { kind: "teaching", label: "Taught" },
  { kind: "training", label: "Training" },
  { kind: "education", label: "Studied" },
];

export function MapSection({ places, title = "Where I teach & have taught" }: { places: Place[]; title?: string }) {
  const [selected, setSelected] = useState<string | undefined>();
  const [near, setNear] = useState(false);
  const canvas = useRef<HTMLDivElement>(null);

  // Load Leaflet (~150 KB) only when the map is about to scroll into view.
  useEffect(() => {
    const el = canvas.current;
    if (!el || !("IntersectionObserver" in window)) {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="card map-shell">
      <div ref={canvas} className="map-canvas" role="region" aria-label="Interactive map of Morocco showing teaching locations">
        {near ? (
          <TeachingMap places={places} selected={selected} onSelect={(id) => setSelected(id)} />
        ) : (
          <div className="map-fallback">Map</div>
        )}
      </div>
      <aside className="map-side">
        <div className="map-side-head">
          <h2>{title}</h2>
          <div className="legend">
            {LEGEND.filter((l) => places.some((p) => p.kind === l.kind)).map((l) => (
              <span key={l.kind}>
                <i className={`k-${l.kind}`} /> {l.label}
              </span>
            ))}
          </div>
        </div>
        <ul className="place-list">
          {places.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                className="place-btn"
                aria-pressed={selected === p.id}
                onClick={() => {
                  setNear(true);
                  setSelected(p.id);
                }}
              >
                <i className={`k-${p.kind}`} />
                <span>
                  <strong>{p.name}</strong>
                  <span>{p.role}</span>
                  <span className="when">
                    {p.city} · {p.period}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
