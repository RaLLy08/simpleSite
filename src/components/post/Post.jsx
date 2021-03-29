import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { setPostEmberedCommentsReq } from "../../thunk/post-thunk";
import { useSelector, useDispatch } from "react-redux";

const Post = (props) => {
    const { id } = useParams();
    const { post } = useSelector(({ postsReducer }) => postsReducer)
    const dispatch = useDispatch()
   
    useEffect(
        () => {
            dispatch(setPostEmberedCommentsReq(id))
        }, []
    )
    
    return(
        <div>
            {post.title}
        </div>
    )
};
export default Post