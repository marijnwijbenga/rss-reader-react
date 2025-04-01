import styles from "./Spotlight.module.css";
import parseDescription from "../../../util/parse-description.util.ts";
import {ArticleInterface} from "../../../interfaces/article.interface.ts";

function ArticleSpotlight({article}: {article: ArticleInterface}) {

    return (
        <article className={styles.articleSpotlight}>
            {article.image && <img className={styles.image} src={article.image}  alt={article.title}/>}
            <time dateTime={article.date}>{article.date}</time>
            <header>
                <h1>
                    {article.title}
                </h1>
            </header>
            <div>{parseDescription(article.description)}</div>
            { article.link && <a href={article.link}>Naar het originele artikel</a>}
        </article>
    )
}

export default ArticleSpotlight