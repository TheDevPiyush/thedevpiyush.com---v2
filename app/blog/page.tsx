import Image from "next/image"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { NavigationMenu } from "@/components/navigation-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPortfolioData } from "@/lib/data/portfolio"
import type { BlogPost } from "@/lib/data/portfolio"
import Link from "next/link"

// Force revalidation every 60 seconds (1 minute)
export const revalidate = 60

interface Category {
  name: string
  count: number
}

export default async function BlogPage() {
  const portfolioData = await getPortfolioData()

  if (portfolioData.error || !portfolioData.data) {
    return (
      <div className="min-h-screen bg-slate-950">
        <NavigationMenu />
        <div className="pt-16">
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-400 mb-4">Error Loading Portfolio</h1>
              <p className="text-slate-300">{portfolioData.error || "Failed to load portfolio data"}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const { blog } = portfolioData.data
  const featuredPost = blog.find((p: BlogPost) => p.featured)
  const otherPosts = blog.filter((p: BlogPost) => !p.featured)

  const categories: Category[] = [
    { name: "All", count: 25 },
    { name: "React", count: 8 },
    { name: "TypeScript", count: 6 },
    { name: "Node.js", count: 5 },
    { name: "CSS", count: 4 },
    { name: "Architecture", count: 3 },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <NavigationMenu />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Blog & Insights</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Thoughts on web development, programming best practices, and lessons learned from building applications
                at scale. Join me on this journey of continuous learning.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
              </div>

              <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-video lg:aspect-auto">
                    <Image
                      src={featuredPost.image_url || "/placeholder.svg?height=400&width=600"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-violet-600/20 text-violet-400 border-violet-500/30">Featured</Badge>
                      </div>

                      <div className="space-y-4">
                        <CardTitle className="text-2xl lg:text-3xl text-white leading-tight">
                          {featuredPost.title}
                        </CardTitle>
                        <CardDescription className="text-slate-300 text-lg leading-relaxed">
                          {featuredPost.excerpt}
                        </CardDescription>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.map((tag: string) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-slate-700/50 text-slate-300 border-slate-600/50"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{featuredPost.readTime}</span>
                          </div>
                        </div>
                        <Button asChild className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white">
                          <Link href={`/blog/${featuredPost.url}`} className="flex items-center">
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
              <p className="text-slate-300">Dive into my latest thoughts and tutorials on web development.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post: BlogPost, index: number) => (
                <Card
                  key={index}
                  className="group bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 overflow-hidden"
                >
                  <CardHeader className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.image_url || "/placeholder.svg?height=200&width=400"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-slate-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <CardTitle className="text-lg text-white line-clamp-2">
                        {post.title}
                      </CardTitle>

                      <CardDescription className="text-slate-300 line-clamp-3">{post.excerpt}</CardDescription>

                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag: string) => (
                          <Badge key={tag} variant="outline" className="text-xs border-slate-700 text-slate-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="ghost" className="text-violet-400 hover:text-violet-300 p-0 h-auto font-medium">
                        <Link href={`/blog/${post.url}`} className="flex items-center">
                          Read more
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
