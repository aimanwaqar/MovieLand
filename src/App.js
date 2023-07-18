import './App.css';
import SearchIcon from './search.svg';
import {useEffect, useState} from 'react'
import MovieCard from './components/MovieCard';

//bc5961dd

const API_URL = 'http://www.omdbapi.com?apikey=bc5961dd';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSeacrh] = useState([]);
  
  const searchMovie = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(()=>{
     searchMovie('Spiderman');
  }, []);

  const movie1 = 
    {
      "Title": "Italian Spiderman",
      "Year": "2007",
      "imdbID": "tt2705436",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
  }


  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search for Movies' value={search}
        onChange={(e)=> setSeacrh(e.target.value)}
         />
         <img src={SearchIcon} alt="search" onClick={()=>searchMovie(search)} />
      </div>
      
      
      {
         movies?.length > 0 
         ? (
          <div className='container'>
          {movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))}

        </div>
         ) : (
             <div className='empty'>
              <h2>No movies Found</h2>
              </div>
         )
      }

      
    </div>
  );
}

export default App;
