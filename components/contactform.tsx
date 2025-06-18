"use client"
import React from 'react'
import { useForm } from '@formspree/react'
import { CheckCircle } from 'lucide-react';
export default function ContactForm() {
    const [state, handleSubmit] = useForm("xayzonpa");
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Send a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            placeholder="your.email@example.com"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="What's this about?"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                        placeholder="Tell me about your project or just say hello!"
                    />
                </div>
                {state.succeeded && (
                    <p className="text-green-500 flex justify-center items-center gap-2 font-bold">
                        Message sent successfully! <CheckCircle className="w-4 h-4" />
                    </p>
                )}
                <button
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                    type="submit"
                    disabled={state.submitting}>
                    {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    )
}
