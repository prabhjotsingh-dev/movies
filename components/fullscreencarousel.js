"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@/components/ui/carousel";

export const AutoplayCarousel = ({ children, className }) => {
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
