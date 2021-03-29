import { SET_POSTS, ADD_POST, UPDATE_POST, DELETE_POST, SET_POST } from "../consts/post-consts";

const initialState = {
    posts: [],
    post: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
          
            return {
                ...state,
                posts: action.payload
            }
        case ADD_POST: 

            return [...state, action.payload]
        case UPDATE_POST:

            return state.map((elem) => (
                elem.id === action.payload.id
                  ? { ...elem, ...action.payload }
                  : elem
              ))
        case SET_POST:
            console.log('sssssssssssssssssss');
            return {
                ...state,
                post: action.payload
            }
        case DELETE_POST:
            return state.filter(el => el.id !== action.payload)
        default:
            return state;
    }
}

export default reducer