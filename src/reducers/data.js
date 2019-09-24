import {Types} from '../actions/data';

// create initial state for reducers
const INIT_STATE = {
    test: "Hello Redux!",
    posts: ["Default Post"]
}

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
    switch(action.type) {
        case Types.GET_DATA_SUCCESS: {
            console.log("redux -> ", action.payload.data.test)    
            return {
                test: action.payload.data.test,
                posts: [...state.posts]
            }
        }
        case Types.GET_POSTS_SUCCESS: {
            console.log("redux -> ", action.payload.posts)    
            return {
                test: state.test,
                posts: [...action.payload.posts]
            }
        }
        default: return state;
    }
}