import { NextResponse } from "next/server"
import { getExperiences } from "@/lib/supabase/queries"

export async function GET() {
  try {
    const data = await getExperiences()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching experience:", error)
    return NextResponse.json({ error: "Failed to fetch experience" }, { status: 500 })
  }
}
