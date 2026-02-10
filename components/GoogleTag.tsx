"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleTag() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (link && typeof window.gtag === "function") {
        e.preventDefault();
        const url = link.href;
        const callback = () => {
          window.location.href = url;
        };
        window.gtag("event", "conversion", {
          send_to: "AW-17660879589/C_MrCPX-rPYbEOXFruVB",
          value: 1.0,
          currency: "RSD",
          event_callback: callback,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17660879589"
        strategy="afterInteractive"
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17660879589');
        `}
      </Script>
    </>
  );
}
