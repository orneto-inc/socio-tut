import express from "express";
import { createPost, getAllPosts } from "../controllers/posts.js";

// initializing router module fro setting up custo routes
const router = express.Router();

// Fething all posts from DB
router.get('/', getAllPosts);

// Creating a new post and saving it into DB
router.post('/', createPost);

export default router;