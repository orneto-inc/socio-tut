// importing reducer actions
// import { FETCH_ALL, CREATE } from '../constants/actionTypes';

// importing everything as api from api
import * as api from '../api/index';

// Action creators
// get all posts - function, with dispatcher since using REDUX
export const getPosts = ()=> async (dispatch)=> {
    try{
        const { data } = await api.fetchAllPosts();
        console.log(data, 'DATA');
        dispatch({ type: 'FETCH_ALL', payload: data });
    }catch(error){
        console.log(error.message);
    }
}

// create post - function
export const createPost = (post) => async (dispatch)=> {
    try{
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data }); 
    }catch(error){
        console.log(error.message);
    }
}