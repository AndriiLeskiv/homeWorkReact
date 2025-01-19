import {IUserResponseModel} from "../models/users/IUserResponseModel.ts";
import {ICartResponseModel} from "../models/carts/ICartResponseModel.ts";
import {urls} from "../constants/url.ts";

export const userService = {
    getAllUsers: async ():Promise<IUserResponseModel> => {
        return await fetch(urls.users.allUsers)
            .then((res) => res.json())
            .catch((error) => {
                console.error("Error fetching users:", error);
                return [];
            });
    }
}
export const cartService = {
    getCartsOfUser: async (userId:string):Promise<ICartResponseModel> => {
        return await fetch(urls.carts.oneCarts + userId)
            .then((res) => res.json())
            .catch((error) => {
                console.error("Error fetching carts:", error);
                return [];
            });
    }
}