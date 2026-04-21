import { Input } from "./searchinput";
import { ModeToggle } from "../comman/theme/themeToggleButton";
import { Suspense } from "react";

export const Navbar = ({ searchParams, children }) => {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        w-full
        border-b border-zinc-300/70 dark:border-white/[0.06]
        bg-zinc-100/90 backdrop-blur-xl backdrop-saturate-150
        dark:bg-zinc-950/85
      "
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent opacity-60" />

      <div className="mx-auto max-w-screen-xl px-6 sm:px-10">
        <div className="flex h-16 items-center justify-between gap-6">

          <a
            id="home"
            href="/"
            className="
              group flex items-center gap-3
              select-none no-underline
            "
          >
            <span
              aria-hidden="true"
              className="
                flex flex-col gap-[3px]
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

            <span className="hidden sm:block h-5 w-px bg-zinc-300 dark:bg-white/20" />

            <span className="hidden sm:block text-[0.6rem] tracking-[0.22em] uppercase text-zinc-400 dark:text-white/30 font-medium leading-none">
              Cinema&nbsp;DB
            </span>
          </a>

          <div className="flex items-center gap-3">

            <Suspense
              fallback={
                <div className="h-9 w-48 animate-pulse rounded-lg bg-zinc-200 dark:bg-white/10" />
              }
            >
              <Input>{children}</Input>
            </Suspense>

            <span className="h-5 w-px bg-zinc-300 dark:bg-white/10" />

            <div className="opacity-70 hover:opacity-100 transition-opacity duration-200">
              <ModeToggle />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};
