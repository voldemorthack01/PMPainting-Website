import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Residential Painting & Decoration Sydney | PM Painting",
    description: "Expert residential painters and decorators in Sydney & Central Coast. Interior and exterior house painting services. Call 0493 332 306 for a free quote.",
};

export default function ResidentialPaintingPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-navy-900">
                <Image
                    src="/images/Gallery/project1.jpg"
                    alt="Residential Painting Sydney"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-60"
                    priority
                />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-gold-400 font-bold uppercase tracking-widest text-sm mb-4">
                        <Star className="w-4 h-4 fill-gold-400" />
                        <span>Home Transformations</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                        Residential Painting & Decoration
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Bringing life to your home with premium finishes and attention to detail. Serving Sydney to the Central Coast.
                    </p>
                    <Link href="/contact">
                        <Button className="h-14 px-8 text-lg bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold">
                            Get a Free Quote
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-navy-900 mb-6">Expert House Painters Near You</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Your home is your sanctuary, and at PM Painting, we treat it with the respect it deserves. We provide comprehensive <strong className="text-navy-900">painting and decoration services</strong> for interiors and exteriors across Sydney, the Central Coast, and all suburbs in between.
                            </p>
                            <p>
                                Whether you need to freshen up a single room or completely transform your property's façade, our team of licensed professionals delivers a flawless finish using high-quality, durable paints.
                            </p>
                            <ul className="space-y-3 mt-6">
                                {[
                                    "Interior Painting & Decorating",
                                    "Exterior Texture Coatings",
                                    "Colour Consultation",
                                    "Feature Walls & Wallpapering",
                                    "Heritage Restoration"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-medium text-navy-800">
                                        <CheckCircle2 className="w-5 h-5 text-gold-400" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                        <Image
                            src="/images/Gallery/project4.jpg"
                            alt="Interior House Painting"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
