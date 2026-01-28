import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Changed from Inter
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" }); // Changed variable name

export const metadata: Metadata = {
    metadataBase: new URL('https://sydney-gold-star.onrender.com'), // Added metadataBase for SEO
    title: {
        template: "%s | Sydney Gold Star Group",
        default: "Painters & Decorators Sydney | Residential & Commercial | Sydney Gold Star Group",
    },
    icons: {
        icon: '/images/Logos/logo.png', // Fallback to logo if no specific favicon.ico
        // shortcut: '/favicon.ico', 
    },
    description: "Professional painters and decorators in Sydney & Central Coast. Residential, Commercial, Roof Painting & Deck Staining. Licensed, Insured, and Satisfaction Guaranteed.",
    keywords: ["Painters Sydney", "Painters Central Coast", "Painters Near Me", "Commercial Painters", "House Painters", "Roof Painting Sydney", "Deck Staining", "Painting and Decoration"],
    authors: [{ name: "Sydney Gold Star Group" }],
    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://sydneygs.com",
        title: "Painters Sydney | Residential & Commercial | Sydney Gold Star Group",
        description: "Professional painters in Sydney & Central Coast. Residential, Commercial, Roof Painting & Deck Staining.",
        siteName: "Sydney Gold Star Group",
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
        "@type": "LocalBusiness", // More specific than ProfessionalService
        "name": "Sydney Gold Star Group Pty Ltd",
        "description": "Premier residential and commercial painters in Sydney. We specialize in house painting, strata painting, roof restoration, and deck staining.",
        "image": "https://sydneygs.com/images/Logos/logo.png",
        "@id": "https://sydneygs.com",
        "url": "https://sydneygs.com",
        "telephone": "0493332306", // Updated phone
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
