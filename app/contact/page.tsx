"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader2 } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"
import { NavigationMenu } from "@/components/navigation-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { usePortfolio } from "@/components/portfolio-provider"
import { ErrorMessage, Loading } from "@/components/loading"

export default function ContactPage() {
  const { portfolioData, isLoading, error } = usePortfolio()
  const [state, handleSubmit] = useForm("xayzonpa")
  
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

  const { personal } = portfolioData.data

  return (
    <div className="min-h-screen bg-slate-950">
      <NavigationMenu />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Let's Work Together</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat
                about technology. Let's create something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">Send me a message</h2>
                  <p className="text-slate-300">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                            Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            placeholder="Your name"
                            required
                          />
                          <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            placeholder="your@email.com"
                            required
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-300">
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                          placeholder="What's this about?"
                          required
                        />
                        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                          placeholder="Tell me about your project or idea..."
                          required
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={state.submitting}
                        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white disabled:opacity-50"
                      >
                        {state.submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : state.succeeded ? (
                          <>
                            <Mail className="w-4 h-4 mr-2" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                      {state.errors && (
                        <p className="text-red-400 text-sm text-center mt-2">
                          {Object.values(state.errors).map((error: any) => error.message).join(", ")}
                        </p>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">Get in touch</h2>
                  <p className="text-slate-300">
                    Prefer a more direct approach? You can reach me through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      value: personal.email,
                      description: "Best for detailed project discussions",
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      value: personal.location,
                      description: "Open to remote work worldwide",
                    },
                  ].map((contact, index) => (
                    <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-violet-600/20 rounded-lg">
                            <contact.icon className="w-6 h-6 text-violet-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-semibold text-white">{contact.title}</h3>
                            <p className="text-violet-400 font-medium">{contact.value}</p>
                            <p className="text-slate-400 text-sm">{contact.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Connect with me</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Github, href: personal.social.github, label: "GitHub" },
                      { icon: Linkedin, href: personal.social.linkedin, label: "LinkedIn" },
                      { icon: Twitter, href: personal.social.twitter, label: "Twitter" },
                      { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
                    ].map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-violet-400 hover:border-violet-500"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                          <social.icon className="w-5 h-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-300">Quick answers to common questions about working with me.</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer:
                    "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I always provide detailed timelines during our initial consultation.",
                },
                {
                  question: "Do you work with international clients?",
                  answer:
                    "I work with clients worldwide and am comfortable with remote collaboration. I'm flexible with time zones and use modern communication tools to ensure smooth project delivery.",
                },
                {
                  question: "What technologies do you specialize in?",
                  answer:
                    "I specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and PostgreSQL. I'm always learning new technologies and can adapt to your project's specific requirements.",
                },
                {
                  question: "Do you provide ongoing maintenance?",
                  answer:
                    "Yes, I offer ongoing maintenance and support packages for projects I've built. This includes bug fixes, security updates, performance optimization, and feature enhancements.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Start Your Project?</h2>
              <p className="text-xl text-slate-300">
                Let's discuss your ideas and turn them into reality. I'm here to help bring your vision to life.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
              >
                <a href={`mailto:${personal.email}`}>Drop me a mail!</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
