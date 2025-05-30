import { NextResponse } from "next/server"
import { getPortfolioData } from "@/lib/supabase/queries"

export async function GET() {
  try {
    const data = await getPortfolioData()

    if (!data) {
      return NextResponse.json({ error: "Portfolio data not found" }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching portfolio data:", error)
    return NextResponse.json({ error: "Failed to fetch portfolio data" }, { status: 500 })
  }
}
