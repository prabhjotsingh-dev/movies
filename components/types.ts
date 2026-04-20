
export interface MovieResult {
  imdbid: string;
  title: string;
  imageurl: string[];
  [key: string]: any;
}

export interface SearchResponse {
  results: MovieResult[];
  count: number;
  [key: string]: any;
}

export interface OMDBMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface OMDBSearchResponse {
  Search?: OMDBMovie[];
  totalResults?: string;
  Response: string;
}
