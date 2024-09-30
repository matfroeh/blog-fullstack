import { useState, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Reactions from "../components/Reactions";
import TimeAgo from "../components/TimeAgo";
import { RiEditBoxFill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import PostDetailLoading from "../components/PostDetailLoading";
import DeletePost from "../components/DeletePost";
import { useLoaderData, Await } from "react-router-dom";

const PostDetailPage = () => {
  const navigate = useNavigate();
  const dataPromise = useLoaderData();

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id) => {
    try {
      setIsDeleting(true);
      window.scrollTo(0, 0);
      await axios.delete(`http://localhost:3000/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Suspense fallback={<PostDetailLoading />}>
      <Await resolve={dataPromise.res.then((post) => post)}>
        {(post) => {
          return (
            <>
              <article className="relative">
                {isDeleting && (
                  <div className="absolute h-full w-full left-0 top-0 pt-5 bg-[#0F172A] bg-opacity-60 flex justify-center items-baseline text-slate-400">
                    Deleting Post...
                  </div>
                )}
                <div className="flex items-start justify-between">
                  <Link
                    to={"/"}
                    className="text-xl text-slate-600 hover:text-slate-400"
                  >
                    <IoMdArrowRoundBack />
                  </Link>
                  <div className="flex  gap-3">
                    <Link
                      to={`/edit/${post.id}`}
                      className="text-slate-400 text-lg bg-[#1E293B] p-2 rounded-md hover:text-green-600"
                    >
                      <RiEditBoxFill />
                    </Link>
                    <DeletePost handleDelete={() => handleDelete(post.id)} />
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-slate-300 mb-1">
                  {post.title}
                </h2>
                <p className="text-slate-400">{post.content}</p>
                {post.cover && (
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="mt-4 rounded-md w-full"
                  />
                )}
                <div className="flex items-center gap-1 text-sm text-slate-400 mt-3 mb-4">
                  <p>{post.author}</p>
                  <TimeAgo timeStamp={post.createdAt} />
                </div>
                <Reactions />
              </article>
              ;
            </>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default PostDetailPage;
