import { films } from "../data/films";
import { Card } from "@material-ui/core";
// import { blue } from "@material-ui/core/colors";

const FilmCard = () => {
  return films.map((film) => {
    return (
        <Card className="movieCard" key={film.episode_id}>
          <div>
            <div>
              <h1>{film.title}</h1>
                <h3>Episode: {film.episode_id}</h3>

              <div className="posterDiv">
                <img className="poster" src={film.image} alt="movie poster" />
              </div>
            </div>

            <h3>Release Date: {film.release_date}</h3>
            <h3>Director: {film.director}</h3>
            <p>{film.opening_crawl}</p>
          </div>
        </Card>
    );
  });
};

export default FilmCard;

// let iconCode = weatherInfo.list[i].weather[0].icon;
// let iconPath = "//openweathermap.org/img/w/" + iconCode + ".png";
// let theIcon = document.createElement("img");
// theIcon.src = iconPath;
