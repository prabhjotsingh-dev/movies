import { tmdbFetch } from "../lib/api-client";
import { TMDBSearchResponse, IFullMovieDetails } from "./types";
//https://api.themoviedb.org/3/trending/movie/week
export const movieService = {
  async getAdvancedSearch(
    params: Record<string, string | number> = {},
  ): Promise<TMDBSearchResponse> {
    const defaultParams = {
      sort_by: "popularity.desc",
      page: 1,
      ...params,
    };

    const queryString = new URLSearchParams(defaultParams as any).toString();
    return await tmdbFetch<TMDBSearchResponse>(
      `/discover/movie?${queryString}`,
    );
  },

  async getHindi() {
    return this.getAdvancedSearch({ with_original_language: "hi" });
  },

  async getHollywood() {
    return this.getAdvancedSearch({ with_original_language: "en" });
  },

  async getPunjabi() {
    return this.getAdvancedSearch({
      with_original_language: "pa",
    });
  },

  async getSuggestions(query: string): Promise<TMDBSearchResponse> {
    if (!query)
      return { page: 1, results: [], total_pages: 0, total_results: 0 };
    return await tmdbFetch<TMDBSearchResponse>(
      `/search/movie?query=${encodeURIComponent(query)}`,
    );
  },

  async getMovieDetails(
    id: string,
  ): Promise<IFullMovieDetails | { error: string }> {
    if (!id) return { error: "ID required" };
    try {
      return await tmdbFetch<IFullMovieDetails>(
        `/movie/${id}?append_to_response=credits,videos`,
      );
    } catch (e) {
      return { error: "Failed to fetch movie details" };
    }
  },

  async getTradingMovies(
    timeWindow: "day" | "week",
    mediaType: "movie" | "tv" | "all",
    language?: string,
    page?: number,
  ): Promise<TMDBSearchResponse> {
    const response = await tmdbFetch<TMDBSearchResponse>(
      `/trending/${mediaType}/${timeWindow}?language=${language}&page=${page}`,
    );
    return response;
  },
};
