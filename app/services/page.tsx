import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Shield, Palette, Clock, Award, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Painting Services | Residential, Commercial & Strata | Sydney Gold Star',
    description: 'Full range of painting services: Interior, Exterior, Commercial, Roof Restoration, and Deck Maintenance used premium paints.',
}

export default function ServicesPage() {
    const services = [
        {
            title: "Residential Painting",
            subtitle: "Interior House Painting & Exterior Protection",
            desc: "Transform your home with a fresh look. We handle everything from single walls to full exterior render painting.",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
            link: "/services/residential-painting"
        },
        {
            title: "Commercial Painting",
            subtitle: "Commercial Strata Painting & Office Maintenance",
            desc: "Scalable solutions for businesses. We work after-hours to minimize disruption to your operations.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
            link: "/services/commercial-painting"
        },
        {
            title: "Roof Painting",
            subtitle: "Roof & Deck Restoration",
            desc: "Protect your roof from the elements with heat-reflective coatings and comprehensive cleaning.",
            image: "/images/Gallery/project5.jpg",
            link: "/services/roof-painting"
        },
        {
            title: "General Maintenance",
            subtitle: "Deck Staining & Pressure Cleaning",
            desc: "Keep your property looking its best with our scheduled maintenance and cleaning services.",
            image: "/images/Gallery/project2.jpg",
            link: "/services/deck-staining"
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-navy-900 py-20 text-center text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Professional solutions tailored to your unique needs across Sydney and the Central Coast.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow relative">
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 bg-white flex-1 flex flex-col">
                                <h2 className="text-2xl font-bold text-navy-900 mb-2">{service.title}</h2>
                                <h3 className="text-sm text-navy-900 font-semibold mb-4 tracking-wide uppercase">{service.subtitle}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                                    {service.desc}
                                </p>
                                <Link href={service.link} className="inline-flex items-center font-semibold text-navy-900 hover:text-gold-600 before:absolute before:inset-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 rounded-2xl">
                                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-navy-900">Why Choose Sydney Gold Star?</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Licensed & Insured", desc: "Fully qualified for your protection" },
                            { icon: Palette, title: "Premium Materials", desc: "We use only the best paints like Dulux & Taubmans" },
                            { icon: Clock, title: "On-Time Guarantee", desc: "We respect your time and stick to the schedule" },
                            { icon: CheckCircle2, title: "Free Consultation", desc: "Expert color advice included with every quote" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                                <div className="w-14 h-14 bg-navy-900 text-gold-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-navy-900 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-6">Start Your Project Today</h2>
                <Link href="/contact">
                    <Button size="lg" variant="gold">Request Free Quote</Button>
                </Link>
            </section>
        </div>
    )
}
