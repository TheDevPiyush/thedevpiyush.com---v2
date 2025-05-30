import { NextResponse } from "next/server"
import { getCertifications } from "@/lib/supabase/queries"

export async function GET() {
  try {
    const data = await getCertifications()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching certifications:", error)
    return NextResponse.json({ error: "Failed to fetch certifications" }, { status: 500 })
  }
}
