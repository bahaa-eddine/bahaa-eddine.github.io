/**
 * Re-mounts on every navigation, so the CSS `page-enter` animation replays.
 * Transform-only: content is never hidden, which keeps LCP fast.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
