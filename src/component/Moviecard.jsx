import { addToFav,removeFromFav } from "../redux/CreateSlice";
import React from "react";
import { useDispatch } from "react-redux";

function MovieCard({ movies }) {
   
   const dispatch = useDispatch();
   


    return (
        <div >
            <div className="space-x-6 py-2">
                <img src={movies.Poster} alt={movies.Title} className="w-40" />
                <h2 className="text-xl font-bold mt-2">{movies.Title} </h2>
                <h2>({movies.Year})</h2>
                <button className="bg-yellow-300 text-black border border-white rounded-xl hover:bg-white" onClick={()=>dispatch(addToFav(movies))}>add to favmovie</button>
               
                 
                
                
            </div>
        </div>
    )
}
export default MovieCard;