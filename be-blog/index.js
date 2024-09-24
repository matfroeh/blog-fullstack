import express from 'express';
import cors from 'cors'; 
import { createPost, deletePost, getPostById, getPosts, updatePost } from './controllers/posts.js';
import './db/index.js'; // Connects to the database
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' })); // Is somehow needed when doing requests with axios because of CORS policy, but when testing it with Postman it's not needed (I don't know why)
app.use(express.json());

app.route('/posts').get(getPosts).post(createPost);
app.route('/posts/:id').get(getPostById).put(updatePost).delete(deletePost);

app.listen(port, () => console.log(`Server is running on port ${port}`));
