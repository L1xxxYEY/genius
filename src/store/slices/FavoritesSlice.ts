import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISong {
  id: number;
  title: string;
  song_art_image_url: string;
  primary_artist: { name: string };
  url: string;
}

interface FavoritesState {
  songs: ISong[];
}

const initialState: FavoritesState = {
  songs: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<ISong>) => {
      const exists = state.songs.find((song) => song.id === action.payload.id);
      if (exists) {
        state.songs = state.songs.filter((song) => song.id !== action.payload.id);
      } else {
        state.songs.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
