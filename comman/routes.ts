const routes = {
  home: "/",
  movie: (movieId: string): string => {
    return `/movie/${movieId}`;
  },
  filter: "/filter",
};
export default routes;
