import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";

export async function POST(request: NextRequest) {
    const { id } = await request.json();

    if (!id) {
        return NextResponse.json({ error: "id is required" }, { status: 400 });
    }

    const { data, error } = await supabase.from("users").select("*").eq("id", id);

    if (data && data.length === 0) {
        return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "User found", data: data }, { status: 200 });

}