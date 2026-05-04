"use server";

import { movieService } from "@/components/utils";
import { DiscoverParams, TMDBSearchResponse } from "@/components/types";

export async function getMoviesByFilter(
  params: DiscoverParams,
): Promise<TMDBSearchResponse> {
  try {
    return await movieService.getAdvancedSearch(params);
  } catch (error) {
    console.error("Server Action Error:", error);
    throw new Error("Failed to fetch movies from server");
  }
}

export async function getSuggestionsAction(query: string): Promise<TMDBSearchResponse> {
  try {
    return await movieService.getSuggestions(query);
  } catch (error) {
    console.error("Suggestions Action Error:", error);
    throw new Error("Failed to fetch suggestions");
  }
}
