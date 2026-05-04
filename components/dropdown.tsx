import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check } from "lucide-react";

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const Dropdown = ({
  label,
  options,
  value,
  onChange,
}: DropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="px-5 py-2 h-auto text-sm font-medium rounded-full transition-all border-border/50 bg-card/40 hover:bg-secondary/80 hover:text-foreground bezier-premium"
        >
          {label}: <span className="ml-1 text-foreground">{value}</span>
          <ChevronDown className="ml-2 w-4 h-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="p-2 w-48 rounded-xl shadow-xl backdrop-blur-md bg-card/90 border-border/50 z-[100]"
        align="start"
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => onChange(option)}
            className="py-2.5 px-3 rounded-lg cursor-pointer flex items-center justify-between hover:bg-secondary transition-colors"
          >
            <span className={option === value ? "font-semibold" : ""}>
              {option}
            </span>
            {option === value && <Check className="w-4 h-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
