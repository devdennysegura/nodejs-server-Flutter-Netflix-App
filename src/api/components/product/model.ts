/// <reference path="./index.d.ts" />
export default class TvShow implements Item {

    public id: number;
    public url: string;
    public name: string;
    public type: string;
    public language: string;
    public genres: string[];
    public status: string;
    public runtime: number;
    public premiered: string;
    public officialSite: string;
    public schedule: Schedule;
    public rating: Rating;
    public weight: number;
    public network: Network;
    public webChannel?: any;
    public externals: Externals;
    public image: Image;
    public summary: string;
    public updated: number;
    public _links: Links;
    public _embedded: Embedded;

    constructor(item: any) {
        this.item = item;
    }
    set item(item: any) {
        this.id = item.id;
        this.url = item.url;
        this.name = item.name;
        this.type = item.type;
        this.language = item.language;
        this.genres = item.genres;
        this.status = item.status;
        this.runtime = item.runtime;
        this.premiered = item.premiered;
        this.officialSite = item.officialSite;
        this.schedule = item.schedule;
        this.rating = item.rating;
        this.weight = item.weight;
        this.network = item.network;
        this.webChannel = item.webChannel;
        this.externals = item.externals;
        this.image = item.image;
        this.summary = item.summary;
        this.updated = item.updated;
        this._links = item._links;
        this._embedded = item._embedded;
    }
    get item(): any {
        const { id, name, image, genres, premiered, summary, _embedded, } = this;
        const data: any = {
            id,
            name,
            image: image ? image.original : null,
            details: {
                genres,
                year: premiered,
                description: summary,
                cast: _embedded ? _embedded.cast : null,
                episodes: _embedded ? _embedded.episodes : null
            }
        };
        return data;
    }
}
