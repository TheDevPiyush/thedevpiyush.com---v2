import { NextResponse } from "next/server"
import { getPersonalInfo } from "@/lib/supabase/queries"

export async function GET() {
  try {
    const data = await getPersonalInfo()

    if (!data) {
      return NextResponse.json({ error: "Personal info not found" }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching personal info:", error)
    return NextResponse.json({ error: "Failed to fetch personal info" }, { status: 500 })
  }
}
