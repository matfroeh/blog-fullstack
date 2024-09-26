import Reactions from "./Reactions";
import { Link } from "react-router-dom";
import TimeAgo from "./TimeAgo";

export default function PostsArticel({ post }) {
  return (
    <article className="py-4">
      <Link to={`/posts/${post.id}`}>
        <h2 className="text-xl font-semibold text-slate-300 mb-1">
          {post.title}
        </h2>
        <p className="text-slate-400">{post.content.substring(0, 100)}...</p>
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
      </Link>
      <Reactions />
    </article>
  );
}
