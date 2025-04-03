import {useParams} from "react-router";
import Article from "../../components/article/Article/Article.tsx";
import {useEffect, useState} from "react";
import {ArticleInterface} from "../../interfaces/article.interface.ts";
import styles from "../Feed/ArticleFeedView.module.css";
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
        <main>
            <div className={styles.title}>
                <h1>N<span style={{color: 'var(--pastel-red-800)'}}>O</span>S JeugdJournaal</h1>
            </div>
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
        </main>

    )
}

export default ArticleDetailView;
