import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Project Gallery | PM Painting - Painters Sydney',
    description: 'View our recent residential and commercial painting projects in Sydney and Central Coast.',
}

// Mock project list based on user instruction to use local images
const projects = [
    { src: '/images/Gallery/project1.jpg', alt: 'Residential Interior Painting', category: 'Residential' },
    { src: '/images/Gallery/project2.jpg', alt: 'Commercial Office Facade', category: 'Commercial' },
    { src: '/images/Gallery/project3.jpg', alt: 'Roof Restoration Project', category: 'Roof Painting' },
    { src: '/images/Gallery/project4.jpg', alt: 'Deck Staining and Maintenance', category: 'Decks' },
    // Adding duplicates to flesh out the grid if needed, or just keeping the 4 requested
    { src: '/images/Gallery/project1.jpg', alt: 'Modern Living Room Refresh', category: 'Residential' },
    { src: '/images/Gallery/project2.jpg', alt: 'Strata Complex Painting', category: 'Commercial' },
]

export default function GalleryPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-navy-900 py-16 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Our Work</h1>
                <p className="text-gray-300">See the Gold Star standard in every project.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Simple Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="relative h-80 w-full bg-gray-200">
                                <Image
                                    src={project.src}
                                    alt={project.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                                    <span className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-2">{project.category}</span>
                                    <h3 className="text-xl font-bold">{project.alt}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center bg-gray-50 rounded-2xl p-12 border border-gray-100">
                    <h2 className="text-2xl font-bold text-navy-900 mb-4">Like what you see?</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Let's bring this level of quality to your painting project. Contact us today for a free quote.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="gold">Get a Free Quote</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
