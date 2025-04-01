import {createBrowserRouter} from "react-router";
import ArticleFeedView from "./views/Feed/ArticleFeedView.tsx";
import ArticleDetailView from "./views/Detail/ArticleDetailView.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: ArticleFeedView
    },
    {
        path: ":article",
        Component: ArticleDetailView
    }
])