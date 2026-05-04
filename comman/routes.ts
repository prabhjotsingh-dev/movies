const routes = {
  home: "/",
  movie: (movieId: string): string => {
    return `/movie/${movieId}`;
  },
  filters: "/filters",
  filterByLanguage: (language: string): string => {
    return `/filters/${language}`;
  },
};
export default routes;
