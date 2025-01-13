import {IUser} from "../model/user/IUser.ts";
import {IPost} from "../model/post/IPost.ts";

export const userService = {
    getUsers: async ():Promise<IUser[]> => {
        return await fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => data.users)
            .catch((error) => {
                console.error("Error fetching users:", error);
                return [];
            });
    }
}

export const postService = {
    getPosts: async ():Promise<IPost[]> => {
        return await fetch('https://dummyjson.com/posts')
            .then((response) => response.json())
            .then(data => data.posts)
            .catch((error) => {
                console.error("Error fetching posts:", error);
                return [];
            });
    }
}