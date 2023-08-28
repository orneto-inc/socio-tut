import * as api from '../api/index';

// Action creators
export const getPosts = ()=> async (dispatch)=> {
    try{
        const { data } = await api.fetchAllPosts();
        dispatch({ type: 'FETCH_ALL', payload: data});
    }catch(error){
        console.log(error);
    }
}