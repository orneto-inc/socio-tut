import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";
import Post from "./post/Post";
import '../../App.css';


const Posts = ({ setCurrentId })=>{
    // useSelector Hooks for feeding store data as state in children components
    const posts = useSelector((state) => state.posts);
    return(
        !posts.length ? <CircularProgress /> :(
            <Grid container alignItems="stretch" spacing={3}>
                {posts.map((post)=>{
                    return(
                <Grid key={post._id} >
                    <Post post={post}  setCurrentId={setCurrentId} />
                </Grid>
                    )
            })}
            </Grid>     
    ));
}
export default Posts;