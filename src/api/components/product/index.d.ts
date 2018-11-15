interface Item {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network;
    webChannel?: any;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
    _embedded: Embedded;
  }
  
  interface Embedded {
    episodes: Episode[];
    cast: Cast[];
  }
  
  interface Cast {
    person: Person;
    character: Character;
    self: boolean;
    voice: boolean;
  }
  
  interface Character {
    id: number;
    url: string;
    name: string;
    image?: Image;
    _links: Links2;
  }
  
  interface Person {
    id: number;
    url: string;
    name: string;
    country?: Country;
    birthday?: string;
    deathday?: any;
    gender?: string;
    image: Image;
    _links: Links2;
  }
  
  interface Episode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: Image;
    summary: string;
    _links: Links2;
  }
  
  interface Links2 {
    self: Self;
  }
  
  interface Links {
    self: Self;
    previousepisode: Self;
  }
  
  interface Self {
    href: string;
  }
  
  interface Image {
    medium: string;
    original: string;
  }
  
  interface Externals {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  }
  
  interface Network {
    id: number;
    name: string;
    country: Country;
  }
  
  interface Country {
    name: string;
    code: string;
    timezone: string;
  }
  
  interface Rating {
    average: number;
  }
  
  interface Schedule {
    time: string;
    days: string[];
  }