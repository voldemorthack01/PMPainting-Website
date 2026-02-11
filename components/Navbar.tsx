"use client";

import Link from "next/link";
import { Phone, Menu, X, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Simplified navigation
    const links = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="bg-navy-900/95 backdrop-blur-md border-b border-navy-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center group">
                            {/* Logo Placeholder */}
                            <div className="relative h-20 w-20 mr-5 transition-transform group-hover:scale-105">
                                <Image src="/images/Logos/Logo-V4.png" alt="PM Painting Logo" fill className="object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-gold-400 tracking-tight transition-colors">PM PAINTING</span>
                                <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">PAINT. MAINTAIN.</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-semibold transition-colors uppercase tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="tel:0493332306">
                            <Button className="ml-4 flex gap-2 bg-gold-400 text-navy-900 hover:bg-gold-500 font-bold border-2 border-gold-400 hover:border-gold-500">
                                <Phone className="w-4 h-4" />
                                0493 332 306
                            </Button>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gold-400 hover:text-white hover:bg-navy-800 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-navy-900 border-t border-navy-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="tel:0493332306" className="block w-full mt-4 bg-gold-400 text-navy-900 text-center py-3 font-bold rounded uppercase tracking-wider">
                            Call Now: 0493 332 306
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
