"use client";

import { ArrowUpRight, Clock, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ME, doiUrl, pubTypeLabel, type PubType, type Publication } from "@/data/publications";

type Filter = "all" | PubType;

function Authors({ list }: { list: string[] }) {
  return (
    <p className="authors">
      {list.map((a, i) => (
        <span key={a + i}>
          {a === ME ? <strong>{a}</strong> : a}
          {i < list.length - 1 ? (list[i + 1] === "et al." ? " " : ", ") : ""}
        </span>
      ))}
    </p>
  );
}

function badgeClass(b: string) {
  return b === "Q1" ? "badge badge-q1" : b === "Q2" ? "badge" : "badge badge-warm";
}

export function PublicationExplorer({ items }: { items: Publication[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [q, setQ] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: items.length };
    for (const p of items) c[p.type] = (c[p.type] ?? 0) + 1;
    return c;
  }, [items]);

  const groups = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const filtered = items.filter(
      (p) =>
        (filter === "all" || p.type === filter) &&
        (!needle || [p.title, p.venue, p.details, ...p.authors].join(" ").toLowerCase().includes(needle)),
    );
    const map = new Map<string, Publication[]>();
    for (const p of filtered) {
      const k = String(p.year);
      map.set(k, [...(map.get(k) ?? []), p]);
    }
    return [...map.entries()].sort(([a], [b]) => (a === "In press" ? -1 : b === "In press" ? 1 : Number(b) - Number(a)));
  }, [items, filter, q]);

  const tabs: Filter[] = ["all", "journal", "chapter", "conference", "other"];
  // Changing the key re-mounts the list so the CSS fade-in replays on every filter change.
  const listKey = `${filter}|${q}`;

  return (
    <div>
      <div className="pub-toolbar">
        <div className="filters" role="group" aria-label="Filter by type">
          {tabs.map((t) => (
            <button key={t} type="button" className="filter-btn" aria-pressed={filter === t} onClick={() => setFilter(t)}>
              <span>
                {t === "all" ? "All" : `${pubTypeLabel[t]}s`}
                <span className="n">{counts[t] ?? 0}</span>
              </span>
            </button>
          ))}
        </div>
        <label className="search">
          <Search aria-hidden />
          <span className="sr-only">Search publications</span>
          <input type="search" placeholder="Search title, venue, co-author…" value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
      </div>

      <div key={listKey} className="pub-list">
        {groups.map(([year, pubs]) => (
          <section key={year} className="year-block" aria-labelledby={`y-${year}`}>
            <h2 id={`y-${year}`} className="year-label">{year}</h2>
            <div>
              {pubs.map((p) => (
                <article key={p.title} className="card card-hover pub">
                  <div>
                    <div className="pub-meta">
                      <span className="chip" style={{ fontSize: 11.5, padding: "2px 8px" }}>{pubTypeLabel[p.type]}</span>
                      {p.badges?.map((b) => (
                        <span key={b} className={badgeClass(b)}>{b}</span>
                      ))}
                    </div>
                    <h3>
                      {p.doi ? (
                        <a href={doiUrl(p.doi)} target="_blank" rel="noopener noreferrer">{p.title}</a>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <Authors list={p.authors} />
                    <p className="venue">{p.venue}</p>
                    {p.details && <p className="details">{p.details}</p>}
                  </div>
                  {p.doi ? (
                    <a className="pub-link" href={doiUrl(p.doi)} target="_blank" rel="noopener noreferrer" aria-label={`Open “${p.title}” via DOI`}>
                      DOI <ArrowUpRight aria-hidden />
                    </a>
                  ) : (
                    <span className="pub-link disabled">
                      <Clock aria-hidden /> In press
                    </span>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
        {groups.length === 0 && <p className="empty">No publication matches “{q}”.</p>}
      </div>
    </div>
  );
}
