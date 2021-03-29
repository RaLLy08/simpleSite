import React, { useEffect } from "react";
import { getPostsReq } from "../../thunk/post-thunk";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Posts = props => {
    const posts = useSelector(({ postsReducer }) => postsReducer.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsReq());
    },[dispatch])

    return(
        <ul>
             {posts.map((post,i) => 
                <li key={i}>
                    <Link to={`/posts/${post.id}/`}>
                        {post.title}
                    </Link>
                </li>
             )}
        </ul>
    )
}

export default Posts