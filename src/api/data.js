import axios from 'axios';

// data api calls
export const getData = () => {
    return axios.get('http://localhost:4000/comments')
}
export const getPosts = () => {
    return axios.get('http://localhost:4000/posts')
}
export const createPost = ({post}) => {
    console.log("api call ->", post)
    let randomId = Math.random()*100;
    return axios.post('http://localhost:4000/posts',{"id":randomId, "msg": post + randomId})
}