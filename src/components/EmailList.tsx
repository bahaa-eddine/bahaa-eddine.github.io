import { Briefcase, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";

/** Academic + professional email addresses, each with what it's for. */
export function EmailList({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`email-list${compact ? " compact" : ""}`}>
      {profile.emails.map((e, i) => {
        const Icon = i === 0 ? GraduationCap : Briefcase;
        return (
          <li key={e.address}>
            <Icon aria-hidden />
            <span>
              <span className="email-label">{e.label}</span>
              <a href={`mailto:${e.address}`}>{e.address}</a>
              {!compact && <span className="email-purpose">{e.purpose}</span>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
