import { RedirectPage, redirectMeta } from "@/components/Redirect";

// Old site route → new About page
export const metadata = redirectMeta("/about");

export default function Resume() {
  return <RedirectPage to="/about" label="About" />;
}
