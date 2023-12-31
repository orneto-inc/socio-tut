import axios from 'axios';

const post_api_url = `http://localhost:8080/posts`;

// api data fetching function
export const fetchAllPosts = () =>{
    return axios.get(post_api_url)
};

// api action for creating post
export const createPost = (newPost) => {
    return axios.post(post_api_url, newPost);
};

export const updatePost = (id, postData) => {
    axios.patch(`${post_api_url}/${id}, postData`);
}


// Api action for deleting post

export const deletePost = (id, postData) =>{
    axios.delete(`${post_api_url}/${id}`);
}