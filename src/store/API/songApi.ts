
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ISongDetails {
  id: number;
  title: string;
  full_title: string;
  song_art_image_url: string;
  primary_artist: {
    name: string;
  };
  url: string;
}

interface IGetSongByIdResponse {
  meta: {
    status: number;
  };
  response: {
    song: ISongDetails;
  };
}

const API_URL = '/api';  // Прокси на Vite

export const songApi = createApi({
  reducerPath: 'songApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,  // Прокси
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_GENIUS_ACCESS_TOKEN;
      
      // Добавление заголовка авторизации
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongById: builder.query<ISongDetails, number>({
      query: (id) => `/songs/${id}`,
      transformResponse: (response: IGetSongByIdResponse) => response.response.song,
    }),
  }),
});

export const { useGetSongByIdQuery } = songApi;



