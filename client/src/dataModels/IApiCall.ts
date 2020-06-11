
export interface IPlaceData {
    id: string;
    about: string;
    cover: string;
    description:string;
    location:IExtendedLocation;
    phone:string;
    single_line_address:string;
    overall_star_rating:number;
    website:string;
}

export interface ILatLng {
    lat:number;
    lng:number;
    id: string;
}

// export interface IApiCall {
//     paging:IPaging;
//     data:IRecord[];
// }
export interface IRecord {
    id: string;
    name: string;
    link: string;
    location:ILocation

}
export interface ILocation {
    latitude:number;
    longitude:number;
}

export interface IExtendedLocation extends ILocation {
    city:  string;
    country:  string;
    state:  string;
    street: string;
    zip:  string;
}
