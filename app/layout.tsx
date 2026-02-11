import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Changed from Inter
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" }); // Changed variable name

export const metadata: Metadata = {
    metadataBase: new URL('https://pmpainting.com.au'), // Assuming new domain or keeping old for now? User didn't specify. Keeping relative or updating name. Let's update Name.
    title: {
        template: "%s | PM Painting",
        default: "Painters & Decorators Sydney | PM Painting",
    },
    icons: {
        icon: '/images/favicon/favicon.ico',
        shortcut: '/images/favicon/favicon.ico',
        apple: '/images/favicon/apple-touch-icon.png',
        other: [
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                url: '/images/favicon/favicon-16x16.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/images/favicon/favicon-32x32.png',
            },
        ],
    },
    manifest: '/images/favicon/site.webmanifest',
    description: "PM Painting: Sydney's premier painting and decoration services. Residential, Commercial, Strata, and more. Paint. Maintain.",
    keywords: ["PM Painting", "Painters Sydney", "Painters Central Coast", "Commercial Painters", "House Painters", "Roofs", "Decks"],
    authors: [{ name: "PM Painting" }],
    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://pmpainting.com.au", // Placeholder, or keep existing if domain check needed.
        title: "PM Painting | Sydney's Premier Painters",
        description: "Professional painting services in Sydney & Central Coast. Paint. Maintain.",
        siteName: "PM Painting",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // JSON-LD Schema for Local Business (Enhanced)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "PM Painting",
        "description": "Premier residential and commercial painters in Sydney. We specialize in house painting, strata painting, roof restoration, and deck staining.",
        "image": "https://sydneygs.com/Logos/Logo.png", // Updated path
        "@id": "https://sydneygs.com",
        "url": "https://sydneygs.com",
        "telephone": "0493332306",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sydney",
            "addressRegion": "NSW",
            "addressCountry": "AU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -33.8688,
            "longitude": 151.2093
        },
        "areaServed": [
            { "@type": "City", "name": "Sydney" },
            { "@type": "City", "name": "Central Coast" },
            { "@type": "City", "name": "Penrith" },
            { "@type": "City", "name": "Gosford" },
            { "@type": "City", "name": "Hornsby" },
            { "@type": "City", "name": "Parramatta" }
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "07:00",
                "closes": "17:00"
            }
        ]
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${outfit.variable} font-sans antialiased min-h-screen flex flex-col`}>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
