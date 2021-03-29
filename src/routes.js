import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";
import MainPage from "./pages/MainPage";
import StartPage from "./pages/StartPage";

export const publicRoutes = [
    {
        path: '/start',
        Component: StartPage
    },
    {
        path: '/main-page',
        Component: MainPage
    },
    {
        path: '/posts',
        Component: Posts
    },
    {
        path: '/posts/:id',
        Component: Post
    }
]