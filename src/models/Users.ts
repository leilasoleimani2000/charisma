export default interface IUsers {
    address: IAddress;
    email: string;
    id: number;
    name: IName;
    password: string;
    phone: string;
    username: string;
}

interface IAddress {
    city: string;
    geolocation: IGeolocation;
    number: number;
    street: string;
    zipcode: string;
}

interface IGeolocation {
    lat: string;
    lng: string;
}

interface IName {
    firstname: string;
    lastname: string;
}