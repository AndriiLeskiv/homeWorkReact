import {FC} from "react";
import "./PostComponent.css";
import {IPost} from "../../model/post/IPost.ts";

type PostTypeProps ={
    post:IPost
}

export const PostComponent:FC<PostTypeProps> = ({post}) => {
    return (
        <div className="post-card">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <div className="post-tags">
                <strong>Tags:</strong>{" "}
                {post.tags.map((tag, index) => (
                    <span key={index} className="tag">
            {tag}
          </span>
                ))}
            </div>
            <div className="post-stats">
                <p>Likes: {post.reactions.likes}</p>
                <p>Dislikes: {post.reactions.dislikes}</p>
                <p>Views: {post.views}</p>
                <p>User ID: {post.userId}</p>
            </div>
        </div>
    );
};