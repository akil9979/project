import React from "react";

function Favmovie(){
    function removeFromFav() {
        setFavMovie((prev) => prev.filter((movie) => movie.imdbID !== movies.imdbID));
    }
    return (
        <div>
              <div>
                <img src={favmovie.Poster} alt={favmovie.Title} className="w-40 mx-aut" />
                <button onClick={removeFromFav}>remove</button>
               <div>
               <h2 className="text-2xl font-bold mt-2">{favmovie.Title} </h2>
               <h2>({favmovie.Year})</h2>
               </div>

            </div>
        </div>
    );
}
export default Favmovie;