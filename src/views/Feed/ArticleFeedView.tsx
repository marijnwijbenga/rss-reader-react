import {useEffect, useState} from "react";
import {ArticleInterface} from "../../interfaces/article.interface.ts";

import parseArticles from "../../util/parse-articles.util.ts";
import ArticleSpotlight from "../../components/article/ArticleSpotlight/ArticleSpotlight.tsx";

import styles from './Feed.module.css';
import ArticleListItem from "../../components/article/ArticleListItem/ArticleListItem.tsx";

const CORS_URL: string = 'https://corsproxy.io/?key=9446d2b6&url=';
const RSS_DOMAIN: string = 'https://feeds.nos.nl/'
const RSS_PATHS: string[] = ['jeugdjournaal', 'nosnieuwstech', 'nosnieuwsopmerkelijk'];

const fetchRSS = async () => {
    // todo error handling
    const response = await fetch(CORS_URL + RSS_DOMAIN + RSS_PATHS[0]);
    return await response.text();
}

function ArticleFeedView() {
    // todo loadingstate
    const [articles, setArticles] = useState<ArticleInterface[]>([]);

    useEffect(() => {
        const getData = async () => {
            const rss = await fetchRSS();
            const parsed = parseArticles(rss)
            setArticles(parsed)
        };

        // todo betere error handling
        getData().catch(e => console.error(e));

    }, [])

    return (
        <>
            {/*TODO: Make layouts */}
            <main>
                <section className={styles.spotlight}>
                    {
                        articles.slice(0, 2).map((article) => (
                                <ArticleSpotlight article={article} key={article.link}/>
                            )
                        )
                    }
                </section>
                <section className={styles.list}>
                    {
                        articles.slice(2).map((article) => (
                                <ArticleListItem article={article} key={article.link}/>
                            )
                        )
                    }
                </section>
            </main>


        </>
    )
}

export default ArticleFeedView;