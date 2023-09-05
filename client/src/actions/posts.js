// importing reducer actions
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// importing everything as api from api
import * as api from '../api/index';

// Action creators
// get all posts - function, with dispatcher since using REDUX
export const getPosts = ()=> async (dispatch)=> {
    try{
        const { data } = await api.fetchAllPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    }catch(error){
        console.log(error);
    }
}

// create post - function
export const createPost = (post) => async (dispatch)=> {
    try{
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data }); 
    }catch(error){
        console.log(error);
    }
}

// updateing post - function
export const updatePost = (id, post) => async (dispatch)=>{
    try{
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });

    }catch (error){
        console.log(error);
    }

}

export const deletePost = (id) => async (dispatch) =>{
    try{
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });

    }catch (error){
        console.log(error);
    }
}