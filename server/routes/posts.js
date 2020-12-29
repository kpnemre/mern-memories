const express = require("express");

const router = express.Router();
const{ getPost, createPost, updatePost} = require("../controllers/posts");

router.get('/',getPost);
router.post('/',createPost);
// router.patch'/:id',updatePost);



module.exports=router