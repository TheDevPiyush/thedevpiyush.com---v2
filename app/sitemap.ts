import { MetadataRoute } from 'next'
import { getPortfolioData } from '@/lib/data/portfolio'
import type { BlogPost } from '@/lib/data/portfolio'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://thedevpiyush.com'

    // Get portfolio data including blog posts
    const portfolioData = await getPortfolioData()

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/home`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ]

    // Dynamic blog post pages
    const blogPages = portfolioData.data?.blog?.map((post: BlogPost) => ({
        url: `${baseUrl}/blog/${post.url}`,
        lastModified: new Date(post.publishDate),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    })) || []

    return [...staticPages, ...blogPages]
} 