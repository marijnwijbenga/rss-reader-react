import ArticleSpotlight from "../../components/article/ArticleSpotlight/ArticleSpotlight.tsx";
import styles from './ArticleFeedView.module.css';
import ArticleListItem from "../../components/article/ArticleListItem/ArticleListItem.tsx";
import Alert from "../../components/alert/Alert.tsx";
import {useArticleContext} from "../../context/ArticleContextProvider.tsx";

function ArticleFeedView() {
    const { articles, loading, error } = useArticleContext();

    return (
        <>
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
        </>
    )
}

export default ArticleFeedView;