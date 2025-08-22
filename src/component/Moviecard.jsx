import  { useState } from "react";
import React from "react";

function MovieCard({ movies }) {
    const [favmovie, setFavMovie] = useState([]);
    function addToFav() {
        setFavMovie((prev) => [...prev, movies]);
    }
    function removeFromFav() {
        setFavMovie((prev) => prev.filter((movie) => movie.imdbID !== movies.imdbID));
    }


    return (
        <div>
            <div>
                <img src={movies.Poster} alt={movies.Title} className="w-40 mx-aut" />
                <button onClick={addToFav}>add to favmovie</button>
                <div>
                <h2 className="text-2xl font-bold mt-2">{movies.Title} </h2>
                <h2>({movies.Year})</h2>
                </div>
                
            </div>
        </div>
    )
}
export default MovieCard;