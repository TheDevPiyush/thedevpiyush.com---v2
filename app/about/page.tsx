import Image from "next/image"
import { MapPin, Calendar, Coffee, Code, Heart, Award } from "lucide-react"
import { NavigationMenu } from "@/components/navigation-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getPortfolioData } from "@/lib/data/portfolio"
import type { Skill, Experience, Education, Certification } from "@/lib/data/portfolio"

export default async function AboutPage() {
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

  const { personal, skills, experience, education, certifications, stats } = portfolioData.data

  return (
    <div className="min-h-screen bg-slate-950">
      <NavigationMenu />

      <div className="pt-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">About Me</h1>
                  <p className="text-xl text-slate-300 leading-relaxed">{personal.bio}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-violet-400" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Calendar className="w-5 h-5 text-violet-400" />
                    <span>{stats.experience} years of experience</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Coffee className="w-5 h-5 text-violet-400" />
                    <span>{personal.working_at}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
                <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 border border-slate-700/50 backdrop-blur-sm">
                  <Image
                    src={personal.image || "/placeholder.svg?height=600&width=480"}
                    alt={`${personal.name} working`}
                    width={480}
                    height={600}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white text-center">My Story</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>I got into coding back in class 9 when my school computer teacher introduced us to Java. That first look at code really stuck with me. Then during the 2020 lockdown, I finally got my first PC and started exploring different languages and frameworks on my own.</p>
                <p>Lockdown gave me the time (and patience) to really dive in. For me, programming isn't just about writing code—it feels more like art. It's where creativity and logic come together, and that's what keeps me hooked.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                I work with a diverse set of technologies to build robust and scalable applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {([...new Set(skills.map((skill: Skill) => skill.category))] as string[]).map((category: string, index: number) => (
                <Card key={`${category}-${index}`} className="bg-slate-800/30 overflow-hidden rounded-lg border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                    <div className="space-y-3">
                      {skills
                        .filter((skill: Skill) => skill.category === category)
                        .map((skill: Skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-slate-300 text-sm">{skill.name}</span>
                              <span className="text-xs text-slate-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${skill.level}%` }}
                              />
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

        {/* Experience Section */}
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
              <p className="text-slate-300">My professional journey and the roles that shaped my expertise.</p>
            </div>

            <div className="space-y-8">
              {experience.map((exp: Experience, index: number) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-violet-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-slate-400 mt-2 md:mt-0">{exp.period}</div>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-slate-400">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement: string, i: number) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start">
                            <span className="text-violet-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
                <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
                        <p className="text-violet-400 font-medium">{education.institution}</p>
                        <p className="text-slate-400">
                          {education.period} • GPA: {education.gpa}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-400 mb-2">Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {education.coursework.map((course: string) => (
                            <Badge
                              key={course}
                              variant="secondary"
                              className="bg-slate-700/50 text-slate-300 border-slate-600/50"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
                <div className="space-y-4">
                  {certifications.map((cert: Certification, index: number) => (
                    <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                          <p className="text-violet-400">{cert.issuer}</p>
                          <p className="text-slate-400 text-sm">{cert.year}</p>
                          {cert.url && (
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-violet-400 hover:text-violet-300 text-sm inline-block"
                            >
                              View Credential →
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
