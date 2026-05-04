import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Play, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { TMDBMovie } from "../types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Langauges } from "@/comman/constant";
import routes from "@/comman/routes";

interface MovieCardProps {
  movie: TMDBMovie;
  index: number;
  showLanguage?: boolean;
  showPlayAndDetails?: boolean;
  AllwaysShowNameAndRating?: boolean;
  useBackdropPathForPoster?: boolean;
}

export const MovieCard = ({
  movie,
  index,
  showLanguage = true,
  showPlayAndDetails = true,
  AllwaysShowNameAndRating = false,
  useBackdropPathForPoster = false,
}: MovieCardProps) => {
  const showNameAndRating = AllwaysShowNameAndRating
    ? "opacity-100"
    : "opacity-0 transition-all duration-500 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100";
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-none bg-transparent bezier-premium transition-all duration-500 hover:scale-[1.03]",
        "animate-stagger-fade",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-colors duration-500 group-hover:border-white/20 ${useBackdropPathForPoster ? "aspect-video" : "aspect-[2/3]"}`}
      >
        <Image
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${useBackdropPathForPoster ? movie.backdrop_path : movie.poster_path}`
              : "https://picsum.photos/seed/movie/400/600"
          }
          alt={movie.title || "Movie poster"}
          unoptimized
          fill
        />

        <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-60 transition-opacity duration-500 from-zinc-950 via-zinc-950/40 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-0 transition-opacity duration-500 from-brand-primary/20 group-hover:opacity-100" />

        <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-shadow duration-500 group-hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]" />

        <Link href={routes.movie(String(movie.id))}>
          <CardContent
            className={`flex absolute inset-0 flex-col justify-end p-5 ${showNameAndRating}`}
          >
            {showPlayAndDetails ? (
              <>
                <div className="flex gap-2 mb-3">
                  <button className="flex justify-center items-center w-10 h-10 text-black bg-white rounded-full shadow-xl transition-transform hover:scale-110 active:scale-95">
                    <Play className="fill-current size-5" />
                  </button>
                  <button className="flex justify-center items-center w-10 h-10 text-white rounded-full transition-transform glass-morphism hover:scale-110 active:scale-95">
                    <Info className="size-5" />
                  </button>
                </div>
                <h3 className="text-sm font-bold tracking-tight text-white line-clamp-1">
                  {movie.title || "Untitled Movie"}
                </h3>
              </>
            ) : (
              <h2 className="text-2xl font-bold tracking-tight text-white line-clamp-1">
                {movie.title || "Untitled Movie"}
              </h2>
            )}
            <div className="flex justify-between gap-2 items-center mt-1.5">
              <div className="flex gap-2 items-center">
                {showLanguage && (
                  <Badge
                    variant="outline"
                    className="text-white border-white/20 px-2 py-0 text-[0.65rem] uppercase tracking-wider bg-white/5"
                  >
                    {
                      Langauges.find(
                        (lang) => lang.code === movie.original_language,
                      )?.name
                    }
                  </Badge>
                )}
                <Star className="text-brand-accent size-3 fill-brand-accent" />
                <span className="font-mono text-[0.7rem] text-zinc-300 font-medium tracking-wider">
                  {movie.vote_average?.toFixed(1) || "N/A"}
                </span>
              </div>
              {movie.release_date && (
                <Badge
                  variant="outline"
                  className="text-white border-white/20 px-2 py-0 text-[0.65rem] uppercase tracking-wider bg-white/5"
                >
                  {new Date(movie.release_date).toLocaleString("default", {
                    month: "short",
                  }) +
                    "/" +
                    new Date(movie.release_date).getFullYear()}
                </Badge>
              )}
            </div>
          </CardContent>
        </Link>
      </div>
    </Card>
  );
};
