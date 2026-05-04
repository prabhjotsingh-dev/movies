"use client";

import React, { useState, useEffect } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { MovieCard } from "@/components/homepage/MovieCard";
import { Dropdown } from "@/components/dropdown";
import { Langauges, genres } from "@/comman/constant";
import { getMoviesByFilter } from "@/serverActions/movie-actions";
const GENRES = ["All", ...genres.map((genre) => genre.name)];

const FORMATS = ["All", "Movies"];
const Rating = [
  "None",
  ...Array(10)
    .fill(0)
    .map((_, i) => (i + 1).toString()),
];
const YEARS = [
  "All",
  ...Array(10)
    .fill(0)
    .map((_, i) => (new Date().getFullYear() - i).toString()),
];

export default function FiltersPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeGenre, setActiveGenre] = useState("All");
  const [activeType, setActiveType] = useState("All");
  const [activeLanguage, setActiveLanguage] = useState("ENGLISH");
  const [minimalRating, setMinimalRating] = useState("None");
  const [year, setYear] = useState("All");
  const handleFilter = async () => {
    setIsLoading(true);
    setMovies([]);
    try {
      const Data = await getMoviesByFilter({
        with_original_language: Langauges.find(
          (language) => language.name === activeLanguage,
        )?.code,
        with_genres:
          activeGenre === "All"
            ? undefined
            : [genres.find((genre) => genre.name === activeGenre)?.id],
        "vote_average.gte":
          minimalRating === "None" ? undefined : Number(minimalRating),
      });
      setMovies(Data.results || []);
    } catch (error) {
      console.error("Filter failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleFilter();
  }, []);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground pb-24 font-sans selection:bg-foreground selection:text-background">
      <section className="max-w-[1400px] mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col gap-6 justify-between items-start mb-12 md:flex-row md:items-center">
          <div
            className="flex flex-wrap gap-4 items-center animate-stagger-fade"
            style={{ animationDelay: "0ms", animationFillMode: "both" }}
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm rounded-full shadow-sm border-border"
            >
              <SlidersHorizontal className="inline-block mr-2 w-4 h-4 text-muted-foreground" />{" "}
              Filters
            </Badge>

            <Dropdown
              label="Format"
              options={FORMATS}
              value={activeType}
              onChange={setActiveType}
            />

            <Dropdown
              label="Genre"
              options={GENRES}
              value={activeGenre}
              onChange={setActiveGenre}
            />
            <Dropdown
              label="Language"
              options={[...Langauges.map((language) => language.name)]}
              value={activeLanguage}
              onChange={setActiveLanguage}
            />
            <Dropdown
              label="Minimal Rating"
              options={Rating}
              value={minimalRating}
              onChange={setMinimalRating}
            />
            <Dropdown
              label="Year"
              options={YEARS}
              value={year}
              onChange={setYear}
            />
            <Button onClick={handleFilter}>Apply Filters</Button>
          </div>
        </div>

        <div
          className="flex justify-between items-end pb-6 mb-8 border-b border-border/50 animate-stagger-fade"
          style={{ animationDelay: "150ms", animationFillMode: "both" }}
        >
          <div>
            <h2 className="text-2xl font-medium tracking-tight">Results</h2>
            <p className="mt-1 text-muted-foreground">
              Showing trending matches for{" "}
              <span className="font-medium text-foreground">{activeGenre}</span>
              .
            </p>
          </div>
          <div className="hidden gap-6 md:flex">
            <span className="pb-1 text-sm font-medium border-b cursor-pointer text-foreground border-foreground">
              Relevant
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
    </div>
  );
}
