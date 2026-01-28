'use server'

import { cookies } from 'next/headers'
import db from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function submitMessageAction(prevState: any, formData: FormData) {
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const suburb = formData.get('suburb') as string
    const service = formData.get('service') as string
    const message = formData.get('message') as string

    if (!name || !phone || !message) {
        return { success: false, message: 'Please fill in all required fields.' }
    }

    try {
        const stmt = db.prepare('INSERT INTO messages (name, phone, suburb, service, message, date) VALUES (?, ?, ?, ?, ?, ?)')
        stmt.run(name, phone, suburb, service, message, new Date().toISOString())

        revalidatePath('/admin/dashboard')
        return { success: true, message: 'Message sent successfully!' }
    } catch (error) {
        console.error('Database Error:', error)
        return { success: false, message: 'Failed to send message. Please try again.' }
    }
}

export async function loginAction(prevState: any, formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    // Hardcoded credentials as requested
    if (username === 'Admin' && password === '123') {
        cookies().set('admin_session', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        })
        return { success: true }
    } else {
        return { success: false, message: 'Invalid credentials' }
    }
}

export async function logoutAction() {
    cookies().delete('admin_session')
    redirect('/admin')
}
