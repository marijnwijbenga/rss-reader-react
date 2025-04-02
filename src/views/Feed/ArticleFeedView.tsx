import {useEffect, useState} from "react";
import {ArticleInterface} from "../../interfaces/article.interface.ts";
import ArticleSpotlight from "../../components/article/ArticleSpotlight/ArticleSpotlight.tsx";
import styles from './ArticleFeed.module.css';
import ArticleListItem from "../../components/article/ArticleListItem/ArticleListItem.tsx";
import Alert from "../../components/alert/Alert.tsx";
import fetchArticles from "../../util/fetch-articles.util.ts";

function ArticleFeedView() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [articles, setArticles] = useState<ArticleInterface[]>([]);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const articles = await fetchArticles();
                setArticles(articles);
                setLoading(false);
                setError(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
                setError(true);
            }
        };

        getArticles();

    }, [])

    return (
        <main>
            <div className={styles.title}>
                <h1>N<span style={{color: 'var(--pastel-red-800)'}}>O</span>S JeugdJournaal</h1>
            </div>
            {loading && <Alert variant="info">Artikelen aan het ophalen..</Alert>}
            {!loading && articles.length > 0 && (
                <>
                    <section className={styles.spotlight}>
                        {articles.slice(0, 2).map((article, index) => (
                                <ArticleSpotlight article={article} key={index}/>
                            )
                        )}
                    </section>
                    <div className={styles.subTitle}>
                        <h2>En nog meer nieuws!</h2>
                    </div>
                    <section className={styles.list}>
                        {articles.slice(2).map((article, index) => (
                                <ArticleListItem article={article} key={index}/>
                            )
                        )}
                    </section>
                </>

            )}
            {error && <Alert variant="error">Oeps, er is iets fout gegaan!</Alert>}
        </main>
    )
}

export default ArticleFeedView;