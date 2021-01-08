import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

const posts = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      const update = posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      console.log("update", update);
      return update;
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
export default posts;
