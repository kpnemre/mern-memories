// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';



const posts =  (posts = [], action) => {

    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
    //   case LIKE:
    //     return posts;
      case 'CREATE':
        return [...posts, action.payload]
    //   case UPDATE:
    //     return posts;
    //   case DELETE:
    //     return posts;
      default:
        return posts;
    }
  };
 export default posts;