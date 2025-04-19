import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = '/api';

interface IArtist {
  id: number;
  name: string;
  image_url: string;
  header_image_url: string;
  url: string;
  description?: {
    plain: string;
  };
  followers_count?: number;
}

interface IArtistResponse {
  meta: { status: number };
  response: {
    artist: IArtist;
  };
}

export const artistApi = createApi({
  reducerPath: 'artistApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getArtistById: builder.query<IArtist, number>({
      query: (artistId) => ({
        url: `/artists/${artistId}`,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GENIUS_ACCESS_TOKEN}`,
        },
      }),
      transformResponse: (response: IArtistResponse) => response.response.artist,
    }),
  }),
});

export const { useGetArtistByIdQuery } = artistApi;
