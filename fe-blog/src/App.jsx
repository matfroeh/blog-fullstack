import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailPage from "./pages/PostDetailPage";
import EditPostPage from "./pages/EditPostPage"; // Import the new EditPostPage
import Layout from "./components/Layout";
import postsLoader from "./loader/postsLoader.js";
import singlePostLoader from "./loader/singlePostLoader.js";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} loader={postsLoader} />
      <Route path="/create-post" element={<CreatePostPage />} />
      <Route
        path="/posts/:id"
        element={<PostDetailPage />}
        loader={singlePostLoader}
      />
      <Route
        path="/edit/:id"
        element={<EditPostPage />}
        loader={singlePostLoader}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
