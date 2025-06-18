import Image from "next/image"
import { ArrowRight, ExternalLink, Github, Mail, MapPin, Calendar, Coffee, Star, Download, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface HomePageProps {
  data: {
    personal: {
      name: string
      title: string
      location: string
      email: string
      phone: string
      bio: string
      philosophy: string
      interests: string[]
      working_at: string
      image: string
      social: {
        github: string
        linkedin: string
        twitter: string
        discord: string
      }
    }
    skills: Array<{
      name: string
      level: number
      category: string
    }>
    projects: Array<{
      id: string
      title: string
      description: string
      longDescription: string
      techStack: string[]
      image_url: string
      features: string[]
      stats: {
        [key: string]: string
      }
      links: {
        github?: string
        live?: string
        demo?: string
      }
      featured: boolean
      category: string
    }>
    experience: Array<{
      id: string
      title: string
      company: string
      location: string
      period: string
      description: string
      technologies: string[]
      achievements: string[]
    }>
    blog: Array<{
      id: string
      title: string
      excerpt: string
      publishDate: string
      readTime: string
      tags: string[]
      image_url: string
      featured?: boolean
      trending?: boolean
      popular?: boolean
    }>
    stats: {
      experience: string
      [key: string]: string
    }
  }
}

export function HomePage({ data }: HomePageProps) {
  const { personal, skills, projects, experience, blog, stats } = data

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
                <div className="flex items-center text-sm font-semibold space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center text-sm font-semibold space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{stats.experience} years experience</span>
                </div>
                <div className="flex items-center text-sm font-semibold space-x-2">
                  <Coffee className="w-4 h-4" />
                  <span>{personal.working_at}</span>
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
            {[...new Set(skills.map((skill) => skill.category))].map((category) => (
              <Card key={category} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills
                      .filter((skill) => skill.category === category)
                      .slice(0, 4)
                      .map((skill) => (
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
              .filter((project) => project.featured)
              .map((project, index: number) => (
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
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                      <CardDescription className="text-slate-300 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-slate-700/50 text-slate-200 border-slate-600/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-3 pt-2">
                        {project.links.github && (
                          <Button asChild variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                            <Link target="_blank" href={project.links.github} className="flex items-center">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        )}
                        {project.links.live && (
                          <Button asChild size="sm" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white">
                            <Link target="_blank" href={project.links.live} className="flex items-center">
                              <ExternalLink className="w-4 h-4 mr-2" />
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

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              My professional journey and the companies I've had the privilege to work with
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={exp.id} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-violet-400 font-medium">{exp.company}</p>
                      <p className="text-slate-400 text-sm">{exp.location}</p>
                      <p className="text-slate-400 text-sm">{exp.period}</p>
                    </div>
                    <div className="lg:col-span-2 space-y-4">
                      <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-slate-700 text-slate-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {exp.achievements.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-slate-400">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-slate-300 text-sm flex items-start">
                                <span className="text-violet-400 mr-2">✓</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Thoughts on web development, programming best practices, and lessons learned
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blog.slice(0, 3).map((post) => (
              <Card key={post.id} className="group bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 overflow-hidden">
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
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-slate-700 text-slate-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="ghost" className="text-violet-400 hover:text-violet-300 p-0 h-auto font-medium">
                      <Link href={`/blog/${post.id}`} className="flex items-center">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white">
              <Link href="/blog" className="flex items-center">
                View All Posts
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
                <p className="text-slate-300 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-violet-400" />
                  <span className="text-slate-300">{personal.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  <span className="text-slate-300">{personal.location}</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {personal.social.github && (
                  <Button asChild variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                    <Link target="_blank" href={personal.social.github} className="flex items-center">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                )}
                {personal.social.linkedin && (
                  <Button asChild variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                    <Link target="_blank" href={personal.social.linkedin} className="flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Quick Actions</h3>
                <p className="text-slate-300">
                  Ready to start a project or want to learn more about my work?
                </p>
              </div>

              <div className="space-y-4">
                <Button asChild size="lg" className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white">
                  <Link href="mailto:piyushdev.developer@gmail.com" className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800">
                  <Link href="/projects" className="flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
