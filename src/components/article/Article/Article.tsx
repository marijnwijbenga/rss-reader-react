import parseDescription from "../../../util/parse-description.util.ts";
import styles from './Article.module.css';
import {ArticleInterface} from "../../../interfaces/article.interface.ts";


function Article({article}: {article: ArticleInterface}) {

    return (
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

export default Article;