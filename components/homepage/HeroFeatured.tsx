import { AutoplayCarousel } from "../fullscreencarousel";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { getTradingMovies, movieService } from "@/components/utils";
import { Badge } from "@/components/ui/badge";
import { MovieCard } from "./MovieCard";

export const HeroFeatured = async () => {
  try {
    const movies = await getTradingMovies("week", "movie", "hi-IN", 1);
    const featured = movies.results?.slice(0, 6) || [];

    return (
      <header className="pb-4">
        <section className="overflow-hidden relative px-6 py-12 w-full lg:px-12 bg-background">
          <div className="max-w-[1400px] mx-auto">
            <div className={`flex flex-col gap-12 lg:flex-row`}>
              <div className="flex z-10 flex-col justify-between items-start w-full lg:w-auto">
                <Badge
                  variant="secondary"
                  className="px-3 py-1 text-sm tracking-widest uppercase bg-brand-primary/10 text-brand-primary border-brand-primary/20"
                >
                  Featured This Week
                </Badge>

                <h1 className="hidden lg:block text-5xl font-bold tracking-tighter leading-[0.9] text-foreground">
                  Best <br />
                  <span className="hidden lg:block text-zinc-500">Cinema.</span>
                </h1>
                <p className="hidden lg:block text-muted-foreground text-lg max-w-[45ch] leading-relaxed">
                  Experience the finest selection of World cinema.
                </p>
              </div>

              <div className="relative w-full">
                <div className="absolute -inset-24 bg-brand-primary/5 blur-[120px] rounded-full" />
                <AutoplayCarousel className="mx-auto w-full lg:ml-auto">
                  <CarouselContent className="-ml-4">
                    {featured.map((movie, i) => (
                      <CarouselItem
                        key={movie.id || i}
                        className="pl-4 basis-full lg:basis-1/2"
                      >
                        <MovieCard
                          movie={movie}
                          index={i}
                          showLanguage={true}
                          showPlayAndDetails={false}
                          AllwaysShowNameAndRating={true}
                          useBackdropPathForPoster={true}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </AutoplayCarousel>
              </div>
            </div>
          </div>
        </section>
        <div className="px-4 w-full">
          <div>
            <button className="py-3 pl-8 w-full font-semibold rounded-full border transition-all border-foreground text-end hover:bg-white/5">
              <span className="block ml-auto w-1/2 text-center">
                Custom filter
              </span>
            </button>
            <button className="absolute left-4 py-3 pr-8 w-1/2 font-semibold rounded-full border transition-all border-foreground bg-foreground text-background hover:opacity-80">
              <span className="relative left-4">Top Rated</span>
            </button>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};
