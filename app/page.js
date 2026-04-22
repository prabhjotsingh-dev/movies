import { Homepagemovies } from "@/components/homepage/homepagemovies";
import { Navbar } from "@/components/navbar";
import { Sugetions } from "@/components/searchsuggetion";
export default function Home({ searchParams }) {
  return (
    <div>
      <Navbar>
        <Sugetions searchParams={searchParams} />
      </Navbar>
      <Homepagemovies />
    </div>
  );
}
