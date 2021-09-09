// import { films } from "../data/films";
// import { Card } from "@material-ui/core";
// // import { blue } from "@material-ui/core/colors";

// const FilmCard = () => {
//   return films.map((film) => {
//     return (
//         <Card className="movieCard" key={film.episode_id}>
//           <div>
//             <div>
//               <h1>{film.title}</h1>
//                 <h3>Episode: {film.episode_id}</h3>

//               <div className="posterDiv">
//                 <img className="poster" src={film.image} alt="movie poster" />
//               </div>
//             </div>

//             <h3>Release Date: {film.release_date}</h3>
//             <h3>Director: {film.director}</h3>
//             <p>{film.opening_crawl}</p>
//           </div>
//         </Card>
//     );
//   });
// };

// export default FilmCard;




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
