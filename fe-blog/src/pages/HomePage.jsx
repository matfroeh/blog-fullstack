import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsArticel from "../components/PostsArticel";
import PostsLoading from "../components/PostsLoading";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchPosts();
    };
    fetchData();
  }, []);

  return (
    <div className="divide-y divide-slate-600">
      {isLoading && <PostsLoading />}

      {!isLoading &&
        posts.map((post) => <PostsArticel key={post.id} post={post} />)}
    </div>
  );
};

export default HomePage;
