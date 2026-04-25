import { rapidFetch, omdbFetch } from "../lib/api-client";
import { OMDBSearchResponse, SearchResponse, OMDBMovieDetails } from "./types";

export const movieService = {
  async getAdvancedSearch(
    params: Record<string, string | number> = {},
  ): Promise<SearchResponse> {
    const defaultParams = {
      start_year: 2022,
      end_year: 2024,
      min_imdb: 6,
      max_imdb: 7.8,
      type: "movie",
      sort: "latest",
      page: 1,
      ...params,
    };

    const queryString = new URLSearchParams(defaultParams as any).toString();
    return await rapidFetch<SearchResponse>(`advancedsearch?${queryString}`);
  },

  async getTrendingHindi() {
    return this.getAdvancedSearch({ language: "hindi" });
  },

  async getHollywood() {
    return this.getAdvancedSearch({ language: "english" });
  },

  async getPunjabi() {
    return this.getAdvancedSearch({
      language: "punjabi",
      start_year: 2015,
    });
  },

  async getSuggestions(query: string): Promise<OMDBSearchResponse> {
    if (!query) return { Search: [], Response: "False" };
    return await omdbFetch<OMDBSearchResponse>(`s=${query}`);
  },

  async getMovieDetails(
    imdbId: string,
  ): Promise<OMDBMovieDetails | { Error: string; Response: string }> {
    if (!imdbId) return { Error: "IMDb ID required", Response: "False" };
    return await omdbFetch<OMDBMovieDetails>(`i=${imdbId}`);
  },
};
