import { NextResponse } from "next/server"
import { getBlogPosts, getFeaturedBlogPost } from "@/lib/supabase/queries"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get("featured")

    const data = featured === "true" ? await getFeaturedBlogPost() : await getBlogPosts()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}
