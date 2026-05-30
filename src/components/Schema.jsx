import React from 'react';

const Schema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gauthammaneck.com/#business",
        "name": "Gautham Maneck - Jewelry Designer",
        "description": "Custom jewelry design, sourcing, and manufacturing. Gold, diamonds, color stones, and silver jewelry crafted with personal attention.",
        "url": "https://gauthammaneck.com",
        "telephone": "+917506262812",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "+917506262812",
          "url": "https://wa.me/917506262812"
        },
        "sameAs": [
          "https://wa.me/917506262812"
        ],
        "image": {
          "@type": "ImageObject",
          "url": "https://gauthammaneck.com/logo.png",
          "width": 300,
          "height": 300
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://gauthammaneck.com/#website",
        "url": "https://gauthammaneck.com",
        "name": "Gautham Maneck Jewelry",
        "description": "Bespoke jewelry design and manufacturing"
      },
      {
        "@type": "Organization",
        "@id": "https://gauthammaneck.com/#organization",
        "name": "Gautham Maneck",
        "url": "https://gauthammaneck.com",
        "logo": "https://gauthammaneck.com/logo.png",
        "sameAs": [
          "https://wa.me/917506262812"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "telephone": "+917506262812"
        }
      },
      {
        "@type": "Service",
        "@id": "https://gauthammaneck.com/#jewelry-design",
        "name": "Jewelry Design",
        "description": "Custom jewelry design services for diamonds, gold, color stones, and silver.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Gautham Maneck"
        }
      },
      {
        "@type": "Service",
        "@id": "https://gauthammaneck.com/#sourcing",
        "name": "Material Sourcing",
        "description": "Personal sourcing and selection of gold, diamonds, color stones, and silver.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Gautham Maneck"
        }
      },
      {
        "@type": "Service",
        "@id": "https://gauthammaneck.com/#manufacturing",
        "name": "Jewelry Manufacturing",
        "description": "Expert jewelry manufacturing and craftsmanship.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Gautham Maneck"
        }
      },
      {
        "@type": "Service",
        "@id": "https://gauthammaneck.com/#visual-consultant",
        "name": "Visual Consultant",
        "description": "Professional visual consultation for jewelry design and selection.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Gautham Maneck"
        }
      },
      {
        "@type": "Product",
        "@id": "https://gauthammaneck.com/#bracelet",
        "name": "Diamond Bracelet",
        "description": "Custom diamond bracelet with personalized design.",
        "image": "https://gauthammaneck.com/hero_img1.jpeg",
        "brand": {
          "@type": "Brand",
          "name": "Gautham Maneck"
        }
      },
      {
        "@type": "Product",
        "@id": "https://gauthammaneck.com/#pendant",
        "name": "Pearl Pendant",
        "description": "Elegant pearl pendant with custom design.",
        "image": "https://gauthammaneck.com/hero_img2.jpeg",
        "brand": {
          "@type": "Brand",
          "name": "Gautham Maneck"
        }
      },
      {
        "@type": "Product",
        "@id": "https://gauthammaneck.com/#earrings",
        "name": "Diamond Earrings",
        "description": "Stunning diamond earrings crafted with precision.",
        "image": "https://gauthammaneck.com/hero_img3.jpeg",
        "brand": {
          "@type": "Brand",
          "name": "Gautham Maneck"
        }
      },
      {
        "@type": "Product",
        "@id": "https://gauthammaneck.com/#necklace",
        "name": "Emerald Necklace",
        "description": "Exquisite emerald necklace with custom design.",
        "image": "https://gauthammaneck.com/hero_img4.jpeg",
        "brand": {
          "@type": "Brand",
          "name": "Gautham Maneck"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default Schema;