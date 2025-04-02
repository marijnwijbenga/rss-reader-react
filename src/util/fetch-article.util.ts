import fetchArticles from "./fetch-articles.util.ts";
import {ArticleInterface} from "../interfaces/article.interface.ts";

import slug from "slug";

const fetchArticle = async (slugString: string): Promise<ArticleInterface>  => {
        const articles: ArticleInterface[] = await fetchArticles();
        const article = articles.find((article) => slug(article.title) === slugString);

        if (!article) {
            throw new Error(`Article not found for ${slugString}.`);
        }

        return article;
}

export default fetchArticle;