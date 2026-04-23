"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@/components/ui/carousel";

interface FUllcarouselProps {
  children: React.ReactNode;
  className?: string;
}

export const FUllcarousel = ({ children, className }: FUllcarouselProps) => {
  return (
    <Carousel
      className={`${className}`}
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      {children}
    </Carousel>
  );
};
