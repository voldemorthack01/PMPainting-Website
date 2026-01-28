'use client'

import { useFormState } from 'react-dom'
import { loginAction } from '@/app/actions'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const initialState = {
    success: false,
    message: ''
}

export default function AdminLoginPage() {
    const [state, formAction] = useFormState(loginAction, initialState)
    const router = useRouter()

    useEffect(() => {
        if (state.success) {
            router.push('/admin/dashboard')
        }
    }, [state.success, router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-navy-900">Admin Login</h1>
                    <p className="text-gray-500 mt-2">Enter credentials to access dashboard</p>
                </div>

                <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                        />
                    </div>

                    {state.message && (
                        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center font-medium">
                            {state.message}
                        </div>
                    )}

                    <Button type="submit" className="w-full bg-navy-900 text-white hover:bg-navy-800">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}
