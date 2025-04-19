import { SMainPage } from "./MainPage.styled";
import SongSearch from "../../components/SearchSong/SearchSong";
import { useState } from "react";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { SongList } from "../../components/SongList/SongList";
import { useGetArtistByIdQuery } from "../../store/API/artistApi";
import { useGetSongByIdQuery } from "../../store/API/songApi";
import Footer from "../../components/Footer/Footer";
import { NewsFeature } from "../../components/NewsFeature/NewsFeature";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/UI/Title/Title";
import { NewsMainCard } from "../../components/NewsMainCard/NewsMainCard";
import { NavBar } from "../../components/NavBar/NavBar";
import { VideoBlock } from "../../components/VideoBlock/VideoBlock";

export const MainPage = () => {
  const [artistIds] = useState([
    16775, 2, 4, 11541, 3211, 17631, 204, 13245,
  ]);

  const [songIds] = useState([378195, 1, 235729, 3, 86140, 4, 7, 11, 15, 17]);

  const artistQueries = artistIds.map((id) => useGetArtistByIdQuery(id));
  const songQueries = songIds.map((id) => useGetSongByIdQuery(id));

  return (
    <SMainPage>
      <Header />

      <NavBar />

      <SongSearch />

      <div className="NewsFeatureWrapper" id="featured">
        <NewsFeature
          category="News"
          title="Ido Zmishlany’s Quest To Create Modern Classics"
          description="The songwriter and producer has worked with Sabrina Carpenter, Tate McRae, and JENNIE, among others."
          author="Ken Partridge"
          date="Apr. 15, 2025"
          image="/img/ido.png"
        />
      </div>

      <NewsMainCard />

      <div className="FeaturedSongs" id="charts">
        <Title titleText="CHARTS" titleType="h2" />
        <div className="song-list">
          {songQueries.map((query, index) => {
            const { data, error, isLoading } = query;

            if (isLoading) return <p key={index}>Loading song...</p>;
            if (error)
              return <p key={index}>Failed to load song {songIds[index]}</p>;
            if (!data) return <p key={index}>No song data available.</p>;

            return <SongList key={data.id} song={data} index={index} />;
          })}
        </div>
      </div>

      <VideoBlock/>

      <div className="FeaturedArtists" id="artist">
        <Title titleText="Featured Artists" titleType="h2" />
        <div className="artist-list">
          {artistQueries.map((query, index) => {
            const { data, isLoading } = query;

            if (isLoading) return <p key={index}>Loading artist...</p>;

            return data ? <ArtistCard key={data.id} artist={data} /> : null;
          })}
        </div>
      </div>

      <Footer />
    </SMainPage>
  );
};
