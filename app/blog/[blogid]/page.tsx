"use client"

import Image from "next/image"
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react"
import { NavigationMenu } from "@/components/navigation-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { usePortfolio } from "@/components/portfolio-provider"
import { Loading, ErrorMessage } from "@/components/loading"
import Link from "next/link"
import { useParams } from "next/navigation"
import type { BlogPost } from "@/lib/data/portfolio"

export default function BlogPostPage() {
    const { portfolioData, isLoading, error } = usePortfolio()
    const params = useParams()
    const blogId = params.blogid as string

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-950">
                <NavigationMenu />
                <div className="pt-16">
                    <Loading />
                </div>
            </div>
        )
    }

    if (error || !portfolioData?.data) {
        return (
            <div className="min-h-screen bg-slate-950">
                <NavigationMenu />
                <div className="pt-16">
                    <ErrorMessage message={error || "Failed to load portfolio data"} />
                </div>
            </div>
        )
    }

    const { blog } = portfolioData.data
    const post = blog.find((p: BlogPost) => p.id === blogId)

    if (!post) {
        return (
            <div className="min-h-screen bg-slate-950">
                <NavigationMenu />
                <div className="pt-16">
                    <ErrorMessage message="Blog post not found" />
                </div>
            </div>
        )
    }
    else {
        console.log(post)
    }

    return (
        <div className="min-h-screen bg-slate-950">
            <NavigationMenu />

            <div className="pt-16">
                {/* Back Button */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Link href="/blog">
                        <Button variant="ghost" className="text-slate-400 hover:text-white">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>

                {/* Blog Post Header */}
                <section className="py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <Badge className="bg-violet-600/20 text-violet-400 border-violet-500/30">
                                    {post.featured ? "Featured" : "Article"}
                                </Badge>
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">{post.title}</h1>

                            <div className="flex items-center space-x-4 text-slate-400">
                                <div className="flex items-center space-x-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag: string) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="bg-slate-700/50 text-slate-300 border-slate-600/50"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Image */}
                <section className="py-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                                src={post.image_url || "/placeholder.svg?height=400&width=800"}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Blog Content */}
                <section className="py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                            <CardContent className="p-8">
                                <div className="prose prose-invert max-w-none">
                                    <div className="text-white" dangerouslySetInnerHTML={{ __html: post.content }} />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    )
}
