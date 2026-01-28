import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import db from '@/lib/db';
import { logoutAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { LogOut, Inbox } from 'lucide-react';

export default function AdminDashboardPage() {
    const cookieStore = cookies();
    const session = cookieStore.get('admin_session');

    if (!session || session.value !== 'true') {
        redirect('/admin');
    }

    // Fetch messages from DB
    const messages = db.prepare('SELECT * FROM messages ORDER BY id DESC').all() as any[];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-navy-900 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Inbox className="w-6 h-6 text-gold-400" />
                        <h1 className="text-xl font-bold">Admin Dashboard</h1>
                    </div>
                    <form action={logoutAction}>
                        <Button variant="ghost" className="text-white hover:text-gold-400 hover:bg-navy-800">
                            <LogOut className="w-4 h-4 mr-2" /> Logout
                        </Button>
                    </form>
                </div>
            </header>

            <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="border-b border-gray-100 p-6 flex items-center justify-between bg-white">
                        <h2 className="text-xl font-bold text-navy-900">Recent Messages</h2>
                        <span className="bg-navy-50 text-navy-900 px-3 py-1 rounded-full text-sm font-medium">
                            {messages.length} Total
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {messages.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            No messages found.
                                        </td>
                                    </tr>
                                ) : (
                                    messages.map((msg) => (
                                        <tr key={msg.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(msg.date).toLocaleDateString()} <br />
                                                <span className="text-xs text-gray-400">{new Date(msg.date).toLocaleTimeString()}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy-900">
                                                {msg.name}
                                                <div className="text-xs font-normal text-gray-500">{msg.suburb || 'No suburb'}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                <div className="font-medium">{msg.phone}</div>
                                                {/* Email wasnt in DB schema requirement but good to have if extending */}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-navy-900">
                                                <span className="bg-gold-50 text-gold-700 px-2 py-1 rounded text-xs font-medium">
                                                    {msg.service || 'General'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                                                {msg.message}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
