import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
    title: 'About PM Painting | Professional Painters Sydney',
    description: 'Learn about our family legacy, 10+ years of experience, and commitment to quality painting services in Sydney.',
}

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-navy-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story & Values</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        More than just painters. We are a family of craftsmen dedicated to transforming your world.
                    </p>
                </div>
            </div>

            {/* Brand Story */}
            <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 relative h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                        {/* Use gallery image placeholder, ideally about-us.jpg */}
                        <div className="absolute inset-0 bg-navy-100 flex items-center justify-center text-navy-300">
                            <Image
                                src="/images/Gallery/project1.jpg" // Fallback to a project image if specific about image missing
                                alt="PM Painting Team"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900">A Gold Star Finish, Every Time.</h2>
                        <div className="w-20 h-1 bg-gold-500 rounded-full"></div>

                        <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                            <p>
                                At PM Painting, <strong>Painting and Decoration</strong> is more than a trade—it’s a family legacy.
                                Founded on the principles of honesty, precision, and hard work, we have grown from a local
                                father-and-son team into one of Sydney’s most trusted painting groups.
                            </p>
                            <p>
                                We understand that inviting a tradesperson into your home requires trust. That is why we treat
                                every property as if it were our own—covering furniture, preparing surfaces meticulously,
                                and leaving your space spotless.
                            </p>
                            <p>
                                Whether it's a single bedroom or a commercial strata complex, from Sydney to the Central Coast (and everywhere in between),
                                our promise remains the same: a Gold Star finish, every time.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center gap-3">
                                <div className="bg-navy-50 p-2 rounded-full text-navy-900"><Award className="w-5 h-5" /></div>
                                <span className="font-semibold text-gray-800">Family Owned</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-navy-50 p-2 rounded-full text-navy-900"><Users className="w-5 h-5" /></div>
                                <span className="font-semibold text-gray-800">Trusted Team</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW SEO SECTION FOR ABOUT (Requested "Take this to about page") */}
            <div className="bg-white py-16 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-navy-900 mb-8">Our Painting & Decoration Process</h2>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-left">
                        <p>
                            We are proud to be the premier <strong>painters near you</strong> in Sydney and the Central Coast. Our detailed process ensures every project meets the highest standards of durability and aesthetics.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Preparation:</strong> The most critical step. We wash, sand, and prime surfaces to ensure perfect adhesion.</li>
                            <li><strong>Decoration:</strong> Beyond just paint, we offer colour consulting and decoration advice to enhance your property's value.</li>
                            <li><strong>Execution:</strong> Using premium paints and tools, we apply coatings efficiently and cleanly.</li>
                        </ul>
                        <p>
                            From <strong>Sydney</strong> to the <strong>Central Coast</strong>, including all suburbs along the way, our licensed team is ready to deliver excellence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-navy-900 mb-4">Meet The Team</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        Our team of qualified professionals brings passion and expertise to every stroke.
                    </p>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mb-6">
                                <Users className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy-900">Over 10 Years of Combined Experience</h3>
                            <p className="text-gray-600 mt-4 leading-relaxed">
                                Our team consists of fully licensed and insured painters and decorators who have honed their craft over a decade.
                                We don't use subcontractors for our core work—you get the Gold Star team payment, personally invested in your project's success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
