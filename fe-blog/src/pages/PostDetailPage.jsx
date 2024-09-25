import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostDetailPage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:5000/posts/${id}`);
      setPost(response.data);
    }
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/posts/${id}`);
    navigate('/');
  }

  if (!post) return <div className="container mx-auto px-4 py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 bg-white/90 shadow-lg rounded-lg backdrop-blur-md">
      <h1 className="text-3xl font-bold mb-2 text-blue-800">{post.title}</h1>
      <img src={post.cover} alt={post.title} className="my-2 rounded-md w-full md:w-1/2" />
      <p className="text-lg text-gray-700">{post.content}</p>
      <div className="mt-4">
        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">Delete</button>
        <Link to={`/edit/${post.id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Update</Link>
        <Link to="/" className="mt-4 inline-block text-blue-500">Back to Home</Link>
      </div>
    </div>
  );
}

export default PostDetailPage;
