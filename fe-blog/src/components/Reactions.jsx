import { useState } from "react";
import { FaRegHeart ,FaHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";

export default function Reactions() {
  const [like, setLike] = useState(false);
  return (
    <div className="flex gap-3">
      <button
        onClick={() => setLike(!like)}
        className="flex items-center text-slate-400 hover:text-slate-300"
      >
        {like ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
      </button>
      <button
        className="flex items-center text-slate-400 hover:text-slate-300"
      >
        <FaRegComment />
      </button>
    </div>
  );
}
