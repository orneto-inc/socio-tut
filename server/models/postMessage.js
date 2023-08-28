import mongoose from "mongoose";

// Creating a Post Schema for DB Storage
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Converting above Schema into a Model for DB usage.
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
