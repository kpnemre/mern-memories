const PostMessage =require('../models/postMessage')


exports.getPosts = async (req,res) =>{
    // res.send('Hi everyone')
    try {
        const postMessages= await PostMessage.find();
        console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

exports.createPosts = async (req,res)=>{
    // res.send('Hi everyone')
    // const post =req.body;
    const newPost = new PostMessage(reg.body);

    try {
       await newPost.save()
       res.status(200).json(newPost)

    } catch (error) {
        res.status(409).json({message:error.message})
        
    }
}