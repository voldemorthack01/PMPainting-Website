/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    ArrowRight,
    Paintbrush,
    Palette,
    Droplets,
    Hammer,
    Sparkles,
    Phone,
    CheckCircle2,
    Star
} from "lucide-react";
import { BeforeAfter } from "@/components/BeforeAfter";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">

            {/* 1. HERO SECTION (Split Layout) */}
            <section className="relative w-full overflow-hidden bg-navy-900 border-b-8 border-gold-400">
                <div className="flex flex-col md:flex-row min-h-[600px]">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 md:py-20 z-10">
                        <div className="mb-6 inline-flex items-center gap-2 text-gold-400 font-bold uppercase tracking-widest text-sm drop-shadow-md">
                            <Star className="w-4 h-4 fill-gold-400" />
                            <span>Sydney's Premier Painting Team</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Transform <br />
                            <span className="text-gold-400">Your Home.</span>
                        </h1>
                        <p className="text-xl text-gray-100 mb-8 max-w-lg leading-relaxed drop-shadow-md">
                            Expert craftsmanship, premium paint, and a flawless finish guaranteed.
                            We treat your home like our own.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                                <Button className="h-14 px-8 text-lg bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold shadow-lg shadow-gold-500/20 w-full sm:w-auto">
                                    Get a Free Quote
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" className="h-14 px-8 text-lg border-2 border-white text-white md:text-navy hover:text-white hover:bg-white/10 w-full sm:w-auto bg-navy-900/50 md:bg-transparent">
                                    View Services
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-gray-200 md:text-gray-400 text-sm font-medium drop-shadow-md">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-gold-400" /> Licensed
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-gold-400" /> Insured
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-gold-400" /> 10+ Years
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <Image
                        src="/images/Gallery/roller.jpg"
                        alt="Professional Painter using a roller"
                        fill
                        className="object-cover opacity-100" // Increased opacity
                        priority
                    />
                    {/* Gradient: Heavy overlay on mobile, gradient on desktop */}
                    <div className="absolute inset-0 bg-navy-900/80 md:bg-gradient-to-r md:from-navy-900 md:via-navy-900/80 md:to-transparent"></div>
                </div>
            </section>

            {/* 3. OUR SERVICES (Grid with Icons) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-navy-900 mb-4">Master Painters & Decorators</h2>
                        <div className="w-24 h-1.5 bg-gold-400 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We specialize in high-end residential and commercial projects across Sydney.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Residential", icon: Paintbrush, href: "/services/residential-painting", desc: "Interior & exterior house painting." },
                            { title: "Commercial", icon: Paintbrush, href: "/services/commercial-painting", desc: "Strata, office & retail solutions." },
                            { title: "Colour Consult", icon: Palette, href: "/services", desc: "Expert advice on modern colour trends." },
                            { title: "Protection", icon: Droplets, href: "/services/roof-painting", desc: "Weatherproof roof & deck coatings." },
                        ].map((service, i) => (
                            <Link href={service.href} key={i} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-navy-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center text-navy-900 mb-6 group-hover:bg-gold-400 group-hover:text-navy-900 transition-colors">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.desc}</p>
                                <div className="flex items-center text-gold-600 font-bold text-sm uppercase tracking-wide group-hover:gap-2 transition-all">
                                    View Service <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE PROCESS Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 transform translate-x-20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-bold text-navy-900 mb-6">The Gold Star Standard</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We don't cut corners. Our 3-step process ensures a finish that lasts for years, not just months.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Meticulous Prep", icon: Hammer, text: "We sand, gap-fill, and prime every surface. The secret to a perfect job is in the preparation." },
                                    { step: "02", title: "Premium Application", icon: Paintbrush, text: "2-3 coats of premium Dulux or Taubmans paint using professional rollers and sprayers." },
                                    { step: "03", title: "Spotless Clean", icon: Sparkles, text: "We vacuum, dust, and move your furniture back. You won't even know we were there." },
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gold-400 flex items-center justify-center font-bold text-gold-500">
                                            {item.step}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <item.icon className="w-5 h-5 text-navy-900" />
                                                <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                                            </div>
                                            <p className="text-gray-600">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <BeforeAfter />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4.5 SEO TEXT SECTION */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-navy-900 mb-8">Professional Painting & Decoration Services You Can Trust</h2>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            At PM Painting, we understand that finding reliable <strong className="text-navy-900">commercial painting and decoration</strong> experts can be a challenge. That's why we bring over a decade of experience to every project, ensuring minimal disruption to your business while delivering a showroom finish. From the heart of Sydney to the Central Coast, and every suburb in between, our team handles it all.
                        </p>
                        <p>
                            For homeowners, we are the trusted <strong className="text-navy-900">painters near you</strong> that residents rely on for total transformation. From colour consultation to the final coat, we ensure your home is treated with the utmost care. We provide comprehensive services across the entire region, ensuring quality finishes for every local suburb.
                        </p>
                        <p>
                            We are fully <strong className="text-navy-900">licensed strata painters</strong> committed to safety and quality compliance. Our rigorous preparation process—including pressure cleaning, sanding, and gap filling—guarantees a long-lasting result that adds real value to your property. Choose the team that puts quality first.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. BIG CTA */}
            <section className="py-20 bg-navy-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to paint your potential?</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Book your free consultation today. No pressure, just expert advice.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:0493332306">
                            <Button className="h-16 px-10 text-xl bg-gold-400 text-navy-900 hover:bg-gold-500 font-bold shadow-xl hover:scale-105 transition-transform w-full sm:w-auto">
                                Call 0493 332 306
                            </Button>
                        </a>
                        <Link href="/contact">
                            <Button variant="outline" className="h-16 px-10 text-xl border-white text-navy hover:text-white hover:bg-white/10 w-full sm:w-auto">
                                Get an Online Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
