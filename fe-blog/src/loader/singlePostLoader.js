import axios from "axios";

const singlePostLoader = async ({ params }) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/posts/${params.id}`
    );
    return await data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default singlePostLoader;