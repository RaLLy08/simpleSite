import { SET_POSTS, ADD_POST, UPDATE_POST, DELETE_POST, SET_POST } from "../consts/post-consts"

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts,
    }
} 

export const addPost = post => {
    return {
        type: ADD_POST,
        payload: post,
    }
} 

export const setPost = post => {
    return {
        type: SET_POST,
        payload: post
    }
}

export const updatePost = post => {
    return {
        type: UPDATE_POST,
        payload: post,
    }
} 

export const deletePost = id => {
    return {
        type: DELETE_POST,
        payload: id,
    }
} 