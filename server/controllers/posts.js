const express = require("express");
const { mongoose } = require('mongoose');
const PostMessage =require('../models/postMessage')


exports.getPost = async (req,res) =>{
    // res.send('Hi everyone')
    try {
        const postMessages= await PostMessage.find();
        // console.log(postMessages)
        // console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

exports.createPost = async (req,res)=>{
    // res.send('Hi everyone')
    // const newPost =req.body;
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPost = new PostMessage({ title, message, selectedFile, creator, tags })
    // const newPost = new PostMessage(reg.body);


    try {
       await newPost.save()
       res.status(200).json(newPost)
    // res.send('Hi everyone')


    } catch (error) {
        res.status(409).json({message:error.message})
        
    }
}
// /posts/id   /posts/123
exports.updatePost = async (req,res) =>{
    try {
        const {id: _id} =req.params;
        const post =reg.body
        if(nongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).send("no post with that id");
        }
        const updatedPost= await PostMessage.findByIdAndUpdate(_id, post, {new:true} );
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}