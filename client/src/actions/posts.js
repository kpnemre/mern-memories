import * as api from '../api/index';

// * as api means =api.fetchPosts


export const getPosts = () =>async (dispatch)=>{


    try {
        const {data} = await api.fetchPosts();
        process.on('unhandledRejection', e => { throw e; });
        dispatch({type:"FETCH_ALL",payload:data});
        console.log("data", data)
    } catch (error) {
        console.log(error.message)
    }

    // const action ={type:"FETCH_ALL",payload:[]}
    // dispatch(action);
}


export const createPost = (post) =>async (dispatch)=>{


    try {
        const {data} = await api.createPost(post);
        dispatch({type:"CREATE",payload:data});
        // console.log("data", data)
    } catch (error) {
        console.log(error)
    }

    // const action ={type:"FETCH_ALL",payload:[]}
    // dispatch(action);
}

export const updatePost = (id, post) =>async (dispatch)=>{


    try {
        const res = await api.updatePost(id, post);
        console.log("dataa",res)
        console.log("dataa",res.data)
        dispatch({type:"UPDATE",payload:res.data});
        // console.log("data", data)
    } catch (error) {
        console.log(error)
    }

    // const action ={type:"FETCH_ALL",payload:[]}
    // dispatch(action);
}


export const deletePost = (id) => async (dispatch) => {
    try {
        console.log("id",id)
       await api.deletePost(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  export const likePost = (id) =>async (dispatch)=>{


    try {
        const {data} = await api.likePost(id);
        dispatch({type:"LIKE",payload:data});
        // console.log("data", data)
    } catch (error) {
        console.log(error)
    }

    // const action ={type:"FETCH_ALL",payload:[]}
    // dispatch(action);
}
