import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const CreatePostPage = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/posts", {
        author,
        title,
        content,
        cover,
      });

      const newPostId = response.data.id;
      navigate(`/posts/${newPostId}`);
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-400">Create New Post</h1>
      <div className="space-y-1">
        <label htmlFor="author" className="block text-slate-400">
          Author
        </label>
        <input
          type="text"
          id="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="w-full outline-none px-4 py-2 rounded-md bg-[#1E293B] text-white"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="title" className="block text-slate-400">
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full outline-none px-4 py-2 rounded-md bg-[#1E293B] text-white"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="content" className="block text-slate-400">
          Content
        </label>
        <textarea
          placeholder="Content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full outline-none px-4 py-2 rounded-md bg-[#1E293B] text-white"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="img-url" className="block text-slate-400">
          Image URL
        </label>
        <input
          type="url"
          id="img-url"
          placeholder="Image URL"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          required
          className="w-full outline-none px-4 py-2 rounded-md bg-[#1E293B] text-white"
        />
      </div>
      <div className="w-full min-h-20 bg-[#283447] text-slate-600 flex justify-center items-center rounded-sm">
        {cover ? (
          <img src={cover} alt="image" />
        ) : (
          <svg
            className="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        )}
      </div>
      <button
        type="submit"
        className={`flex justify-center items-center text-slate-400 bg-[#283447] w-full py-2 rounded-md hover:text-white hover:bg-[#1E293B]`}
        disabled={loading}
      >
        {loading ? (
          <>
            <Loading /> <span className="ml-2">Adding post...</span>
          </>
        ) : (
          "Add Post"
        )}
      </button>
    </form>
  );
};

export default CreatePostPage;
