export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.slepsluzba-kobra.rs/#business",
        "name": "Slep Služba Kobra",
        "image": "https://www.slepsluzba-kobra.rs/android-chrome-512x512.png",
        "telephone": "062-814-2131",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Beograd",
          "addressCountry": "RS"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 44.8176,
          "longitude": 20.4633
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [],
        "areaServed": [
          {
            "@type": "City",
            "name": "Zemun"
          },
          {
            "@type": "City",
            "name": "Surčin"
          },
          {
            "@type": "City",
            "name": "Novi Beograd"
          },
          {
            "@type": "City",
            "name": "Dušanovac"
          },
          {
            "@type": "City",
            "name": "Žarkovo"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Usluge Slepanja",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Slepanje Putničkih Vozila",
                "description": "Profesionalno slepanje putničkih automobila svih marki i modela"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Transport Havarisanih Vozila",
                "description": "Transport havarisanih vozila sa mesta nezgode do servisa"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pomoć na Putu 24/7",
                "description": "Pomoć na putu dostupna 24 sata dnevno, 7 dana u nedelji"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.slepsluzba-kobra.rs/#website",
        "url": "https://www.slepsluzba-kobra.rs/",
        "name": "Slep Služba Kobra Beograd",
        "description": "Profesionalna slep služba u Beogradu dostupna 24/7",
        "publisher": {
          "@id": "https://www.slepsluzba-kobra.rs/#business"
        },
        "inLanguage": "sr"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
