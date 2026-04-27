import { NextRequest, NextResponse } from "next/server";
import { movieService } from "@/components/utils";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("suggetions");

  if (!q) {
    return NextResponse.json({ results: [] });
  }

  try {
    const data = await movieService.getSuggestions(q);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch suggestions" }, { status: 500 });
  }
}
