import * as api from '../api';

// * as api means =api.fetchPosts


export const getPosts = () =>async (dispatch)=>{


    try {
        const {data} = await api.fetchPosts();
        dispatch({type:"FETCH_ALL",payload:data});
        console.log("data", data)
    } catch (error) {
        console.log(error)
    }

    // const action ={type:"FETCH_ALL",payload:[]}
    // dispatch(action);
}


export const createPost = (post) =>async (dispatch)=>{


    try {
        const {data} = await api.createPost(post);
        dispatch({type:"CREATE",payload:data});
        console.log("data", data)
    } catch (error) {
        console.log(error)
    }

    // const action ={type:"FETCH_ALL",payload:[]}
    // dispatch(action);
}


