import axios from 'axios';

const post_api_url = `http://localhost:8080/posts`;

export const fetchAllPosts = () =>{
    axios.get(post_api_url, ()=>{
        console.log("Show All Posts");
    })
};

