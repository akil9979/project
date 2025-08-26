import { createSlice } from "@reduxjs/toolkit";
const loadFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem("favmovie");
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Could not load from localStorage", e);
    return [];
  }
};
const initialState = {
  favmovie: loadFromLocalStorage(),
}
const movieSlice = createSlice({
    name:"moviesReducer",
    initialState,
    reducers:{
         addToFav:(state,action)=> {
           state.favmovie.push(action.payload);
           localStorage.setItem("favmovie", JSON.stringify(state.favmovie));
        },
         removeFromFav:(state,action)=> {
         
           state.favmovie = state.favmovie.filter(
            (movie) => movie.id !== action.payload.id
          );
          localStorage.setItem("favmovie", JSON.stringify(state.favmovie));
        },
    }
})
export const { addToFav, removeFromFav } = movieSlice.actions;
export default movieSlice.reducer;