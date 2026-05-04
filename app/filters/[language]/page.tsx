"use client";
import { getMoviesByFilter } from "@/serverActions/movie-actions";
import { Dropdown } from "@/components/dropdown";
import { MovieCard } from "@/components/homepage/MovieCard";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useEffect, useState } from "react";
import {
  GetLanguageCode,
  GetLanguageName,
  GetProperCase,
} from "@/components/utils";
const YEARS = [
  "All",
  ...Array(10)
    .fill(0)
    .map((_, i) => (new Date().getFullYear() - i).toString()),
];
const FilterByLanguage = ({ params }: { params: { language: string } }) => {
  const { language } = params;
  const languageCode = GetLanguageCode(language);
  const LanguageName = GetProperCase(GetLanguageName(language));
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState("All");
  const fetchMovies = async () => {
    const data = await getMoviesByFilter({
      with_original_language: languageCode,
      primary_release_year: year === "All" ? undefined : year,
    });
    setMovies(data?.results);
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    fetchMovies();
  }, [year]);
  return (
    <section>
      <div
        className="flex justify-between items-end pb-6 mb-8 border-b border-border/50 animate-stagger-fade"
        style={{ animationDelay: "150ms", animationFillMode: "both" }}
      >
        <div>
          <h2 className="text-2xl font-medium tracking-tight">Results</h2>
          <p className="mt-1 text-muted-foreground">
            Showing trending matches for{" "}
            <span className="font-medium text-foreground">
              {LanguageName || "Unknown"} Movies
            </span>
            .
          </p>
        </div>
        <div className="gap-6">
          <span className="pb-1 text-sm font-medium border-b cursor-pointer text-foreground border-foreground">
            <Dropdown
              label="Year"
              options={YEARS}
              value={year}
              onChange={setYear}
            />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {isLoading ? (
          Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 animate-stagger-fade"
                style={{
                  animationDelay: `${200 + i * 50}ms`,
                  animationFillMode: "both",
                }}
              >
                <Skeleton className="w-full aspect-[4/5] rounded-[2rem] bg-secondary/60" />
                <div className="px-2 space-y-3">
                  <Skeleton className="w-2/3 h-5 rounded-md bg-secondary/80" />
                  <Skeleton className="w-1/3 h-4 rounded-md bg-secondary/60" />
                </div>
              </div>
            ))
        ) : movies.length > 0 ? (
          movies.map((movie, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 cursor-pointer group animate-stagger-fade"
              style={{
                animationDelay: `${i * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <MovieCard
                movie={movie}
                index={i}
                AllwaysShowNameAndRating
                showLanguage
                showPlayAndDetails={false}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No results found for the selected filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterByLanguage;
