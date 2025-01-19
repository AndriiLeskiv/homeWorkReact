import {ICart} from "./ICart.ts";

export interface ICartResponseModel {
    total: number,
    skip: number,
    limit: number,
    carts: ICart[],
}