import { movieService } from "@/components/utils";
import { HeroFeatured } from "./HeroFeatured";
import { MovieSection } from "./MovieSection";
import { FooterSection } from "./FooterSection";

export const Homepagemovies = async () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroFeatured />

      <div className="flex flex-col gap-8">
        <MovieSection
          title="Punjabi Originals"
          language="Punjabi"
          fetcher={() => movieService.getPunjabi()}
        />
        <MovieSection
          title="Hindi Originals"
          language="Hindi"
          fetcher={() => movieService.getHindi()}
        />
        {/* <MovieSection
          language="Punjabi Originals"
          fetcher={() => movieService.getPunjabi()}
        />
        <MovieSection
          language="Punjabi Originals"
          fetcher={() => movieService.getPunjabi()}
        /> */}

        <MovieSection
          title="Hollywood Hits"
          language="English"
          fetcher={() => movieService.getHollywood()}
        />

        <FooterSection />
      </div>
    </main>
  );
};
