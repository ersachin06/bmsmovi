import { MovieListDTO, Category, Actor } from './modals/moviesListDTO';

export class Util
{
    //movieId: number;
    // title: string;
    // description: string;
    // releaseYear: Date;
    // language: Language;
    // rating: number;
    // lastUpdate: Date;
    // startDate: Date;
    // endDate: Date;
    // lastUpdateTemp: Date;
    // slot912: string;
    // slot1215?: any;
    // slot1518?: any;
    // slot1821?: any;
    // goldPrice: number;
    // silverPrice: number;
    // categories: any[];
    // actors: Actor[];
    // originalLanguage: boolean;
    functionDispMovie_MovieListDto(mv:MovieListDTO )
    {
        console.log(mv.movieId+" "+ mv.title+" "+ mv.description+" "+mv.releaseYear+" language id "+mv.language.language_id+" lang last updt: "+mv.language.last_update+" lang name:  "+mv.language.name);
        console.log(mv.rating+" "+mv.lastUpdate+" "+ mv.startDate+" "+mv.endDate+" "+mv.lastUpdateTemp);
        console.log(mv.slot912+" "+mv.slot1215+" "+mv.slot1518+" "+mv.slot1821+" "+ mv.slot1821);
        console.log(mv.goldPrice+" "+mv.silverPrice+" "+mv.originalLanguage);
        mv.categories.forEach((cat:Category)=>{
            console.log("cat name "+cat.name+"  catid: "+ cat.categoryId+" last update: "+cat.lastUpdate);
        })
        mv.actors.forEach((actor:Actor)=>{
            console.log("actor id "+actor.actorId+" actor first name : "+actor.firstName+" actor lastname: "+ actor.lastUpdate+" "+ actor.lastUpdate);
        })
       



    }
}