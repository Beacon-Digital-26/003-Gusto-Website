import { contact, images, locations, products, site } from "../lib/site-data";

const absolute = (path: string) => new URL(path, site.url).toString();

const organizationId = `${site.url}/#organization`;

function postalAddress(location: (typeof locations)[number]) {
  return {
    "@type": "PostalAddress",
    streetAddress: location.streetAddress,
    addressLocality: location.locality,
    postalCode: location.postalCode,
    addressRegion: "Kedah",
    addressCountry: "MY",
  };
}

const [headquarters, ...branches] = locations;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: site.company,
      alternateName: site.name,
      url: site.url,
      logo: absolute(images.logo),
      email: contact.email,
      telephone: contact.phones.map((phone) => phone.href.replace("tel:", "")),
      address: postalAddress(headquarters),
      brand: { "@type": "Brand", name: site.name },
      sameAs: [site.shopeeUrl, site.instagramUrl],
      contactPoint: contact.phones.map((phone) => ({
        "@type": "ContactPoint",
        telephone: phone.href.replace("tel:", ""),
        contactType: "customer service",
        areaServed: "MY",
        availableLanguage: ["en", "ms"],
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en-MY",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#headquarters`,
      name: `${site.company} (Headquarters & Warehouse)`,
      url: site.url,
      image: absolute(images.aboutRolls),
      telephone: contact.phones[0].href.replace("tel:", ""),
      email: contact.email,
      address: postalAddress(headquarters),
      parentOrganization: { "@id": organizationId },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "17:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:30",
          closes: "13:00",
        },
      ],
    },
    ...branches.map((branch) => ({
      "@type": "LocalBusiness",
      name: `${site.company} (${branch.branch})`,
      url: site.url,
      image: absolute(images.aboutRolls),
      telephone: contact.phones[0].href.replace("tel:", ""),
      address: postalAddress(branch),
      parentOrganization: { "@id": organizationId },
    })),
    {
      "@type": "ProductGroup",
      "@id": `${site.url}/#products`,
      name: "Gusto Pro Heavy Duty Garbage Bag",
      description:
        "3-layer co-extruded heavy duty garbage bag (plastik sampah). Holds up to 35KG, water resistant and leak-proof.",
      url: `${site.url}/#products`,
      image: absolute(images.heroProduct),
      brand: { "@type": "Brand", name: site.name },
      manufacturer: { "@id": organizationId },
      variesBy: "https://schema.org/size",
      hasVariant: products.map((product) => ({
        "@type": "Product",
        name: `Gusto Pro Heavy Duty Garbage Bag - Size ${product.size} (${product.dimensions})`,
        size: product.size,
        description: `Size ${product.size}, ${product.dimensions}, ${product.bagsPerRoll} bags per roll.`,
        ...(product.image && { image: absolute(product.image) }),
        brand: { "@type": "Brand", name: site.name },
      })),
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
