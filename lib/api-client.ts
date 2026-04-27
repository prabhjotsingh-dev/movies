import axios, { AxiosRequestConfig } from "axios";

export async function tmdbFetch<T>(
  endpoint: string,
  options: AxiosRequestConfig = {},
): Promise<T> {
  const url = `${process.env.TMBD_API_URL || "https://api.themoviedb.org/3"}${endpoint}`;

  const defaultOptions: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.TMBD_API_READ_TOKEN}`,
      accept: "application/json",
    },
    ...options,
  };

  try {
    const response = await axios(url, defaultOptions);
    return response.data;
  } catch (error) {
    console.error("TMDB Axios Error:", error);
    throw error;
  }
}
