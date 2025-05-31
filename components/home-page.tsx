"use client"

import Image from "next/image"
import { ArrowRight, ExternalLink, Github, Mail, MapPin, Calendar, Coffee, Star, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { usePortfolio } from "@/components/portfolio-provider"
import { Loading, ErrorMessage } from "@/components/loading"
import Link from "next/link"

export function HomePage() {
  const { portfolioData, isLoading, error } = usePortfolio()

  if (isLoading) {
    return <Loading />
  }

  if (error || !portfolioData?.data) {
    return <ErrorMessage message={error || "Failed to load portfolio data"} />
  }

  const { personal, skills, projects, experience, blog, stats } = portfolioData.data
  console.log("Personal data:", personal)
  console.log("Image URL:", personal.image)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-violet-400 font-medium">Hello, I'm</p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">{personal.name}</h1>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    {personal.title}
                  </h2>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">{personal.bio}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                >
                  <Link href="mailto:piyushdev.developer@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-slate-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{stats.experience} years experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4" />
                  <span>Available for work</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 border border-slate-700/50 backdrop-blur-sm">
                <Image
                  src={personal.image || "https://avatars.githubusercontent.com/thedevpiyush"}
                  alt={personal.name}
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              I'm all about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Mission",
                description: personal.philosophy,
              },
              {
                icon: "💡",
                title: "Approach",
                description:
                  "I believe in writing clean, maintainable code and creating user-centric experiences that solve real problems.",
              },
              {
                icon: "🚀",
                title: "Goals",
                description:
                  "Continuously learning and exploring new technologies while mentoring others and contributing to the developer community.",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Technologies I work with to build robust and scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...new Set(skills.map((skill: any) => skill.category))].map((category: any) => (
              <Card key={category} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills
                      .filter((skill: any) => skill.category === category)
                      .slice(0, 4)
                      .map((skill: any) => (
                        <div key={skill.name} className="flex items-center justify-between">
                          <span className="text-slate-300 text-sm">{skill.name.split(" ")[0]}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-slate-700 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                            <span className="text-xs text-slate-400">{skill.level}%</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I've used to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((project: any) => project.featured)
              .map((project: any, index: number) => (
                <Card key={project.id} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  <div className="aspect-video relative bg-slate-700/50">
                    <Image
                      src={project.image_url || "/placeholder.svg?height=300&width=500"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-violet-600/20 text-violet-400 border-violet-500/30">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <CardTitle className="text-white">{project.title}</CardTitle>
                      <CardDescription className="text-slate-300 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech: any) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-slate-700/50 text-slate-300 border-slate-600/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-3 pt-2">
                        {project.links.github && (
                          <Button asChild variant="ghost" size="sm" className="text-slate-400 hover:text-white p-0">
                            <Link href={project.links.github} target="_blank">
                              <Github className="w-4 h-4" />
                              Code
                            </Link>
                          </Button>
                        )}
                        {project.links.live && (
                          <Button asChild variant="ghost" size="sm" className="text-slate-400 hover:text-white p-0">
                            <Link href={project.links.live} target="_blank">
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
              <Link href="/projects" className="flex items-center">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Thoughts on web development, programming best practices, and lessons learned
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blog.slice(0, 3).map((post: any) => (
              <Card key={post.id} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">{new Date(post.publishDate).toLocaleDateString()}</span>
                    <span className="text-sm text-slate-400">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-white line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 line-clamp-3 mb-4">{post.excerpt}</CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag: any) => (
                      <Badge key={tag} variant="outline" className="text-xs border-slate-700 text-slate-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="text-violet-400 hover:text-violet-300 p-0 h-auto">
                    <Link href={`/blog/${post.id}`} className="flex items-center">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Work Together</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                I'm always excited to discuss new opportunities and collaborate on interesting projects.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-violet-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <Link href="mailto:piyushdev.developer@gmail.com">
                    <p className="text-slate-300 line-clamp-1 text-xs hover:text-violet-400">{personal.email}</p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-violet-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Location</h3>
                  <p className="text-slate-300 text-xs">{personal.location}</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Coffee className="w-8 h-8 text-violet-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Status</h3>
                  <p className="text-slate-300 text-xs">Available for work</p>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
            >
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
