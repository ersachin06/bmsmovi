import { Action } from '../actions';
import { MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, UserListRequestAction } from '../actions/movie-action';
import {Movie} from '../modal/Movie'
export interface MovieReducerState
{
    loading:boolean;
    loaded:boolean;
    movies:Movie[];
}


const initialState:MovieReducerState={

    loaded:false,
    loading:false,
    movies:[]
};

export function MovieReducer(state=initialState,action:Action) :MovieReducerState
{
 
    switch(action.type)
    {
        case  MOVIE_LIST_REQUEST:{
            return {...state,loading:true};//this is new state-only loading is updated not other parameters of state.
        }
        case MOVIE_LIST_SUCCESS:
            {
            const updateMovies=state.movies.concat(action.payload.data);
            return {...state,loading:false,loaded:true,movies:updateMovies};//this is new state-only loading is updated not other parameters of state.
            }
            default: {
                return state;
            }
    }
}

//selectors - to access state variables seprately - like we can acess ,loading,loaded or movies - sperpately using selectors.
//we create obseravable or behourioul subject to access
export const getLoading=(state:MovieReducerState)=>state.loading;
export const getLoaded=(state:MovieReducerState)=>state.loaded;
export const getMovies=(state:MovieReducerState)=>state.movies;

