

    export interface Language {
        language_id: number;
        name: string;
     //   last_update: Date;
    }

    export interface Category {
        categoryId: number;
        name: string;
      //lastUpdate: Date;
    }

    export interface Actor {
        actorId: number;
        firstName: string;
      //  lastUpdate: Date;
        lastName: string;
    }

    export interface Movie {
        movieId: number;
        title: string;
        description: string;
       // releaseYear: Date;
        language: Language;
        rating: number;
     //   lastUpdate?: Date;
       // startDate?: Date;
        //endDate?: Date;
        //lastUpdateTemp?: Date;
        slot912: string;
        slot1215: string;
        slot1518: string;
        slot1821: string;
        goldPrice: number;
        silverPrice: number;
        categories: Category[];
        actors: Actor[];
        originalLanguage: boolean;
    }


