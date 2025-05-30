import { NextResponse } from "next/server"
import { getInterests } from "@/lib/supabase/queries"

export async function GET() {
  try {
    const data = await getInterests()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching interests:", error)
    return NextResponse.json({ error: "Failed to fetch interests" }, { status: 500 })
  }
}
