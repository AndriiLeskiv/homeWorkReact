import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {postAction} from "../redux/slices/PostSlice.ts";
import {IPost} from "../models/IPost.ts";

export const PostsPage = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts)
    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, []);
    return (
        <div>
            {posts.length > 0 ? (
                posts.map((post: IPost) => (
                    <div key={post.id}>
                        {post.title}
                    </div>
                ))
            ) : (
                <p>No posts found.</p>
            )}
        </div>
    );
};