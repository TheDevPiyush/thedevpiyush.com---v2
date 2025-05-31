"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Star } from "lucide-react"
import { NavigationMenu } from "@/components/navigation-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { usePortfolio } from "@/components/portfolio-provider"
import { Loading, ErrorMessage } from "@/components/loading"
import type { Project } from "@/lib/data/portfolio"

export default function ProjectsPage() {
  const { portfolioData, isLoading, error } = usePortfolio()

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

  const { projects } = portfolioData.data
  const featuredProjects = projects.filter((p: Project) => p.featured)
  const otherProjects = projects.filter((p: Project) => !p.featured)

  return (
    <div className="min-h-screen bg-slate-950">
      <NavigationMenu />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">My Projects</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                A collection of projects that showcase my skills in full-stack development, from concept to deployment.
                Each project represents a unique challenge and learning experience.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-slate-300">
                These are some of my most significant projects that demonstrate my expertise and problem-solving
                abilities.
              </p>
            </div>

            <div className="space-y-20">
              {featuredProjects.map((project: Project, index: number) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-violet-400" />
                        <span className="text-sm font-medium text-violet-400">Featured Project</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      <p className="text-lg text-slate-300 leading-relaxed">{project.longDescription}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech: string) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-slate-800/50 text-slate-200 border-slate-700/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-slate-400">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature: string, i: number) => (
                          <li key={i} className="text-slate-300 flex items-start">
                            <span className="text-violet-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project?.stats && <div className="grid grid-cols-2 gap-4 py-4">
                      {Object.entries(project.stats)
                        .slice(0, 4)
                        .map(([key, value]: any) => (
                          <div key={key} className="text-center">
                            <div className="text-xl font-bold text-violet-400">{value}</div>
                            <div className="text-sm text-slate-400 capitalize">{key}</div>
                          </div>
                        ))}
                    </div>}

                    <div className="flex space-x-4">
                      {project?.links?.github && (
                        <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                          <Link target="_blank" href={project.links.github} className="flex items-center">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      )}
                      {project?.links?.live && (
                        <Button asChild variant="outline" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white">
                          <Link target="_blank" href={project.links.live} className="flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
                    <div className="relative aspect-video rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm overflow-hidden">
                      <Image
                        src={project?.image_url || "/placeholder.svg?height=400&width=600"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        {otherProjects.length > 0 &&
          <section className="py-20 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Other Projects</h2>
                <p className="text-slate-300">
                  Additional projects and experiments that showcase different aspects of my development skills.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project: Project, index: number) => (
                  <Card
                    key={index}
                    className="group bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <CardTitle className="text-xl text-white group-hover:text-violet-400 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-slate-300 leading-relaxed">
                          {project.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech: string) => (
                            <Badge key={tech} variant="outline" className="text-xs border-slate-700 text-slate-400">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-3 pt-2">
                          {project.links.github && (
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-0">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          )}
                          {project.links.live && (
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-0">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>}

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-7">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Interested in Working Together?</h2>
              <p className="text-xl text-slate-300 my-2">
                I'm always excited to take on new challenges and bring innovative ideas to life.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white">
                <Link href="/contact">
                  Start a Project
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
