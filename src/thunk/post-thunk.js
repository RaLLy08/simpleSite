import API from '../axios/post-axios';
import { setPosts, addPost, updatePost, deletePost, setPost} from '../actions/post-actions';


export const getPostsReq = () => {
    return dispatch => {
        API.get('/posts')
        .then(
            res => dispatch(setPosts(res.data)),
            err => console.log(err)
        )
    }
}

export const setPostEmberedCommentsReq = (id) => {
    return dispatch => {
        API.get(`/posts/${id}?_embed=comments`)
        .then(
            res => dispatch(setPost(res.data)),
            err => console.log(err)
        )
    }
}


export const addPostReq = (post) => {
    return dispatch => {
        API.post(`/posts`, post)
        .then(
            res => dispatch(addPost(res.data)),
            err => console.log(err)
        )
    }
}

export const updatePostReq = (post) => {
    return dispatch => {
        API.put(`/posts/${post.id}`, post)
        .then(
            res => dispatch(updatePost(post)),
            err => console.log(err)
        )
    }
}

export const deletePostReq = id => {
    return dispatch => {
        API.delete(`/posts/${id}`)
        .then(
            res => dispatch(deletePost(id)),
            err => console.log(err)
        )
    }
}

export const commentPostReq = (id, comment) => {
    return dispatch => {
        APİ.post(`/comments`, 
        {
            postId: id,
            body: comment
        })
        .then(
            res => console.log(res),
            err => console.log(err)
        )
    }
}