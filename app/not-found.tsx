"use client"

import React from 'react'
import Link from 'next/link'
import { NavigationMenu } from "@/components/navigation-menu"
import { Button } from "@/components/ui/button"
import { Home, ArrowRight } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950">
            <NavigationMenu />
            
            <div className="pt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                            Oh, you like to explore huh?
                        </h1>
                        
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            This page doesn't exist, but you can explore my portfolio below
                        </p>

                        <div className="flex items-center justify-center gap-4 pt-4">
                            <Button asChild className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white">
                                <Link href="/" className="flex items-center">
                                    <Home className="w-4 h-4 mr-2" />
                                    Back to Home
                                </Link>
                            </Button>
                            
                            <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                                <Link href="/blog" className="flex items-center">
                                    Explore Blog
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
