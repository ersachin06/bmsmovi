import { ActionReducerMap, createSelector } from "@ngrx/store";
// import { MovieReducer, MovieReducerState } from "./movie-reducer";
import * as fromMovie from "./movie-reducer";
//it will store state of all reducer.
export interface RootReducerState
{
    movies:fromMovie.MovieReducerState;
}

//bahut sare reducer ko combine karne ke liye ActionReducerMap we are using
export const rootReducer:ActionReducerMap<RootReducerState>={
    movies:fromMovie.MovieReducer
}

export const getMovieState= (state:RootReducerState)=>state.movies;

//we want to seelct only selected values from state.
//we will use these 3 selectors in our components 
export const getMovieLoaded=createSelector(getMovieState,fromMovie.getLoaded);
export const getMovieLoading=createSelector(getMovieState,fromMovie.getLoading);
export const getMovies=createSelector(getMovieState,fromMovie.getMovies);