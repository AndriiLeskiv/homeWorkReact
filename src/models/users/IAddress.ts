import {IAddressCoordinates} from "./ICoordinates.ts";

export interface IAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IAddressCoordinates;
    country: string;
}