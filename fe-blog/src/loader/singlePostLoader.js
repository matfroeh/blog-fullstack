import { defer } from "react-router-dom";

const singlePostLoader = async ({ params }) => {
  try {
    const resPromise = fetch(`http://localhost:3000/posts/${params.id}`).then(
      (res) => res.json()
    );
    return defer({
      res: resPromise,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default singlePostLoader;
