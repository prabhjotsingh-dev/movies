export async function rapidFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${process.env.RAPID_API_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || '',
      'X-RapidAPI-Host': process.env.RAPIDAPI_HOST || '',
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    if (!response.ok) {
      throw new Error(`RapidAPI request failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("RapidAPI Fetch Error:", error);
    throw error;
  }
}

export async function omdbFetch<T>(query: string, options: RequestInit = {}): Promise<T> {
  const url = `${process.env.OMBD_URL}?apikey=${process.env.OMBD_API_KEY}&${query}`;
  
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`OMDB request failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("OMDB Fetch Error:", error);
    throw error;
  }
}
