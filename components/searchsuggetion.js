import Link from "next/link";
import { movieService } from "@/components/utils";
import { Film } from "lucide-react";
import routes from "@/comman/routes";

export async function Sugetions({ searchParams }) {
  const search = searchParams?.suggetions;

  if (!search) return null;

  try {
    const movies = await movieService.getSuggestions(search);
    const results = movies?.results;

    if (!results || results.length === 0) {
      return (
        <div
          className="
            flex flex-col items-center gap-2 py-5 px-4
            rounded-xl
            border border-zinc-300/80 dark:border-white/8
            bg-zinc-100/95 dark:bg-zinc-950/90 backdrop-blur-xl
            shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]
          "
        >
          <Film
            size={18}
            strokeWidth={1.5}
            className="text-zinc-400 dark:text-white/20"
          />
          <p className="text-xs tracking-wide text-zinc-500 dark:text-white/30">
            No results for "{search}"
          </p>
        </div>
      );
    }

    return (
      <ul
        role="listbox"
        aria-label="Search suggestions"
        className="
          flex flex-col
          overflow-hidden
          rounded-xl
          border border-zinc-300/80 dark:border-white/8
          bg-zinc-100/95 dark:bg-zinc-950/90 backdrop-blur-xl
          shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]
          divide-y divide-zinc-200 dark:divide-white/[0.04]
        "
      >
        {results.slice(0, 8).map((movie, idx) => (
          <li
            key={movie.id}
            role="option"
            style={{ animationDelay: `${idx * 35}ms` }}
            className="
              group relative
              animate-[fadeSlideIn_0.25s_cubic-bezier(0.16,1,0.3,1)_both]
            "
          >
            <Link
              href={routes.movie(movie.id)}
              className="
                flex items-center gap-3
                px-3 py-2.5
                text-sm text-zinc-600 dark:text-white/60
                hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/[0.05]
                transition-colors duration-200
                focus:outline-none focus-visible:bg-zinc-200 dark:focus-visible:bg-white/[0.06]
              "
            >
              <span className="flex-shrink-0 text-[10px] font-medium text-amber-600/80 dark:text-amber-400/60 tabular-nums w-[4ch]">
                {movie.release_date?.slice(0, 4) ?? "—"}
              </span>

              <span className="flex-1 leading-snug truncate">
                {movie.title}
              </span>

              <span
                className="
                flex-shrink-0 text-[9px] uppercase tracking-widest
                text-zinc-400 dark:text-white/20 group-hover:text-amber-600/70 dark:group-hover:text-amber-400/50
                transition-colors duration-200
              "
              >
                Movie
              </span>
            </Link>
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    console.error("Search suggestions error:", error);

    return (
      <div
        className="
          flex items-center gap-2 px-3 py-3
          rounded-xl
          border border-red-300/60 dark:border-red-500/10
          bg-zinc-100/95 dark:bg-zinc-950/90 backdrop-blur-xl
          shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]
        "
      >
        <span className="block flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full dark:bg-red-400" />
        <p className="text-xs text-red-600 dark:text-red-400/70">
          Could not load suggestions
        </p>
      </div>
    );
  }
}
