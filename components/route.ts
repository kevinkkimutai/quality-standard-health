import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  // TODO: send email / save to DB
  console.log("New contact message:", { name, email, subject, message });
  return NextResponse.json({ ok: true });
}
