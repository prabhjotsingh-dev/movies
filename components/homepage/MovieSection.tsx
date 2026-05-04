import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCard } from "./MovieCard";
import { TMDBSearchResponse } from "../types";
import Link from "next/link";
import routes from "@/comman/routes";

interface MovieSectionProps {
  title: string;
  fetcher: () => Promise<TMDBSearchResponse>;
  language?: string;
  count?: number;
}

export const MovieSection = async ({
  title,
  language,
  fetcher,
  count = 10,
}: MovieSectionProps) => {
  try {
    const movies = await fetcher();
    const results =
      movies.results?.filter((i) => i.poster_path).slice(0, count) || [];

    return (
      <section className="px-6 py-12 border-t lg:px-12 bg-background border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {title}
              </h2>
              <div className="w-12 h-1 rounded-full bg-brand-primary" />
            </div>
            <button className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
              <Link href={routes.filterByLanguage(language?.toUpperCase())}>
                View All
              </Link>
            </button>
          </div>

          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-4">
              {results.map((movie, i) => (
                <CarouselItem
                  key={movie.id || i}
                  className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <MovieCard movie={movie} index={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden -left-4 w-10 h-10 border-none md:flex glass-morphism" />
            <CarouselNext className="hidden -right-4 w-10 h-10 border-none md:flex glass-morphism" />
          </Carousel>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};
