'use client'

import { useFormState } from 'react-dom'
import { submitMessageAction } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { useEffect, useRef } from 'react'

const initialState = {
    success: false,
    message: ''
}

export default function ContactForm() {
    const [state, formAction] = useFormState(submitMessageAction, initialState)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset()
        }
    }, [state.success])

    return (
        <form ref={formRef} action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="flex h-10 w-full text-black rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="0400 000 000"
                        className="flex h-10 w-full text-black rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="suburb" className="text-sm font-medium text-gray-700">Suburb</label>
                <input
                    type="text"
                    id="suburb"
                    name="suburb"
                    placeholder="e.g. Parramatta"
                    className="flex h-10 w-full text-black rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Required</label>
                <select
                    id="service"
                    name="service"
                    className="flex h-10 w-full rounded-md border text-black border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <option value="">Select a service...</option>
                    <option value="Residential">Residential Painting</option>
                    <option value="Commercial">Commercial Painting</option>
                    <option value="Roof">Roof Restoration</option>
                    <option value="Deck">Deck Staining</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    className="flex min-h-[120px] w-full text-black rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your project..."
                ></textarea>
            </div>

            {state.message && (
                <div className={`p-3 rounded-lg text-center font-medium ${state.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                    {state.message}
                </div>
            )}

            <Button type="submit" className="w-full bg-navy-900 text-white hover:bg-navy-800" size="lg">
                Send Message
            </Button>
        </form>
    )
}
