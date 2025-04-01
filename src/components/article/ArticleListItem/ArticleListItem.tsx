import styles from "../Article/Article.module.css";
import parseDescription from "../../../util/parse-description.util.ts";
import {ArticleInterface} from "../../../interfaces/article.interface.ts";

function ArticleListItem({ article }: {article: ArticleInterface}) {
    return(
        // todo do random pastel bg generator here
        <article className={styles.article}>
            {article.image && <img className={styles['article-image']} src={article.image}  alt={article.title}/>}
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

export default ArticleListItem;