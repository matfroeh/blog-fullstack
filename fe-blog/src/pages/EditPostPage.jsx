import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import UpdateLoading from "../components/UpdateLoading";
import { IoMdArrowRoundBack } from "react-icons/io";

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setIsUpdating(true);
    try {
      await axios.put(`http://localhost:3000/posts/${id}`, post);
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error("Error updating post:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:3000/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <UpdateLoading />;
  }

  if (!post)
    return <p className="text-center text-slate-400 text-xl">Post Not Found</p>;

  return (
    <div className="relative">
      {isUpdating && (
        <div className="absolute h-full w-full left-0 top-0 pt-5 bg-[#0F172A] bg-opacity-60 flex justify-center items-baseline text-slate-400">
          Updating Post...
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Link to={`/posts/${id}`}
          className="text-xl text-slate-600 hover:text-slate-400"
        >
          <IoMdArrowRoundBack />
        </Link>
        <h1 className="text-2xl font-bold text-slate-400">Update Post</h1>
        <div className="space-y-1">
          <label htmlFor="author" className="block text-slate-400">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            value={post.author}
            onChange={handleChange}
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
            name="title"
            placeholder="Title"
            value={post.title}
            onChange={handleChange}
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
            name="content"
            value={post.content}
            onChange={handleChange}
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
            name="cover"
            placeholder="Image URL"
            value={post.cover}
            onChange={handleChange}
            required
            className="w-full outline-none px-4 py-2 rounded-md bg-[#1E293B] text-white"
          />
        </div>
        <div className="w-full min-h-20 bg-[#283447] text-slate-600 flex justify-center items-center rounded-sm">
          {post.cover ? (
            <img src={post.cover} alt="image" />
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
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loading /> <span className="ml-2">Updating post...</span>
            </>
          ) : (
            "Update Post"
          )}
        </button>
      </form>
    </div>
  );
};

export default EditPostPage;
