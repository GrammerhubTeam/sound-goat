export interface IExternalUrls {
    spotify: string;
}

export interface IArtist {
    external_urls: IExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface IExternalUrls2 {
    spotify: string;
}

export interface IImage {
    height: number;
    url: string;
    width: number;
}

export interface IAlbum {
    album_type: string;
    artists: IArtist[];
    available_markets: string[];
    external_urls: IExternalUrls2;
    href: string;
    id: string;
    images: IImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface IExternalUrls3 {
    spotify: string;
}

export interface IArtist2 {
    external_urls: IExternalUrls3;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface IExternalIds {
    isrc: string;
}

export interface IExternalUrls4 {
    spotify: string;
}

export interface IItem {
    album: IAlbum;
    artists: IArtist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: IExternalIds;
    external_urls: IExternalUrls4;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface ITracks {
    href: string;
    items: IItem[];
    limit: number;
    next: string;
    offset: number;
    previous?: any;
    total: number;
}

export interface IFindSongResponse {
    tracks: ITracks;
}