import axios from 'axios';

const url = "http://localhost:5000/posts";

export const fetchPosts = async()=>{
try {
    await axios.get(url)
    console.log("sdfsdflns")
} catch (error) {
    console.log(error)
}
}

export const createPost = async(newPost)=>{
    try {
        await axios.post(url, newPost)
        console.log("POSTED")
    } catch (error) {
        console.log(error)
    }
    }

