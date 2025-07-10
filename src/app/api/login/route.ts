import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Falta rellenar campos." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("users") 
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Credenciales inválidas." }, { status: 401 });
  }

  return NextResponse.json({ success: true });
}
