import {CORS_URL} from "../const/CORS_URLS.ts";
import parseArticles from "./parse-articles.util.ts";
import {ArticleInterface} from "../interfaces/article.interface.ts";
import {RSSFeeds} from "../enums/rss-urls.enum.ts";

// todo make enum of feed
const fetchArticles = async (feed: string = RSSFeeds.Jeugdjournaal): Promise<ArticleInterface[]> => {
    try {
        const response = await fetch(`${CORS_URL}${feed}`);
        if (!response.ok) throw new Error(response.statusText);
        const articlesText = await response.text();
        return parseArticles(articlesText) ;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default fetchArticles;