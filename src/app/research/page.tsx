import { RedirectPage, redirectMeta } from "@/components/Redirect";

// Old site route → new Publications page
export const metadata = redirectMeta("/publications");

export default function Research() {
  return <RedirectPage to="/publications" label="Publications" />;
}
