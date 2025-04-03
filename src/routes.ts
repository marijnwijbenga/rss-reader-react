import {createBrowserRouter} from "react-router";
import ArticleFeedView from "./views/Feed/ArticleFeedView.tsx";
import ArticleDetailView from "./views/Detail/ArticleDetailView.tsx";
import App from "./App.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: ArticleFeedView
            },
            {
                path: "article/:slug",
                Component: ArticleDetailView
            }
        ]
    },

])