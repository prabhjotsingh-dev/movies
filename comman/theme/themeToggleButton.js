"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? theme === "dark" : false;

  return (
    <Button
      id="theme-toggle"
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative h-8 w-8 rounded-lg overflow-hidden",
        "border transition-all duration-200",
        "bg-zinc-200/60 border-zinc-300 hover:bg-zinc-300/80 hover:border-zinc-400/70",
        "dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-amber-400/40",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
        "focus-visible:ring-amber-500/40 dark:focus-visible:ring-amber-400/40",
        "focus-visible:ring-offset-zinc-100 dark:focus-visible:ring-offset-black",
        "active:scale-[0.92]"
      )}
      style={{ transition: "background-color 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.15s cubic-bezier(0.16,1,0.3,1)" }}
    >
      <Sun
        size={14}
        strokeWidth={2}
        className={cn(
          "absolute text-amber-600 dark:text-amber-400 transition-all duration-300",
          isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        )}
        style={{ transition: "opacity 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1)" }}
      />

      <Moon
        size={14}
        strokeWidth={2}
        className={cn(
          "absolute text-zinc-500 dark:text-white/60 group-hover:text-zinc-700 dark:group-hover:text-white/90 transition-all duration-300",
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        )}
        style={{ transition: "opacity 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1), color 0.2s ease" }}
      />

      <span
        className={cn(
          "absolute bottom-[3px] right-[3px] h-[3px] w-[3px] rounded-full bg-amber-400 transition-all duration-300",
          isDark ? "opacity-60 scale-100" : "opacity-0 scale-0"
        )}
      />
    </Button>
  );
}
