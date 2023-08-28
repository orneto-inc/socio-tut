import PostMessage from "../models/postMessage.js";

// fetching all post OR specific post from DB
export const getAllPosts = async (req, res)=>{
        try{
            const postMessages = await PostMessage.find();
            res.status(200).json(postMessages);
        } catch (error){
            res.status(409).json({ message: error.message});
        }
    }

// Creating and saving a new post to DB
export const createPost = async (req, res)=>{
    // saving the post from body into post variable
    const post = req.body;

    // creating newPost as instance of Postmessage and saving the post from above body
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({ mesage: error.message });
    }
};