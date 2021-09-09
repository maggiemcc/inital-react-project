import { films } from "../data/films";
import FilmCard from "./FilmCard";

const FilmContainer = () => {
  return (
    <div>
      {films.map((film) => {
        return (
          <FilmCard
            title={film.title}
            directorName={film.director}
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
