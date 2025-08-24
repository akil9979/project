import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favmovie: [],
}
const movieSlice = createSlice({
    name:"moviesReducer",
    initialState,
    reducers:{
         addToFav:(state,action)=> {
           state.favmovie.push(action.payload);
        },
         removeFromFav:(state,action)=> {
         
           state.favmovie = state.favmovie.filter(
            (movie) => movie.imdbID !== action.payload.imdbID
          );
        },
    }
})
export const { addToFav, removeFromFav } = movieSlice.actions;
export default movieSlice.reducer;