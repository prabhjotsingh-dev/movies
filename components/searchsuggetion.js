import Link from "next/link";
import { movieService } from "@/components/utils";

export async function Sugetions({ searchParams }) {
  const search = searchParams?.suggetions;

  if (search) {
    try {
      const movies = await movieService.getSuggestions(search);
      
      return (
        <ul className={`flex flex-col gap-1 rounded-md text-black w-fit h-fit ml-[1.3lh] absolute`}>
          {movies.Search ? movies.Search.map((movie) => (
            <li key={movie.imdbID} className="bg-blue-100 w-[18ch] border-black rounded-md ">
              <Link href={`?suggetions=new`} className="px-3 text-wrap">
                {movie.Title.length > 15
                  ? movie.Title.slice(0, 12) + "..."
                  : movie.Title}
              </Link>
            </li>
          )) : " "}
        </ul>
      );
    } catch (error) {
      console.error("Search suggestions error:", error);
      return null;
    }
  }
  
  return <p>No suggestions</p>;
}
