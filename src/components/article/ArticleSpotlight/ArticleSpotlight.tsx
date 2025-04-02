import styles from "./Spotlight.module.css";
import parseDescription from "../../../util/parse-description.util.ts";
import {ArticleInterface} from "../../../interfaces/article.interface.ts";
import dummyImage from "@assets/img/dummy.jpg"
import slug from "slug";
import {Link, useNavigate} from "react-router";
import {prettyDate} from "../../../util/pretty-date.util.ts";

function ArticleSpotlight({article}: { article: ArticleInterface }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/article/${slug(article.title)}`)
    }

    return (
        <article
            className={styles.articleSpotlight}
            onClick={handleClick}
        >
            <div>
                {article.image &&
                    <img className={styles.articleSpotlightImage} src={article.image ? article.image : dummyImage}
                         alt={article.title}/>}
            </div>
            <div className={styles.articleSpotlightContent}>
                <div className={styles.articleSpotlightDate}>
                    <time dateTime={article.date} >
                        {article.date && prettyDate(article.date)}
                    </time>
                </div>
                <div className={styles.articleSpotlightTitle}>
                    <h1>
                        {article.title}
                    </h1>
                </div>
                <div className={styles.articleSpotlightDescription}>
                    {parseDescription(article.description.substring(0, 250).concat('...'))}
                </div>
                <div className={styles.articleSpotlightReadmore}>
                    <Link to={`/article/${slug(article.title)}`}>
                        Lees verder...
                    </Link>
                </div>
                <div className={styles.articleSpotlightLink}>
                    {article.link && <a href={article.link}>Naar het originele artikel</a>}
                </div>
            </div>
        </article>
    )
}

export default ArticleSpotlight