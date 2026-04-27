import { movieService } from "@/components/utils";
import { HeroFeatured } from "./HeroFeatured";
import { MovieSection } from "./MovieSection";
import { FooterSection } from "./FooterSection";

export const Homepagemovies = async () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroFeatured />

      <div className="space-y-0">
        <MovieSection
          title="Punjabi Originals"
          fetcher={() => movieService.getPunjabi()}
        />

        <MovieSection
          title="Hollywood Hits"
          fetcher={() => movieService.getHollywood()}
        />

        <FooterSection />
      </div>
    </main>
  );
};
