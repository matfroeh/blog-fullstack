import axios from "axios";
import wrapPromise from "./wrapPromise";

const postsLoader = async () => {
  console.log("postsLoader called");
  
  try {
    const promise = axios.get("http://localhost:3000/posts").then(({data}) => data);
    return wrapPromise(promise);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default postsLoader;