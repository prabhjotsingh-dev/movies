import { SearchInput } from "./searchinput";
import { ModeToggle } from "../../comman/theme/themeToggleButton";
import { Suspense } from "react";
import Link from "next/link";

export const Navbar = ({ searchParams, children }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-300/70 dark:border-white/[0.06] bg-zinc-100/90 backdrop-blur-xl backdrop-saturate-150 dark:bg-zinc-950/85">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent opacity-60" />

      <div className="px-6 mx-auto max-w-screen-xl sm:px-10">
        <div className="flex gap-6 justify-between items-center h-16">
          <Link
            id="home"
            href="/"
            className="flex gap-3 items-center no-underline select-none group"
          >
            <span
              aria-hidden="true"
              className="
                hidden sm:flex flex-col gap-[3px]
                opacity-50 group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block h-[5px] w-[5px] rounded-full bg-brand-primary"
                />
              ))}
            </span>

            <span
              className="
                font-black uppercase tracking-[0.18em]
                text-[1.05rem] leading-none
                text-zinc-800 dark:text-white
                group-hover:text-brand-primary
                transition-colors duration-300
              "
            >
              Movies
            </span>

            <span className="hidden w-px h-5 sm:block bg-zinc-300 dark:bg-white/20" />

            <span className="hidden sm:block text-[0.6rem] tracking-[0.22em] uppercase text-zinc-400 dark:text-white/30 font-medium leading-none">
              Cinema&nbsp;DB
            </span>
          </Link>

          <div className="flex gap-3 items-center">
            <Suspense
              fallback={
                <div className="w-48 h-9 rounded-lg animate-pulse bg-zinc-200 dark:bg-white/10" />
              }
            >
              <SearchInput>{children}</SearchInput>
            </Suspense>

            <span className="hidden w-px h-5 sm:block bg-zinc-300 dark:bg-white/10" />

            <div className="opacity-70 transition-opacity duration-200 hover:opacity-100">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
