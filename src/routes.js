import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";
import AboutPage from "./pages/AboutPage";
import AnimationsPage from "./pages/AnimationsPage";
import FeaturesPage from "./pages/features/FeaturesPage";
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
        Component: AnimationsPage
    },
    {
        path: '/canvas-interaction',
        Component: AboutPage
    },
    {
        path: '/features/:name?',
        Component: FeaturesPage
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