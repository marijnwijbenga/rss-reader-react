import {RouterProvider} from "react-router";
import {routes} from "./routes.ts";
import {ArticleProvider} from "./context/ArticleContextProvider.tsx";
import {useEffect, useState} from "react";
import fetchArticles from "./util/fetch-articles.util.ts";
import {ArticleInterface} from "./interfaces/article.interface.ts";
import styles from "./App.module.css"
import {RSSFeeds} from "./enums/rss-urls.enum.ts";

function App() {

    const [articles, setArticles] = useState<ArticleInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [feed, setFeed] = useState(RSSFeeds.Jeugdjournaal);

    const onSwitchFeed = (feed: RSSFeeds) => {
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
                <div className={styles.menu}>
                    <button onClick={() => onSwitchFeed(RSSFeeds.Jeugdjournaal)}>Jeugd Journaal</button>
                    <button onClick={() => onSwitchFeed(RSSFeeds.NosNieuwsTech)}>Nos Nieuws Tech</button>
                    <button onClick={() => onSwitchFeed(RSSFeeds.NosNieuwsOpmerkelijk)}>Nos Nieuws Opmerkelijk</button>
                </div>
                <div className={styles.title}>
                    <h1>
                        <span>N<span style={{color: 'var(--pastel-red-800)'}}>O</span>S </span>
                        <span>
                            {feed === RSSFeeds.Jeugdjournaal && ('Jeugd Journaal')}
                            {feed === RSSFeeds.NosNieuwsTech && ('Tech Nieuws')}
                            {feed === RSSFeeds.NosNieuwsOpmerkelijk && ('Opmerkelijk Nieuws')}
                        </span>
                    </h1>
                </div>
                <RouterProvider router={routes}/>
            </main>

        </ArticleProvider>
    )
}

export default App
