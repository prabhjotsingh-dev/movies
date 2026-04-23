import Image from "next/image";
import { FUllcarousel } from "../fullscreencarousel";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { movieService } from "@/components/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const HeroFeatured = async () => {
  try {
    const movies = await movieService.getTrendingHindi();
    const featured = movies.results.slice(0, 6);

    return (
      <section className="relative min-h-[70dvh] w-full py-12 px-6 lg:px-12 overflow-hidden bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-12 items-center lg:flex-row">
            <div className="z-10 space-y-6 w-full lg:w-1/2">
              <Badge
                variant="secondary"
                className="px-3 py-1 text-xs tracking-widest uppercase bg-brand-primary/10 text-brand-primary border-brand-primary/20"
              >
                Featured This Week
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-foreground">
                Curated <br />
                <span className="text-zinc-500">Cinema.</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-[45ch] leading-relaxed">
                Experience the finest selection of Hindi cinema, meticulously
                picked for the true cinephile.
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
              <FUllcarousel className="mx-auto w-full max-w-xl lg:ml-auto">
                <CarouselContent className="-ml-4">
                  {featured.map((movie, i) => (
                    <CarouselItem
                      key={movie.imdbid || i}
                      className="pl-4 basis-full md:basis-1/2"
                    >
                      <Card className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] bg-transparent transition-all duration-500 hover:scale-[1.02] hover:border-white/20">
                        <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-shadow duration-500 group-hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]" />
                        <Image
                          src={
                            movie.imageurl?.[0] ||
                            "https://picsum.photos/seed/movie/800/1000"
                          }
                          alt={movie.title || "Movie"}
                          unoptimized
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/90" />
                        <div className="absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 from-brand-primary/10 group-hover:opacity-100" />

                        <CardContent className="absolute right-6 bottom-6 left-6 p-0">
                          <h2 className="text-2xl font-bold tracking-tight text-white line-clamp-1">
                            {movie.title}
                          </h2>
                          <div className="flex gap-4 items-center mt-2.5">
                            <Badge
                              variant="outline"
                              className="text-white border-white/20 px-2 py-0 text-[0.65rem] uppercase tracking-wider bg-white/5"
                            >
                              Hindi
                            </Badge>
                            <span className="flex gap-1.5 items-center font-mono text-sm text-zinc-300">
                              <Star className="size-3.5 fill-brand-accent text-brand-accent" />{" "}
                              {movie.imdb_rating || "7.8"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </FUllcarousel>
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
