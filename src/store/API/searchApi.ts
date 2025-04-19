// src/store/api/searchApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = '/api'; // Через прокси

// Тип для результата поиска (песня)
export interface IArtist {
  id: number;
  name: string;
  url: string;
  image_url: string;  // Это поле для изображения артиста
}

interface ISong {
  id: number;
  full_title: string;
  url: string;
  primary_artist: IArtist;}

interface ISearchResponse {
  status: number;
  response: {
    hits: {
      result: ISong;
    }[];
  };
}


export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    searchSongs: builder.query<ISong[], string>({
      query: (query) => ({
        url: '/search',
        params: { q: query },
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GENIUS_ACCESS_TOKEN}`,
        },
      }),
      transformResponse: (response: ISearchResponse) => response.response.hits.map(hit => hit.result),
    }),
  }),
});

export const { useSearchSongsQuery } = searchApi;








