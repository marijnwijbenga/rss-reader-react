import {useEffect, useState} from "react";
import {ArticleInterface} from "../interfaces/article.interface.ts";

import parseArticles from "../util/parse-articles.util.ts";
import parseParagraphs from "../util/parse-paragraph.util.ts";

const CORS_URL: string = 'https://corsproxy.io/?key=9446d2b6&url=';
const RSS_DOMAIN: string = 'https://feeds.nos.nl/'
const RSS_PATHS: string[] = ['jeugdjournaal', 'nosnieuwstech', 'nosnieuwsopmerkelijk'];

const fetchFeed = async () => {
    const response = await fetch(CORS_URL + RSS_DOMAIN + RSS_PATHS[0]);
    return await response.text();
}



function Feed() {
    const [articles, setArticles] = useState<ArticleInterface[]>([]);

    useEffect(() => {
        const getData = async () => {
            const rss = await fetchFeed();
            const parsed = parseArticles(rss)
            setArticles(parsed)
        };

        getData().catch(e => console.error(e));

    }, [])

    return (
        <>
            <div>
                {
                    articles.map((article, index) => (
                            <article key={index}>
                                <img className="image" src={article.image}  alt={article.title}/>
                                <time dateTime={article.date}>{article.date}</time>
                                <header>
                                    <h1>
                                        {article.title}
                                    </h1>
                                </header>
                                <div>{parseParagraphs(article.description)}</div>
                                <a href={article.link}>Naar het originele artikel</a>
                            </article>
                        )
                    )
                }
            </div>

        </>
    )
}

export default Feed;