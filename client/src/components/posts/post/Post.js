import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import '../../../App.css';

const Post = ({ post }) =>{
    // console.log(post, "Child Post");
    return(
            <Card>
                <CardMedia image={post.selectedFile} title={post.title}>
                    <Typography variant="h6">{post.creator}</Typography>
                    <Typography variant="body2">{post.createdAt}</Typography>

                </CardMedia>
            </Card>
    )
}
export default Post;