import {useEffect, useState} from "react";
import {postService} from "../../services/api.service.ts";
import {IPost} from "../../model/post/IPost.ts";
import {PostComponent} from "../post/PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getPosts().then((allPosts)=>{
            setPosts(allPosts);
        })
    }, []);

    return (
        <div>
            {
                posts.map(post=> <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};