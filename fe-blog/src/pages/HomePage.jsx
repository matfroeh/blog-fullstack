import PostsArticel from "../components/PostsArticel";
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import PostsLoading from "../components/PostsLoading";

const HomePage = () => {
  const dataPromise = useLoaderData();
  // console.log("dataPromise:", dataPromise);

  return (
    <div className="divide-y divide-slate-600">
      <Suspense fallback={<PostsLoading />}>
        <Await resolve={dataPromise.res}>
          {(res) =>
            res.map((post) => <PostsArticel key={post.id} post={post} />)
          }
        </Await>
      </Suspense>
    </div>
  );
};

export default HomePage;
