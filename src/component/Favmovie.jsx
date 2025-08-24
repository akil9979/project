import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToFav,removeFromFav } from "../redux/CreateSlice";

function Favmovie(){

   const movies = useSelector((state) => state.movies.favmovie);

   const dispatch = useDispatch();
    return (
        <div>
            <h1>FAVORITE MOVIES</h1>

            <div >
               {movies.map((movie) => (
                       <div className="space-x-6 py-2">
                            <img src={movie.Poster} alt={movie.Title} className="w-40" />
                           <h2 className="text-xl font-bold mt-2">{movie.Title} </h2>
                          <h2>({movie.Year})</h2>
                         <button className="bg-yellow-300 text-black border border-white rounded-xl hover:bg-white" onClick={()=>dispatch(removeFromFav(movie))}>remove to favmovie</button>

                       </div>
                    ))}
               
                
            </div>
        </div>
    );
}
export default Favmovie;
