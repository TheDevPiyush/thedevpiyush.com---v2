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
      <div className="min-h-screen" style={{ backgroundColor: 'rgb(var(--color-bg-primary))' }}>
        <NavigationMenu />
        <div className="pt-16">
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4" style={{ color: 'rgb(239 68 68)' }}>Error Loading Portfolio</h1>
              <p style={{ color: 'rgb(var(--color-text-secondary))' }}>{portfolioData.error || "Failed to load portfolio data"}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const { personal, skills, experience, education, certifications, stats } = portfolioData.data

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(var(--color-bg-primary))' }}>
      <NavigationMenu />

      <div className="pt-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: 'rgb(var(--color-text-primary))' }}>About Me</h1>
                  <p className="text-xl leading-relaxed" style={{ color: 'rgb(var(--color-text-secondary))' }}>{personal.bio}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3" style={{ color: 'rgb(var(--color-text-secondary))' }}>
                    <MapPin className="w-5 h-5" style={{ color: 'rgb(var(--color-primary-light))' }} />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center space-x-3" style={{ color: 'rgb(var(--color-text-secondary))' }}>
                    <Calendar className="w-5 h-5" style={{ color: 'rgb(var(--color-primary-light))' }} />
                    <span>{stats.experience} years of experience</span>
                  </div>
                  <div className="flex items-center space-x-3" style={{ color: 'rgb(var(--color-text-secondary))' }}>
                    <Coffee className="w-5 h-5" style={{ color: 'rgb(var(--color-primary-light))' }} />
                    <span>{personal.working_at}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{ background: 'var(--gradient-primary)', opacity: 0.2 }} />
                <div className="relative aspect-[4/5] rounded-3xl p-8 backdrop-blur-sm" style={{ background: 'linear-gradient(to bottom right, rgba(var(--color-bg-tertiary), 0.5), rgba(var(--color-bg-secondary), 0.5))', border: '1px solid rgba(var(--color-border-primary), 0.5)' }}>
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
        <section className="py-20" style={{ backgroundColor: 'rgba(var(--color-bg-secondary), 0.3)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center" style={{ color: 'rgb(var(--color-text-primary))' }}>My Story</h2>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-text-secondary))' }}>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'rgb(var(--color-text-primary))' }}>Skills & Technologies</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'rgb(var(--color-text-secondary))' }}>
                I work with a diverse set of technologies to build robust and scalable applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {([...new Set(skills.map((skill: Skill) => skill.category))] as string[]).map((category: string, index: number) => (
                <Card key={`${category}-${index}`} className="overflow-hidden rounded-lg backdrop-blur-sm" style={{ backgroundColor: 'rgba(var(--color-bg-tertiary), 0.3)', border: '1px solid rgba(var(--color-border-primary), 0.5)' }}>
                  <CardContent className="p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4" style={{ color: 'rgb(var(--color-text-primary))' }}>{category}</h3>
                    <div className="space-y-3">
                      {skills
                        .filter((skill: Skill) => skill.category === category)
                        .map((skill: Skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm" style={{ color: 'rgb(var(--color-text-secondary))' }}>{skill.name}</span>
                              <span className="text-xs" style={{ color: 'rgb(var(--color-text-tertiary))' }}>{skill.level}%</span>
                            </div>
                            <div className="w-full rounded-full h-2" style={{ backgroundColor: 'rgb(var(--color-bg-quaternary))' }}>
                              <div
                                className="h-2 rounded-full transition-all duration-300"
                                style={{ width: `${skill.level}%`, background: 'var(--gradient-primary)' }}
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
        <section className="py-20" style={{ backgroundColor: 'rgba(var(--color-bg-secondary), 0.3)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'rgb(var(--color-text-primary))' }}>Experience</h2>
              <p style={{ color: 'rgb(var(--color-text-secondary))' }}>My professional journey and the roles that shaped my expertise.</p>
            </div>

            <div className="space-y-8">
              {experience.map((exp: Experience, index: number) => (
                <Card key={index} className="backdrop-blur-sm" style={{ backgroundColor: 'rgba(var(--color-bg-tertiary), 0.3)', border: '1px solid rgba(var(--color-border-primary), 0.5)' }}>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold" style={{ color: 'rgb(var(--color-text-primary))' }}>{exp.title}</h3>
                        <p className="font-medium" style={{ color: 'rgb(var(--color-primary-light))' }}>{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0" style={{ color: 'rgb(var(--color-text-tertiary))' }}>{exp.period}</div>
                    </div>
                    <p className="leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text-secondary))' }}>{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium" style={{ color: 'rgb(var(--color-text-tertiary))' }}>Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement: string, i: number) => (
                          <li key={i} className="text-sm flex items-start" style={{ color: 'rgb(var(--color-text-secondary))' }}>
                            <span className="mr-2" style={{ color: 'rgb(var(--color-primary-light))' }}>•</span>
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
                <h2 className="text-3xl font-bold mb-8" style={{ color: 'rgb(var(--color-text-primary))' }}>Education</h2>
                <Card className="backdrop-blur-sm" style={{ backgroundColor: 'rgba(var(--color-bg-tertiary), 0.3)', border: '1px solid rgba(var(--color-border-primary), 0.5)' }}>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold" style={{ color: 'rgb(var(--color-text-primary))' }}>{education.degree}</h3>
                        <p className="font-medium" style={{ color: 'rgb(var(--color-primary-light))' }}>{education.institution}</p>
                        <p style={{ color: 'rgb(var(--color-text-tertiary))' }}>
                          {education.period} • GPA: {education.gpa}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2" style={{ color: 'rgb(var(--color-text-tertiary))' }}>Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {education.coursework.map((course: string) => (
                            <Badge
                              key={course}
                              variant="secondary"
                              style={{ backgroundColor: 'rgba(var(--color-bg-quaternary), 0.5)', color: 'rgb(var(--color-text-secondary))', border: '1px solid rgba(var(--color-border-secondary), 0.5)' }}
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
                <h2 className="text-3xl font-bold mb-8" style={{ color: 'rgb(var(--color-text-primary))' }}>Certifications</h2>
                <div className="space-y-4">
                  {certifications.map((cert: Certification, index: number) => (
                    <Card key={index} className="backdrop-blur-sm" style={{ backgroundColor: 'rgba(var(--color-bg-tertiary), 0.3)', border: '1px solid rgba(var(--color-border-primary), 0.5)' }}>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold" style={{ color: 'rgb(var(--color-text-primary))' }}>{cert.name}</h3>
                          <p style={{ color: 'rgb(var(--color-primary-light))' }}>{cert.issuer}</p>
                          <p className="text-sm" style={{ color: 'rgb(var(--color-text-tertiary))' }}>{cert.year}</p>
                          {cert.url && (
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm inline-block hover:opacity-80"
                              style={{ color: 'rgb(var(--color-primary-light))' }}
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
