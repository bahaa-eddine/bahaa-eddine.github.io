import Script from "next/script";

/**
 * Google Analytics 4 (gtag.js), loaded with `lazyOnload`: it starts only after
 * the page has finished loading, so it never slows down the first render.
 * Page views on client-side navigation are tracked automatically by GA4's
 * "Enhanced measurement → Page changes based on browser history events" (on by default).
 */
export function Analytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
      <Script id="ga4-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
