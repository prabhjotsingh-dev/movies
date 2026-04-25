import Image from "next/image";
import { notFound } from "next/navigation";
import { movieService } from "@/components/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Star,
  Calendar,
  Clock,
  Film,
  Globe,
  Award,
  Users,
  Clapperboard,
} from "lucide-react";

export default async function MoviePage({ params }) {
  const { movie: movieId } = params;

  let movie = {};
  try {
    movie = await movieService.getMovieDetails(movieId);
    console.log(movie);
  } catch (error) {
    console.error("Failed to fetch movie:", error);
    notFound();
  }

  if (movie.Response === "False" || movie.Error) {
    notFound();
  }

  const rating = movie.imdbRating !== "N/A" ? movie.imdbRating : null;
  const runtime = movie.Runtime !== "N/A" ? movie.Runtime : null;
  const year = movie.Year;
  const genres = movie.Genre?.split(", ").filter(Boolean) || [];
  const actors = movie.Actors?.split(", ").filter(Boolean) || [];
  const directors = movie.Director?.split(", ").filter(Boolean) || [];
  const writers = movie.Writer?.split(", ").filter(Boolean) || [];
  const languages = movie.Language?.split(", ").filter(Boolean) || [];
  const countries = movie.Country?.split(", ").filter(Boolean) || [];

  return (
    <main className="min-h-[100dvh] bg-background px-6 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Poster Image */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 aspect-[2/3] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-muted shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              {movie.Poster && movie.Poster !== "N/A" ? (
                <Image
                  src={
                    movie.Poster || "https://picsum.photos/seed/movie/400/600"
                  }
                  alt={movie.Title || "Poster"}
                  unoptimized
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex absolute inset-0 justify-center items-center bg-muted">
                  <Film className="size-16 text-muted-foreground" />
                </div>
              )}
              {/* Liquid Glass Refraction Border */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" />
            </div>
          </div>

          {/* Right Column: Content & Bento Grid */}
          <div className="flex flex-col gap-12 lg:col-span-8">
            {/* Hero Header Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                {movie.Type && (
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 text-xs font-medium tracking-widest uppercase"
                  >
                    {movie.Type}
                  </Badge>
                )}
                {year && (
                  <Badge
                    variant="outline"
                    className="flex gap-1.5 items-center px-3 py-1 text-xs font-medium tracking-widest uppercase"
                  >
                    <Calendar className="size-3" />
                    {year}
                  </Badge>
                )}
                {rating && (
                  <Badge
                    variant="outline"
                    className="flex gap-1.5 items-center px-3 py-1 text-xs font-medium tracking-widest uppercase"
                  >
                    <Star className="size-3" />
                    {rating}
                  </Badge>
                )}
                {runtime && (
                  <Badge
                    variant="outline"
                    className="flex gap-1.5 items-center px-3 py-1 text-xs font-medium tracking-widest uppercase"
                  >
                    <Clock className="size-3" />
                    {runtime}
                  </Badge>
                )}
              </div>

              <h1 className="text-5xl font-bold tracking-tighter leading-none text-foreground md:text-7xl">
                {movie.Title}
              </h1>

              {movie.Plot && movie.Plot !== "N/A" && (
                <p className="max-w-[65ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {movie.Plot}
                </p>
              )}

              {genres.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {genres.map((genre) => (
                    <Badge key={genre} variant="secondary" className="text-xs">
                      {genre}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Asymmetric Bento Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {/* Cast Card (Spans 3 cols) */}
              <Card className="bg-card md:col-span-3 rounded-[2.5rem] border-border/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <CardHeader className="flex flex-col gap-1 pb-4">
                  <CardDescription className="text-xs font-bold tracking-widest uppercase">
                    Lead Cast
                  </CardDescription>
                  <CardTitle className="text-2xl font-semibold tracking-tight text-foreground">
                    {actors[0] || "Unknown"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {actors.length > 1 && (
                    <p className="leading-relaxed text-muted-foreground">
                      {actors.slice(1).join(", ")}
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Director Card (Spans 2 cols, Inverted Theme) */}
              <Card className="bg-primary text-primary-foreground md:col-span-2 rounded-[2.5rem] border-transparent shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <CardHeader className="flex flex-col gap-1">
                  <CardDescription className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70">
                    Director
                  </CardDescription>
                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    {directors.join(", ") || "Unknown"}
                  </CardTitle>
                </CardHeader>
              </Card>

              {/* Accolades Card (Spans 2 cols, Secondary Theme) */}
              <Card className="bg-secondary text-secondary-foreground md:col-span-2 rounded-[2.5rem] border-transparent shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <CardHeader className="flex flex-col gap-1">
                  <CardDescription className="text-xs font-bold tracking-widest uppercase text-secondary-foreground/70">
                    Accolades
                  </CardDescription>
                  <CardTitle className="text-lg font-medium tracking-tight leading-snug">
                    {movie.Awards && movie.Awards !== "N/A"
                      ? movie.Awards
                      : "No notable awards"}
                  </CardTitle>
                </CardHeader>
              </Card>

              {/* Production Details Card (Spans 3 cols) */}
              <Card className="bg-card md:col-span-3 rounded-[2.5rem] border-border/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <CardHeader className="flex flex-col gap-1 pb-4">
                  <CardDescription className="text-xs font-bold tracking-widest uppercase">
                    Production Details
                  </CardDescription>
                  {writers.length > 0 && (
                    <CardTitle className="text-xl font-medium tracking-tight text-foreground">
                      {writers[0]}
                    </CardTitle>
                  )}
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                  {writers.length > 1 && (
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                        Also Written By
                      </span>
                      <span className="font-medium text-muted-foreground">
                        {writers.slice(1).join(", ")}
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    {languages.length > 0 && (
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                          Language
                        </span>
                        <span className="font-medium text-foreground">
                          {languages.join(", ")}
                        </span>
                      </div>
                    )}
                    {countries.length > 0 && (
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                          Country
                        </span>
                        <span className="font-medium text-foreground">
                          {countries.join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
