import {createBrowserRouter} from "react-router";
import Feed from "./views/Feed.tsx";
import Article from "./views/Article.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Feed
    },
    {
        path: ":article",
        Component: Article
    }
])