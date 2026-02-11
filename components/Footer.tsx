import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gold-500">PM <span className="text-white">Painting</span></h3>
                        <p className="text-sm leading-relaxed">
                            Professional painting and decoration services for residential and commercial properties across Sydney and Central Coast. Quality you can trust.
                        </p>
                        <div className="flex space-x-4">
                            {/* Facebook Icon (SVG) */}
                            <a href="#" className="hover:text-gold-500 text-white transition-colors">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="w-5 h-5"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>

                            {/* Instagram Icon (SVG) */}
                            <a href="#" className="hover:text-gold-500 text-white transition-colors">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="w-5 h-5"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gold-500">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-gold-500">Services</Link></li>
                            <li><Link href="/gallery" className="hover:text-gold-500">Gallery</Link></li>
                            <li><Link href="/blog" className="hover:text-gold-500">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-gold-500">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services/residential-painting" className="hover:text-gold-500">Residential Painting</Link></li>
                            <li><Link href="/services/commercial-painting" className="hover:text-gold-500">Commercial Painting</Link></li>
                            <li><Link href="/services/roof-painting" className="hover:text-gold-500">Roof Painting</Link></li>
                            <li><Link href="/services/deck-staining" className="hover:text-gold-500">Deck Staining</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <span>Sydney to Central Coast (Including all suburbs & towns)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <a href="tel:0493332306" className="hover:text-white">0493 332 306</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <a href="mailto:info@sydneygs.com" className="hover:text-white">info@sydneygs.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-navy-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} PM Painting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
