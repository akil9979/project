import React, { use } from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './Moviecard';
function SearchBar() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const timeout = setTimeout(() => {
        async function onsearch() {

            let response = await fetch(`https://www.omdbapi.com/?apikey=7a06fa1d&s=${search}`);
            const Data = await response.json();
            return setMovies(Data.Search || []);
        }
        onsearch();
    }, 500);
    return () => clearTimeout(timeout); 
    }, [search]);

    return (
       <>
            <div>
                <h1>movie explore</h1>
                <input id='searchbar' type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div>
                <h2>MOVIE</h2>
                <div className='flex flex-wrap'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID}  movies={movie} />
                    ))}
                </div>

            </div>

        </>
                );


}
  export default SearchBar;