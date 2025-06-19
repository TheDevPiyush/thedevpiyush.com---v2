import { supabase } from "@/lib/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { email, id } = await request.json();

    if (!id || !email) {
        return NextResponse.json({ error: " ID & email are required" }, { status: 400 });
    }

    const { data, error } = await supabase.from("users").insert({ email: email, id: id });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "User registered successfully", data: data }, { status: 200 });

}