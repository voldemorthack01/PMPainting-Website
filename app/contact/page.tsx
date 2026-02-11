import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | PM Painting - Painters Sydney',
    description: 'Contact PM Painting for a free painting quote. Call 0493 332 306. Serving Sydney, Penrith, Central Coast, and Parramatta.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-navy-900 py-16 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-300">Ready to transform your space? We're here to help.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Right Side: Contact Form (Moved First) */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">Send us a Message</h3>
                        <ContactForm />
                    </div>

                    {/* Left Side: Contact Details (Moved Second) */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Ready to transform your space? Contact PM Painting today for a free, no-obligation quote.
                                We respond to all inquiries within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-gold-500/10 p-3 rounded-lg text-gold-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-900">Phone</h3>
                                    <a href="tel:0493332306" className="text-lg text-gray-700 hover:text-gold-600 font-medium">
                                        0493 332 306
                                    </a>
                                    <p className="text-sm text-gray-500 mt-1">Mon - Sat: 7am - 5pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-gold-500/10 p-3 rounded-lg text-gold-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-900">Email</h3>
                                    <a href="mailto:info@sydneygs.com" className="text-lg text-gray-700 hover:text-gold-600">
                                        info@sydneygs.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-gold-500/10 p-3 rounded-lg text-gold-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-900">Service Areas</h3>
                                    <p className="text-gray-700">
                                        All of Sydney, The Central Coast & In-Between.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 bg-gray-100 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center">
                            <iframe
                                title="Sydney Service Area"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.1030232467!2d150.65178526563604!3d-33.84740398642233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1703498144675!5m2!1sen!2sau"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
