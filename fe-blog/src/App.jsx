import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailPage from "./pages/PostDetailPage";
import EditPostPage from "./pages/EditPostPage"; // Import the new EditPostPage
import Layout from "./components/Layout";
import postsLoader from "./loader/postsLoader.js";
import singlePostLoader from "./loader/singlePostLoader.js";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: postsLoader,
      },
      {
        path: "/create-post",
        element: <CreatePostPage />,
      },
      {
        path: "/posts/:id",
        element: <PostDetailPage />,
        loader: singlePostLoader,
      },
      {
        path: "/edit/:id",
        element: <EditPostPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
