import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToFav,removeFromFav } from "../redux/CreateSlice";

function Favmovie(){

   const movies = useSelector((state) => state.movies.favmovie);

   const dispatch = useDispatch();
    return (
        <div  className='bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 min-h-screen '>
            <h1 className="p-3 text-center font-bold text-white text-3xl">FAVORITE MOVIES</h1>

            <div className=" flex flex-wrap px-15">
               {movies.map((movie) => (
                       <div  >
                        <div className="space-x-6 py-2">
                               <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.Title} className="w-40" />
                            
                                  <h2 className="text-xl font-bold mt-2">{movie.original_title} </h2>
                               
                               <h2>({movie.release_date?.slice(0,4)})</h2>
                         <button className="bg-yellow-300 text-black border border-white rounded-xl hover:bg-white cursor-pointer" onClick={()=>dispatch(removeFromFav(movie))}>remove to favmovie</button>

                       </div>
                       </div>
                    ))}
               
                
            </div>
        </div>
    );
}
export default Favmovie;
