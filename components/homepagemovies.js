import Image from "next/image"
import { FUllcarousel } from "./fullscreencarousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { movieService } from "@/components/utils";

const TopTrending = async () => {
  try {
    const movies = await movieService.getTrendingHindi();

    return (
      <section className="bg-white dark:bg-black w-svw ">
        <FUllcarousel className="m-2 border-2 border-black rounded-lg dark:border-white">
          <CarouselContent className="">
            {movies.results.slice(0, 5).map((movie, i) => (
              <CarouselItem key={movie.imdbid || i} className="pl-1 basis-1/3">
                <div className='m-1 border-2 border-white rounded-sm'>
                  <Image className='w-[100%] rounded-sm'
                    src={movie.imageurl[0]}
                    alt="sample image"
                    unoptimized
                    width={150}
                    height={180}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent border-transparent dark:text-white left-2" />
          <CarouselNext className="bg-transparent border-transparent dark:text-white right-2" />
        </FUllcarousel>
      </section>
    );
  } catch (error) {
    console.error(error);
    return <p className="flex items-center justify-center">something went wrong</p>;
  }
};

const Hollywood = async () => {
  try {
    const movies = await movieService.getHollywood();

    return (
      <section className="bg-white border-2 rounded-sm dark:bg-black w-svw ">
        <div className="rounded-lg">
          <Carousel className="m-2 rounded-lg w-fit">
            <CarouselContent className="">
              {movies.results.filter(i => i.imageurl && i.imageurl.length > 0).map((movie, i) => (
                <CarouselItem key={movie.imdbid || i} className="pl-1 basis-auto">
                  <Image className='rounded-sm'
                    src={movie.imageurl[0]}
                    alt="sample image"
                    unoptimized
                    width={150}
                    height={180}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    return <p className="flex items-center justify-center">something went wrong</p>;
  }
};

const Punjabi = async () => {
  try {
    const movies = await movieService.getPunjabi();

    return (
      <section className="bg-white border-2 rounded-sm dark:bg-black w-svw ">
        <div className="rounded-lg">
          <Carousel className="m-2 rounded-lg w-fit">
            <CarouselContent className="">
              {movies.results.filter(i => i.imageurl && i.imageurl.length > 0).map((movie, i) => (
                <CarouselItem key={movie.imdbid || i} className="pl-1 basis-auto">
                  <Image className='rounded-sm'
                    src={movie.imageurl[0]}
                    alt="sample image"
                    unoptimized
                    width={150}
                    height={180}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    return <p className="flex items-center justify-center">something went wrong</p>;
  }
};

export const Homepagemovies = async () => {
  return (
    <>
      <TopTrending />
      <div>
        <h1>Punjabi Movies</h1>
        <Punjabi />
      </div>
      <div>
        <h1>Hollywood</h1>
        <Hollywood />
      </div>
    </>
  );
};
