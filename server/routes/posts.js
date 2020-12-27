const express = require("express");

const router = express.Router();
const{ getPosts, createPosts} = require("../controllers/posts");

router.get('/',getPosts);
router.get('/',createPosts);

module.exports=router