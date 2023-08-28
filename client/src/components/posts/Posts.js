import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/Post";
import '../../App.css';

const Posts = ()=>{
    const posts = useSelector((state)=> state.posts);
    console.log(posts, "THIS IS POSTS");
    return(
        <div className="posts">
            This is Posts Component
            <Post/>
        </div>
    )
}
export default Posts;