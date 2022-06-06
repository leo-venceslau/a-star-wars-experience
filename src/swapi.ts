
export interface IFilm {
    characters: string[];
    created: string;
    director: string;
    edited: string;
    episode_id: string;
    opening_crawl: string;
    producer: string;
    release_date: string;
    title: string;
    url: string;
    planets: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
  }

  export interface IMovie {
    data: {
      characters: string[] ;
      created: string;
      director: string;
      edited: string;
      episode_id: string;
      opening_crawl: string;
      producer: string;
      release_date: string;
      title: string;
      url: string;
      planets: string[];
      species: string[];
      starships: string[];
      vehicles: string[];
    }
  }

