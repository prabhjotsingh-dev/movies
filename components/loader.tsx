import React from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
}

export const Loader = ({ className, size = "md", label }: LoaderProps) => {
  const sizeClasses = {
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-2",
    lg: "h-16 w-16 border-3",
    xl: "h-24 w-24 border-4",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4 justify-center items-center",
        className,
      )}
    >
      <div className={cn("relative", sizeClasses[size])}>
        <div className="absolute inset-0 rounded-full animate-spin border-t-brand-primary" />
        <div className="absolute inset-0 rounded-full border-zinc-500/20" />
      </div>
      {label && (
        <p className="text-sm font-medium tracking-widest uppercase animate-pulse text-muted-foreground">
          {label}
        </p>
      )}
    </div>
  );
};
