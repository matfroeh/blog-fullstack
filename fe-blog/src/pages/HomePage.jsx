import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:3000/posts');
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  return (
    <div
  className="bg-cover bg-center bg-fixed"
  style={{ backgroundImage: "url('beso.jpg')" }}
>
      <h1 className="text-3xl font-extrabold text-black">Blog Posts</h1>
      <ul className="flex flex-wrap gap-4">
        {posts.map(post => (
          <li key={post.id} className="w-96 border rounded-lg p-4 bg-blue-50 shadow-md">
            <Link to={`/posts/${post.id}`}>
              <h2 className="text-2xl font-semibold text-blue-700">{post.title}</h2>
              <img src={post.cover} alt={post.title} className="my-2 rounded-md w-full" />
              <p className="text-gray-700">{post.content.substring(0, 100)}...</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/create" className="mt-6 inline-block text-white bg-black hover:bg-gray-700 rounded px-4 py-2 shadow-lg">Create New Post</Link>
    </div>
  );
}

export default HomePage;
