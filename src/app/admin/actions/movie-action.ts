export const MOVIE_LIST_REQUEST ='movie list request';
export const MOVIE_LIST_SUCCESS ='movie list success';
//export const MOVIE_LIST_FAILURE ='movie list failure';
import {Movie} from '../modal/Movie'
export class    MovieListRequestAction
{
    readonly type = MOVIE_LIST_REQUEST;
}

export class MovieListSuccessAction
{
    readonly type=MOVIE_LIST_SUCCESS;

    
    constructor (public payload?:{data:Movie[]})
    {

    }
}