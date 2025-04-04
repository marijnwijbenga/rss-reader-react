import parseDescription from "../../../util/parse-description.util.ts";
import styles from './Article.module.css';
import {ArticleInterface} from "../../../interfaces/article.interface.ts";
import dummyImage from "@assets/img/dummy.jpg";
import {prettyDate} from "../../../util/pretty-date.util.ts";


function Article({article}: { article: ArticleInterface }) {

    return (
        <article className={styles.article}>
            <div>
                {article.image &&
                    <img className={styles.articleImage} src={article.image ? article.image : dummyImage}
                         alt={article.title}/>}
            </div>
            <div className={styles.articleContent}>
                <div className={styles.articleDate}>
                    {article.date && <time dateTime={article.date}>{prettyDate(article.date)}</time>}
                </div>

                <h2 className={styles.articleTitle}>
                    {article.title}
                </h2>

                <div className={styles.articleDescription}>
                    {parseDescription(article.description)}
                </div>
                <div className={styles.articleOriginalLink}>
                    {article.link && <a href={article.link} target="_blank">Naar het originele artikel</a>}
                </div>
            </div>
        </article>
    )
}

export default Article;