import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Commercial Painting & Decoration Sydney | Strata & Office",
    description: "Reliable commercial painters for offices, strata, and retail in Sydney & Central Coast. Licensed and insured painting and decoration services.",
};

export default function CommercialPaintingPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-navy-900">
                <Image
                    src="/images/Gallery/project2.jpg"
                    alt="Commercial Painting Sydney"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-gold-400 font-bold uppercase tracking-widest text-sm mb-4">
                        <Star className="w-4 h-4 fill-gold-400" />
                        <span>Business Solutions</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                        Commercial Painting & Decoration
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Professional, reliable, and efficient painting services for businesses across Sydney and the Central Coast.
                    </p>
                    <Link href="/contact">
                        <Button className="h-14 px-8 text-lg bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold">
                            Request a Proposal
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-navy-900 mb-6">Strata, Office & Retail Painters</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                First impressions count. PM Painting provides premium <strong className="text-navy-900">commercial painting and decoration</strong> services that minimize downtime and maximize impact. We serve strata managers, office fit-outs, and retail businesses from the Sydney CBD to Gosford.
                            </p>
                            <p>
                                Our team is fully licensed and insured, equipped to handle large-scale projects with strict safety compliance. We use high-performance coatings designed for high-traffic areas.
                            </p>
                            <ul className="space-y-3 mt-6">
                                {[
                                    "Strata Complex Maintenance",
                                    "Office Defits & Make Goods",
                                    "Retail & Showroom Painting",
                                    "Industrial Coatings",
                                    "After-Hours Service Available"
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
                            src="/images/Gallery/project5.jpg" // Assuming project5 exists, otherwise fallback
                            alt="Commercial Office Painting"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
