import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [cover, setCover] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Save the post to the backend
      const response = await axios.post('http://localhost:3000/posts', { author, title, content, cover });
      
      // Extract the ID of the newly created post from the response
      const newPostId = response.data.id;

      // Navigate to the PostDetailPage of the newly created post
      navigate(`/posts/${newPostId}`);
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white/90 shadow-lg rounded-lg backdrop-blur-md">
      <form onSubmit={handleSubmit} className="bg-blue-100 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-black">Create New Post</h1>
        <div className="mb-4">
          <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <input type="text" placeholder="Cover Image URL" value={cover} onChange={(e) => setCover(e.target.value)} required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button
          type="submit"
          className={`flex justify-center items-center ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12c0-1.1.9-2 2-2s2 .9 2 2H4zm2.5 0h10c0 1.1-.9 2-2 2s-2-.9-2-2H6.5zM12 4c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm0 16c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
