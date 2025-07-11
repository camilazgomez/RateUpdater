import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Falta rellenar campos." }, { status: 400 });
  }

  const { data: user, error } = await supabase
    .from("users") 
    .select("*")
    .eq("email", email)
    .single();

  if (error || !user) {
    return NextResponse.json({ error: "Credenciales inválidas." }, { status: 401 });
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    return NextResponse.json({ error: "Contraseña incorrecta." }, { status: 401 });
  }

  return NextResponse.json({ success: true });
}
