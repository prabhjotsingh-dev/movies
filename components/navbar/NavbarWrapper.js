"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { getSuggestionsAction } from "@/serverActions/movie-actions";
import Link from "next/link";
import { Film } from "lucide-react";
import routes from "@/comman/routes";

export const NavbarWrapper = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("suggetions");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setIsLoading(true);
      try {
        const data = await getSuggestionsAction(query);
        setSuggestions(data.results || []);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, [query]);

  return (
    <Navbar>
      {query && (
        <div className="w-full">
          {isLoading ? (
            <div className="p-4 text-center text-xs text-zinc-500">
              Loading...
            </div>
          ) : suggestions.length === 0 ? (
            <div
              className="
                flex flex-col items-center gap-2 py-5 px-4
                rounded-xl
                border border-zinc-300/80 dark:border-white/8
                bg-zinc-100/95 dark:bg-zinc-950/90 backdrop-blur-xl
                shadow-xl
              "
            >
              <Film size={18} className="text-zinc-400 dark:text-white/20" />
              <p className="text-xs text-zinc-500 dark:text-white/30">
                No results for "{query}"
              </p>
            </div>
          ) : (
            <ul
              className="
                flex flex-col overflow-hidden rounded-xl
                border border-zinc-300/80 dark:border-white/8
                bg-zinc-100/95 dark:bg-zinc-950/90 backdrop-blur-xl
                shadow-xl divide-y divide-zinc-200 dark:divide-white/[0.04]
              "
            >
              {suggestions.slice(0, 8).map((movie, idx) => (
                <li key={movie.id} className="group relative">
                  <Link
                    href={routes.movie(movie.id)}
                    className="
                      flex items-center gap-3 px-3 py-2.5
                      text-sm text-zinc-600 dark:text-white/60
                      hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/[0.05]
                      transition-colors duration-200
                    "
                  >
                    <span className="flex-shrink-0 text-[10px] font-medium text-amber-600/80 dark:text-amber-400/60 tabular-nums w-[4ch]">
                      {movie.release_date?.slice(0, 4) ?? "—"}
                    </span>
                    <span className="flex-1 leading-snug truncate">
                      {movie.title}
                    </span>
                    <span className="flex-shrink-0 text-[9px] uppercase tracking-widest text-zinc-400 dark:text-white/20 group-hover:text-amber-600/70 dark:group-hover:text-amber-400/50">
                      Movie
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Navbar>
  );
};
