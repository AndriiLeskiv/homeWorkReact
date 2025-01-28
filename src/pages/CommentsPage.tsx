import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {IComment} from "../models/IComment.ts";
import {commentAction} from "../redux/slices/CommentSlice.ts";

export const CommentsPage = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state)=> state.commentStoreSlice.comments)
    useEffect(() => {
        dispatch(commentAction.loadComments())
    }, []);
    return (
        <div>
            {comments.length > 0 ? (
                comments.map((comment: IComment) => (
                    <div key={comment.id}>
                        {comment.name}
                    </div>
                ))
            ) : (
                <p>No comments found.</p>
            )}
        </div>
    );
};