const express = require("express");
const mongoose = require("mongoose");
const PostMessage =require('../models/postMessage');
const checkFunction =require("../helper/checkFuction");
const { post } = require("../routes/posts");


exports.getPost = async (req,res) =>{
    // res.send('Hi everyone')
    const {title} = req.body

    try {
        const postMessages= await PostMessage.find();
        // console.log(postMessages)
        // console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
exports.createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();
        // console.log(newPostMessage.selectedFile)

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


// /posts/id   /posts/123
exports.updatePost = async (req,res) =>{
    try {
        const {id } =req.params;
        const { title, message, creator, selectedFile, tags } = req.body;
        // if(mongoose.Types.ObjectId.isValid(id)){
        //     return res.status(404).send("no post with that id");
        // }
        const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
        await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
        console.log(updatedPost)
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

exports.deletePost = async (req,res) =>{
    try {
        console.log(req.params)
        const { id } = req.params;
// console.log('idbackend', id)
        // if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);
    
        await PostMessage.findByIdAndRemove(id);
    
        res.json({ message: "Post deleted successfully." });
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


exports.likePost = async (req,res) =>{
    try {
        const { id } =req.params;
        console.log(id)
        // const post = { creator, title, message, tags,likeCount, selectedFile, _id: id };
        const post = await PostMessage.findById(id);
console.log(post)
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}