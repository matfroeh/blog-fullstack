import { defer } from "react-router-dom";

const postsLoader = async () => {
  try {
    const resPromise = fetch("http://localhost:3000/posts").then((res) =>
      res.json()
    );
    // console.log("postsLoader:", resPromise);
    return defer({
      res: resPromise,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default postsLoader;
