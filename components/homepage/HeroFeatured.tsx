import { AutoplayCarousel } from "../fullscreencarousel";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { movieService } from "@/components/utils";
import { Badge } from "@/components/ui/badge";
import { MovieCard } from "./MovieCard";

export const HeroFeatured = async () => {
  try {
    const movies = await movieService.getTrendingHindi();
    const featured = movies.results?.slice(0, 6) || [];

    return (
      <section className="relative min-h-[60svh] w-full py-12 px-6 lg:px-12 overflow-hidden bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-row gap-12 items-center">
            <div className="z-10 space-y-6 w-full lg:w-1/2">
              <Badge
                variant="secondary"
                className="px-3 py-1 text-xs tracking-widest uppercase bg-brand-primary/10 text-brand-primary border-brand-primary/20"
              >
                Featured This Week
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-foreground">
                Best <br />
                <span className="text-zinc-500">Cinema.</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-[45ch] leading-relaxed">
                Experience the finest selection of World cinema.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-all active:scale-[0.98]">
                  Explore Trending
                </button>
                <button className="px-8 py-3 glass-morphism rounded-full font-semibold hover:bg-white/5 transition-all active:scale-[0.98]">
                  My List
                </button>
              </div>
            </div>

            <div className="relative w-full lg:w-1/2">
              <div className="absolute -inset-24 bg-brand-primary/5 blur-[120px] rounded-full" />
              <AutoplayCarousel className="mx-auto w-full max-w-xl lg:ml-auto">
                <CarouselContent className="-ml-4">
                  {featured.map((movie, i) => (
                    <CarouselItem
                      key={movie.id || i}
                      className="pl-4 basis-full md:basis-1/2"
                    >
                      <MovieCard
                        movie={movie}
                        index={i}
                        showLanguage={true}
                        showPlayAndDetails={false}
                        AllwaysShowNameAndRating={true}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </AutoplayCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};
