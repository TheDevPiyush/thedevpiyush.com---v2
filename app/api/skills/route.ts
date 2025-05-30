import { NextResponse } from "next/server"
import { getSkills } from "@/lib/supabase/queries"

export async function GET() {
  try {
    const data = await getSkills()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching skills:", error)
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 })
  }
}
