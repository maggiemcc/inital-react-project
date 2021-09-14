import { films } from "../data/films";
import FilmCard from "./FilmCard";

const FilmContainer = () => {
  return (
    <div>
      {films.map((film) => {
        return (
          <FilmCard
            key={film.episode_id}
            title={film.title}
            directorName={film.director}
            producerName={film.producer}
            episodeId={film.episode_id}
            poster={film.image}
            openingCrawl={film.opening_crawl}
          />
        );
      })}
    </div>
  );
};

export default FilmContainer;
