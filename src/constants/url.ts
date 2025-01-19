const baseUrl = 'https://dummyjson.com';

export const urls = {
    users: {
        allUsers: baseUrl + '/users',
        allUsersPagination: baseUrl + '/users?skip=',
    },
    posts: {
        allPosts: baseUrl + '/posts'
    }
}