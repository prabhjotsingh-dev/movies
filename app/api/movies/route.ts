import { NextRequest, NextResponse } from "next/server";
import { movieService } from "@/components/utils";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get("language") || "english";
  const page = parseInt(searchParams.get("page") || "1");

  try {
    const data = await movieService.getAdvancedSearch({ language, page });
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Movies error:", error);
    return NextResponse.json({ error: "Failed to fetch movies" }, { status: 500 });
  }
}
