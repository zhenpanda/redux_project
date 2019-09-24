// actions types is object with the
// key: GET_DATA_REQUEST -> value: describes the action
export const Types = {
    GET_DATA_REQUEST: 'get_data_request',
    GET_DATA_SUCCESS: 'get_data_success',
    GET_POSTS_REQUEST: 'get_posts_request',
    GET_POSTS_SUCCESS: 'get_posts_success',
    CREATE_POST_REQUEST: 'create_post_request',
}

// function that returns an object literal 
export const getDataRequest = () => ({
    type: Types.GET_DATA_REQUEST
})
// key: payload will contain result of the api call
export const getDataSuccess = ({data}) => ({
    type: Types.GET_DATA_SUCCESS,
    payload: { data }
})

// reading the posts
export const getPostsRequest = () => ({
    type: Types.GET_POSTS_REQUEST
})
export const getPostsSuccess = ({posts}) => ({
    type: Types.GET_POSTS_SUCCESS,
    payload: { posts }
})
export const createPostRequest = ({post}) => ({
    type: Types.CREATE_POST_REQUEST,
    payload: {post}
})