import {useParams} from "react-router";
import Article from "../../components/article/Article/Article.tsx";
import {useEffect, useState} from "react";
import {ArticleInterface} from "../../interfaces/article.interface.ts";
import Alert from "../../components/alert/Alert.tsx";
import slugify from "slug";
import {useArticleContext} from "../../context/ArticleContextProvider.tsx";

function ArticleDetailView() {

    const {slug} = useParams<{ slug: string }>()

    const {articles, loading, error} = useArticleContext();
    const [article, setArticle] = useState<ArticleInterface>();

    useEffect(() => {
        const getArticle = async () => {
            const article = articles.find((article) => slugify(article.title) === slug)
            setArticle(article);
        };

        getArticle();
    }, [articles, slug]);

    return (
        <>
            {loading && <Alert variant="info">Artikelen aan het ophalen..</Alert>}
            {!loading && article && (
                <>
                    <Article article={article}></Article>
                </>
            )}
            {error && <Alert variant="error">Oeps, er is iets fout gegaan!</Alert>}
            {!loading && !article && !error && (
                <Alert variant="warning">Artikel niet gevonden!</Alert>
            )}
        </>

    )
}

export default ArticleDetailView;
