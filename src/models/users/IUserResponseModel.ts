import {IUser} from "./IUser.ts";

export interface IUserResponseModel {
    total: number,
    skip: number,
    limit: number,
    users: IUser[],
}