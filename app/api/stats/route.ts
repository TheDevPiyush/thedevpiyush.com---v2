import { NextResponse } from "next/server"
import { getPortfolioStats } from "@/lib/supabase/queries"

export async function GET() {
  try {
    const data = await getPortfolioStats()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching portfolio stats:", error)
    return NextResponse.json({ error: "Failed to fetch portfolio stats" }, { status: 500 })
  }
}
