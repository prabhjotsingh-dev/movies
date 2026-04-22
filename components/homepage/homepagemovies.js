import Image from "next/image";
import { FUllcarousel } from "../fullscreencarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { movieService } from "@/components/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const MovieCard = ({ movie, index }) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-none bg-transparent bezier-premium transition-all duration-500 hover:scale-[1.02]",
        "animate-stagger-fade",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl">
        <Image
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          src={
            movie.imageurl?.[0] || "https://picsum.photos/seed/movie/400/600"
          }
          alt={movie.title || "Movie poster"}
          unoptimized
          fill
        />

        {/* Liquid Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 from-zinc-950 via-zinc-950/20 group-hover:opacity-100" />

        {/* Interaction Layer */}
        <CardContent className="flex absolute inset-0 flex-col justify-end p-4 opacity-0 transition-all duration-500 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex gap-2 mb-3">
            <button className="flex justify-center items-center w-10 h-10 text-black bg-white rounded-full transition-transform hover:scale-110 active:scale-95">
              <Play className="fill-current size-5" />
            </button>
            <button className="flex justify-center items-center w-10 h-10 text-white rounded-full transition-transform glass-morphism hover:scale-110 active:scale-95">
              <Info className="size-5" />
            </button>
          </div>
          <h3 className="text-sm font-bold text-white line-clamp-1">
            {movie.title || "Untitled Movie"}
          </h3>
          <div className="flex gap-2 items-center mt-1">
            <Star className="text-yellow-500 size-3 fill-yellow-500" />
            <span className="font-mono text-xs text-zinc-300">
              {movie.imdb_rating || "N/A"}
            </span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

const HeroFeatured = async () => {
  try {
    const movies = await movieService.getTrendingHindi();
    const featured = movies.results.slice(0, 6);

    return (
      <section className="relative min-h-[70dvh] w-full py-12 px-6 lg:px-12 overflow-hidden bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-12 items-center lg:flex-row">
            {/* Left: Asymmetric Typography & CTA */}
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

            {/* Right: Premium Carousel with Offset Layout */}
            <div className="relative w-full lg:w-1/2">
              <div className="absolute -inset-24 bg-brand-primary/5 blur-[120px] rounded-full" />
              <FUllcarousel className="mx-auto w-full max-w-xl lg:ml-auto">
                <CarouselContent className="-ml-4">
                  {featured.map((movie, i) => (
                    <CarouselItem
                      key={movie.imdbid || i}
                      className="pl-4 basis-full md:basis-1/2"
                    >
                      <Card className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-transparent">
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
                        <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/80" />
                        <CardContent className="absolute right-6 bottom-6 left-6 p-0">
                          <h2 className="text-2xl font-bold text-white line-clamp-1">
                            {movie.title}
                          </h2>
                          <div className="flex gap-4 items-center mt-2">
                            <Badge
                              variant="outline"
                              className="text-white border-white/20"
                            >
                              Hindi
                            </Badge>
                            <span className="flex gap-1 items-center font-mono text-sm text-zinc-300">
                              <Star className="size-3 fill-brand-accent text-brand-accent" />{" "}
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

const MovieSection = async ({ title, fetcher, count = 10 }) => {
  try {
    const movies = await fetcher();
    const results = movies.results
      .filter((i) => i.imageurl && i.imageurl.length > 0)
      .slice(0, count);

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
              View All
            </button>
          </div>

          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-4">
              {results.map((movie, i) => (
                <CarouselItem
                  key={movie.imdbid || i}
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

export const Homepagemovies = async () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroFeatured />

      <div className="space-y-0">
        <MovieSection
          title="Punjabi Originals"
          fetcher={() => movieService.getPunjabi()}
        />

        <MovieSection
          title="Hollywood Hits"
          fetcher={() => movieService.getHollywood()}
        />

        {/* Bento/Grid teaser section for depth */}
        <section className="px-6 py-20 border-t lg:px-12 bg-zinc-950 border-white/5">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative aspect-video md:aspect-auto overflow-hidden rounded-[2.5rem] glass-morphism p-12 flex flex-col justify-end group">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/theatre/1200/800')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700" />
              <div className="relative z-10 space-y-4">
                <Badge className="text-emerald-500 bg-emerald-500/10 border-emerald-500/20">
                  Now Streaming
                </Badge>
                <h3 className="text-4xl font-bold tracking-tighter">
                  Premium Theater <br />
                  Experience at Home
                </h3>
                <p className="text-zinc-400 max-w-[40ch]">
                  Ultra-HD streaming with Dolby Atmos. Feel every heartbeat of
                  the cinema.
                </p>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-[2.5rem] bg-brand-primary p-12 flex flex-col justify-between group">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold tracking-tighter text-white">
                  Join the <br />
                  Pro Club
                </h3>
                <p className="mt-2 text-white/80">
                  Get early access to premieres.
                </p>
              </div>
              <button className="relative z-10 w-full py-4 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                Upgrade Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
