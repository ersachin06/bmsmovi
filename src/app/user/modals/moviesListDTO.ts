

    export interface Language {
        language_id: number;
        name: string;
        last_update: Date;
    }

    export interface Actor {
        actorId: number;
        firstName: string;
        lastUpdate: Date;
        lastName: string;
    }
    export interface Category {
        categoryId: number;
        name: string;
        lastUpdate: Date;
    }
    export interface MovieListDTO {
        movieId: number;
        title: string;
        description: string;
        releaseYear: Date;
        language: Language;
        rating: number;
        lastUpdate: Date;
        startDate: Date;
        endDate: Date;
        lastUpdateTemp: Date;
        slot912: string;
        slot1215?: any;
        slot1518?: any;
        slot1821?: any;
        goldPrice: number;
        silverPrice: number;
        //categories: any[];
        categories: Category[];
        actors: Actor[];
        originalLanguage: boolean;
    }



