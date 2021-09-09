import { Card } from "@material-ui/core";
import "./FilmCard.css";

const FilmCard = (props) => {
  const { title, directorName, episodeId, poster, openingCrawl } = props;

  return (
    <Card key={episodeId} className="card">
      <div>
        <h1>{title}</h1>
        <h3>Episode: {episodeId}</h3>
        <h3>Director: {directorName}</h3>
        <div className="posterDiv">
          <img className="poster" src={poster} alt="movie poster" />
        </div>
        <p>{openingCrawl}</p>
      </div>
    </Card>
  );
};

export default FilmCard;
