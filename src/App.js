import "./App.css";
import "./components/FilmCard";
import FilmCard from "./components/FilmCard";

const App = () => {
  return (
    <div className="App">
      
      <div>
        <h1>Star Wars Movies</h1>
      </div>

      <FilmCard />
    </div>
  );
};

export default App;
