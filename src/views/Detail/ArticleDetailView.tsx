import {useParams} from "react-router";
import Article from "../../components/article/Article/Article.tsx";
import {useEffect, useState} from "react";
import fetchArticle from "../../util/fetch-article.util.ts";
import {ArticleInterface} from "../../interfaces/article.interface.ts";
import styles from "../Feed/ArticleFeed.module.css";
import Alert from "../../components/alert/Alert.tsx";

function ArticleDetailView() {

    const {slug} = useParams<{ slug: string }>()

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [article, setArticle] = useState<ArticleInterface>();

    useEffect(() => {
        const getArticle = async () => {
            try {
                const article = await fetchArticle(slug as string);
                setArticle(article);
                setError(false);

            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        getArticle();
    }, [slug]);


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
        </main>

    )
}

export default ArticleDetailView;
