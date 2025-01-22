import {IUser} from "../model/user/IUser.ts";
import {IPost} from "../model/post/IPost.ts";
import {urls} from "../constants/url.ts";

export const userService = {
    getUsers: async ():Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(response => response.json())
            .then(data => data.users)
            .catch((error) => {
                console.error("Error fetching users:", error);
                return [];
            });
    }
}
export const allUsersPagination = {
    getUsersPagination: async (page: string): Promise<{ users: IUser[], totalUsers: number }> => {
        const limit = 30;
        const skip = limit * (+page) - limit;
        return await fetch(urls.users.allUsersPagination + skip)
            .then(response => response.json())
            .then(data => ({ users: data.users, totalUsers: data.total }))
            .catch((error) => {
                console.error("Error fetching users:", error);
                return { users: [], totalUsers: 0 };
            });
    }
}
export const postService = {
    getPosts: async ():Promise<IPost[]> => {
        return await fetch(urls.posts.allPosts)
            .then((response) => response.json())
            .then(data => data.posts)
            .catch((error) => {
                console.error("Error fetching posts:", error);
                return [];
            });
    }
}