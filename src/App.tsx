import {Outlet} from "react-router";
import {ArticleProvider} from "./context/ArticleContextProvider.tsx";
import {useEffect, useState} from "react";
import fetchArticles from "./util/fetch-articles.util.ts";
import {ArticleInterface} from "./interfaces/article.interface.ts";
import {RSSFeeds} from "./enums/rss-urls.enum.ts";
import FeedSwitcher from "./components/feed-switcher/FeedSwitcher.tsx";

function App() {

    const [articles, setArticles] = useState<ArticleInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [feed, setFeed] = useState(RSSFeeds.Jeugdjournaal);

    const handleFeedSwitch = (feed: RSSFeeds) => {
        setFeed(feed);
    }

    useEffect(() => {
        const getArticles = async () => {
            try {
                const fetched = await fetchArticles(feed);
                setArticles(fetched);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        getArticles();
    }, [feed])

    return (
        <ArticleProvider value={{articles, loading, error}}>
            <main>
                <FeedSwitcher feed={feed} onFeedSwitch={handleFeedSwitch}></FeedSwitcher>
                <Outlet />
            </main>
        </ArticleProvider>
    )
}

export default App
