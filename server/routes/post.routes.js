import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Update a post by cuid
router.route('/posts/:cuid').put(PostController.editPost);

// ThumbUp for a post
router.route('/post/thumbup/:cuid').put(PostController.thumbUp);

// ThumbDown for a post
router.route('/post/thumbdown/:cuid').put(PostController.thumbDown);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

export default router;
