import {IUserResponseModel} from "../models/IUserResponseModel.ts";
import {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl = "https://dummyjson.com";

export const userService = {
    getAllUsers: async ():Promise<IUserResponseModel> => {
        return  await fetch(baseUrl + "/users")
            .then((res) => res.json())

    }
}
export const cartService = {
    getCartsOfUser: async (userId:string):Promise<ICartResponseModel> => {
        return await fetch(baseUrl + "/carts/user/" + userId)
            .then((res) => res.json())

    }
}