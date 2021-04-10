import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import StartPage from "./pages/StartPage";

export const publicRoutes = [
    {
        path: '/',
        Component: AboutPage
    },
    {
        path: '/about',
        Component: AboutPage
    },
    {
        path: '/animations',
        Component: AboutPage
    },
    {
        path: '/canvas-interaction',
        Component: AboutPage
    },
    {
        path: '/features',
        Component: AboutPage
    },
    {
        path: '/start-page',
        Component: StartPage
    },
    // {
    //     path: '/posts',
    //     Component: Posts
    // },
    // {
    //     path: '/posts/:id',
    //     Component: Post
    // },
    {
        path: '/error-404',
        Component: NotFoundPage
    }
]