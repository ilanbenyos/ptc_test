
export interface ILoc {
    id: string;
    name: string;
    link: string;
    city:string;
    country:string;
    street:string;
    zip:string;
    lat:number;
    lng:number;
}

export interface ILatLng {
    lat:number;
    lng:number;
}

export interface IApiCall {
    paging:IPaging;
    data:IRecord[];
}
export interface IRecord {
    id: string;
    name: string;
    link: string;
    location:ILocation

}
export interface ILocation {
    city:string;
    country:string;
    street:string;
    zip:string;
    latitude:number;
    longitude:number;
}

export interface IPaging {
    next:string;
    previous:string;
}

export interface IPaging {
    next:string;
    previous:string;
}
