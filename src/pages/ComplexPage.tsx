import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {postAction} from "../redux/slices/PostSlice.ts";
import {userAction} from "../redux/slices/UserSlice.ts";
import {commentAction} from "../redux/slices/CommentSlice.ts";

export const ComplexPage = () => {
    const dispatch = useAppDispatch();
    const {commentStoreSlice:{comments}, userStoreSlice:{users}, postStoreSlice:{posts}} = useAppSelector(state => state)
    useEffect(() => {
        if (!users.length){
            dispatch(userAction.loadUsers())
        }
        if (!comments.length){
            dispatch(commentAction.loadComments())
        }
        if (!posts.length){
            dispatch(postAction.loadPosts())
        }
    }, []);
    return (
        <></>
    );
};