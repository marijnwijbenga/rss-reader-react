import {RouterProvider} from "react-router";
import {routes} from "./routes.ts";
import {ArticleProvider} from "./context/ArticleContextProvider.tsx";
import {useEffect, useState} from "react";
import fetchArticles from "./util/fetch-articles.util.ts";
import {ArticleInterface} from "./interfaces/article.interface.ts";

function App() {

    const [articles, setArticles] = useState<ArticleInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const fetched = await fetchArticles();
                setArticles(fetched);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getArticles();
    }, [])

  return (
      <ArticleProvider value={{ articles, loading, error }}>
        <RouterProvider router={routes} />
      </ArticleProvider>
  )
}

export default App
