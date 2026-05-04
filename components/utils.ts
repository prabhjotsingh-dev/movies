import { Langauges } from "@/comman/constant";
import { tmdbFetch } from "../lib/api-client";
import { TMDBSearchResponse, IFullMovieDetails, DiscoverParams } from "./types";

export const movieService = {
  async getAdvancedSearch(
    params: DiscoverParams = {},
  ): Promise<TMDBSearchResponse> {
    const defaultParams: DiscoverParams = {
      sort_by: "popularity.desc",
      page: 1,
      ...params,
    };

    const queryParams = new URLSearchParams();

    Object.entries(defaultParams).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") return;

      if (Array.isArray(value)) {
        queryParams.append(key, value.join(","));
      } else {
        queryParams.append(key, String(value));
      }
    });

    return await tmdbFetch<TMDBSearchResponse>(
      `/discover/movie?${queryParams.toString()}`,
    );
  },

  async getHindi(extraParams?: DiscoverParams) {
    return this.getAdvancedSearch({
      with_original_language: "hi",
      ...extraParams,
    });
  },

  async getHollywood(extraParams?: DiscoverParams) {
    return this.getAdvancedSearch({
      with_original_language: "en",
      ...extraParams,
    });
  },

  async getPunjabi(extraParams?: DiscoverParams) {
    return this.getAdvancedSearch({
      with_original_language: "pa",
      ...extraParams,
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
    language: string = "en-US",
    page: number = 1,
  ): Promise<TMDBSearchResponse> {
    const url = `/trending/${mediaType}/${timeWindow}?language=${language}&page=${page}`;
    return await tmdbFetch<TMDBSearchResponse>(url);
  },
};

export function GetLanguageCode(language: string) {
  const lang = language.trim().toUpperCase();
  if (!lang || lang === "All") return undefined;
  if (lang.length === 2) {
    const found = Langauges.find((item) => item.code === lang.toLowerCase());
    if (found) return found.code;
  }
  const found = Langauges.find((item) => item.name === lang);
  if (!found) return undefined;
  return found?.code;
}

export function GetLanguageName(language: string) {
  const lang = language.trim().toUpperCase();
  if (!lang || lang === "All") return undefined;
  if (lang.length === 2) {
    const found = Langauges.find((item) => item.code === lang.toLowerCase());
    if (found) return found.name;
  }
  const found = Langauges.find((item) => item.name === lang);
  if (!found) return undefined;
  return found?.name;
}

export function GetProperCase(value: string) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
