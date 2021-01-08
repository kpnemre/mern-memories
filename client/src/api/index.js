import axios from "axios";

const url = "http://localhost:5000/posts";
// const urll = "http://localhost:5000/posts/post";

export const fetchPosts = () => axios.get(url);

// export const fetchPosts = async()=>{
// try {
//     await axios.get(url)
//     console.log("Fetch yapıldı")
// } catch (error) {
//     console.log(error)
// }
// }

export const createPost = (newPost) => {
  axios.post(url, newPost);
  // console.log("newpost", newPost)
};
export const updatePost = (id, updatedPost) => {
  // console.log(id,updatedPost)
  axios.patch(`${url}/${id}`, updatedPost);
};
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => {
  console.log(id);
  axios.patch(`${url}/${id}/likePost`);
};

// export const createPost = async(newPost)=>{
//     try {
//         await axios.post(url, newPost)
//         console.log("POSTED")
//     } catch (error) {
//         console.log(error)
//     }
//     }
