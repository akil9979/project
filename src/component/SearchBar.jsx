import React, { use } from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './Moviecard';
function SearchBar() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      
        async function onsearch() {

            let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=dc692c28568cc530917eaf3efb43ed41&query=${search}`);
            const Data = await response.json();
            
            return setMovies(Data.results||[]);
        }
        onsearch();
    
    
    }, [search]);
  
    return (
       <>
        <div className='bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 min-h-screen'>
        
            <div className='flex flex-row justify-center items-center'> 
                
                <input className=' border border-black text-black bg-white p-2 mx-2 rounded-xl' id='searchbar' type="text"
                    value={search}
                    placeholder='Search for a movie...'
                    onChange={(e) => setSearch(e.target.value)}
                />
                
            </div>
            <div>
            <h2 className=' p-3 text-center font-bold text-white text-3xl'>MOVIES</h2>
                <div className='flex flex-wrap px-15'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id}  movies={movie} />
                    ))}
                </div>

            </div>
            </div>
        </>
  );


}
  export default SearchBar;