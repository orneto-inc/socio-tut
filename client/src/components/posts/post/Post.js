import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "../../../App.css";
import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";

import {useDispatch} from 'react-redux';
import { deletePost } from  '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardMedia image={post.selectedFile} title={post.title}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {post.message}
          </Typography>
        </CardContent>
      </CardMedia>
      <Typography variant="h6">{post.creator}</Typography>
      <Typography variant="body2">{post.createdAt}</Typography>
      <div>
        <Button style={{ color: "green" }} onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default"></MoreHorizIcon>
        </Button>
      </div>
      <Typography variant="body2">
        {post.tags.map((tag) => `#${tag}`)}
      </Typography>
      <CardActions>
        <Button size="samll" color="primary" onClick={()=>{}} >
            <ThumbUpAlt fontSize="small">
                Like
                {post.likeCount}
            </ThumbUpAlt>
        </Button>

        <Button size="samll" color="primary" onClick={()=>dispatch(deletePost(post._id))} >
            <DeleteIcon fontSize="small">
                Delete
            </DeleteIcon>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
