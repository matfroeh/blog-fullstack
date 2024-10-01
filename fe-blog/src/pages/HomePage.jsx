import PostsArticel from "../components/PostsArticel";
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import PostsLoading from "../components/PostsLoading";
import LoadingOverlay from 'react-loading-overlay-ts';

const HomePage = () => {
  const dataPromise = useLoaderData();
  // console.log("dataPromise:", dataPromise);

  return (
    <div className="divide-y divide-slate-600">
      <Suspense fallback={
        <>
        <LoadingOverlay active={true} spinner text="Loading posts..." />
        <PostsLoading />
        {/* </LoadingOverlay> */}
        </>
      }
        >
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
