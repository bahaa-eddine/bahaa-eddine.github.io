"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useMemo, useRef } from "react";
import { useTheme } from "next-themes";
import type { Place } from "@/data/teaching";

const COLORS: Record<Place["kind"], string> = {
  current: "#1f8a5b",
  teaching: "#2f4bd8",
  training: "#c9621b",
  education: "#8b8f9c",
};

function pinIcon(kind: Place["kind"], active: boolean) {
  const c = COLORS[kind];
  const big = kind === "current" || active;
  const pulse = kind === "current" || active ? `<span class="pulse" style="background:${c}"></span>` : "";
  return L.divIcon({
    className: "",
    html: `<div class="pin${big ? " big" : ""}">${pulse}<span class="core" style="background:${c}"></span></div>`,
    iconSize: big ? [26, 26] : [18, 18],
    iconAnchor: big ? [13, 13] : [9, 9],
    popupAnchor: [0, -12],
  });
}

function FlyTo({ place }: { place?: Place }) {
  const map = useMap();
  useEffect(() => {
    if (place) map.flyTo(place.coords, 9, { duration: 1.2 });
  }, [place, map]);
  return null;
}

function FitAll({ places }: { places: Place[] }) {
  const map = useMap();
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    map.fitBounds(L.latLngBounds(places.map((p) => p.coords)).pad(0.35), { animate: false });
  }, [map, places]);
  return null;
}

export default function TeachingMap({
  places,
  selected,
  onSelect,
}: {
  places: Place[];
  selected?: string;
  onSelect: (id: string) => void;
}) {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  const markerRefs = useRef<Record<string, L.Marker | null>>({});
  const current = useMemo(() => places.find((p) => p.id === selected), [places, selected]);

  useEffect(() => {
    if (selected) markerRefs.current[selected]?.openPopup();
  }, [selected]);

  return (
    <MapContainer
      center={[33.2, -6.6]}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      attributionControl
    >
      {/* Standard OSM tiles (no API key). Dark mode is a CSS filter on the tile pane, see globals.css */}
      <TileLayer
        key={dark ? "dark" : "light"}
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={18}
        detectRetina
        className={dark ? "tiles-dark" : "tiles-light"}
      />
      <FitAll places={places} />
      <FlyTo place={current} />
      {places.map((p) => (
        <Marker
          key={p.id}
          position={p.coords}
          icon={pinIcon(p.kind, p.id === selected)}
          title={`${p.name}, ${p.city}`}
          alt={`${p.name}, ${p.city}`}
          ref={(m) => {
            markerRefs.current[p.id] = m;
          }}
          eventHandlers={{ click: () => onSelect(p.id) }}
          zIndexOffset={p.kind === "current" ? 1000 : 0}
        >
          <Popup>
            <strong>{p.name}</strong>
            <br />
            {p.city} · {p.period}
            <br />
            <span style={{ color: "var(--muted)" }}>{p.role}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
