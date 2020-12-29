const express = require("express");

const router = express.Router();
const{ getPost, createPost, updatePost,deletePost, likePost} = require("../controllers/posts");

router.get('/',getPost);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);




module.exports=router