"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { Search } from "lucide-react";

export const SearchInput = ({ children }) => {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState("");

  const handleChange = debounce((e) => {
    const val = e.target.value;
    setHasValue(val);
    router.push(`?suggetions=${val}`);
  }, 500);

  useEffect(() => {
    if (hasValue && isFocused) {
      router.push(`?suggetions=${hasValue}`);
    }
    if (!isFocused) {
      const timeoutId = setTimeout(() => {
        router.push("?suggetions=");
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [isFocused]);
  return (
    <div className="flex relative flex-col">
      <div
        className={`
          group relative flex items-center gap-2
          h-9 px-3
          rounded-lg
          border transition-all duration-300
          ${
            isFocused
              ? "border-brand-primary/60 bg-zinc-200/70 dark:bg-white/10 shadow-[inset_0_1px_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              : "border-zinc-300 dark:border-white/10 bg-zinc-200/50 dark:bg-white/5 hover:border-zinc-400/60 dark:hover:border-white/20 hover:bg-zinc-200/80 dark:hover:bg-white/8"
          }
          backdrop-blur-sm
        `}
        style={{
          transition:
            "border-color 0.3s cubic-bezier(0.16,1,0.3,1), background-color 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <Search
          size={14}
          strokeWidth={2}
          className={`
            flex-shrink-0 transition-colors duration-300
            ${isFocused || hasValue ? "text-brand-primary" : "text-zinc-400 dark:text-white/30 group-hover:text-zinc-500 dark:group-hover:text-white/50"}
          `}
        />

        <input
          id="search-input"
          type="search"
          autoComplete="off"
          placeholder="Search films…"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => {
            setHasValue(e.target.value);
            handleChange(e);
          }}
          className="
            w-auto sm:w-52 bg-transparent border-none outline-none
            text-sm text-zinc-800 dark:text-white placeholder-zinc-400 dark:placeholder-white/25
            [&::-webkit-search-cancel-button]:hidden
            [&::-webkit-search-decoration]:hidden
            transition-all duration-300
            focus:w-auto sm:focus:w-64
          "
          style={{ transition: "width 0.4s cubic-bezier(0.16,1,0.3,1)" }}
        />

        <span
          className={`
            absolute bottom-0 left-3 right-3 h-[1.5px] rounded-full
            bg-brand-primary
            transition-all duration-300
            origin-left
            ${isFocused ? "scale-x-100 opacity-70" : "scale-x-0 opacity-0"}
          `}
          style={{
            transition:
              "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease",
          }}
        />
      </div>

      {children && (
        <div className="absolute top-full left-0 mt-1.5 z-50 w-full min-w-[14rem]">
          {children}
        </div>
      )}
    </div>
  );
};
