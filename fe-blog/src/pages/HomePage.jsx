// import { useEffect, useState } from "react";
// import axios from "axios";
import PostsArticle from "../components/PostsArticle";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const postsPromise = useLoaderData(); 
  const [posts] = useState(postsPromise.read());
  
  // const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // const fetchPosts = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.get("http://localhost:3000/posts");
  //     setPosts(response.data);
  //   } catch (error) {
  //     console.error("Error fetching posts:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetchPosts();
  //   };
  //   fetchData();
  // }, []);

  return (
      <div className="divide-y divide-slate-600">
        {/* {isLoading && <PostsLoading />} */}

        {/* {!isLoading && */}

        {posts.map((post) => (
          <PostsArticle key={post.id} post={post} />
        ))}
      </div>
  );
};

export default HomePage;
