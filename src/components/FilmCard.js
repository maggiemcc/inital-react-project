import { Card } from "@material-ui/core";
import "./FilmCard.css";

const FilmCard = (props) => {
  const { title, directorName, producerName, episodeId, poster, openingCrawl } = props;

  return (
    <Card key={episodeId} className="cardTheme">
      <div>
        <h1>{title}</h1> 

        <div className="posterDiv">
          <img className="poster" src={poster} alt="movie poster" />
        </div>


        <div className="info">
        <h3>Episode: <span>{episodeId}</span></h3>
        <h3>Director: <span>{directorName}</span></h3>
        <h3>Producer(s): <span>{producerName}</span></h3>
        </div>

        <p>{openingCrawl}</p>
      </div>
    </Card>
  );
};

export default FilmCard;
