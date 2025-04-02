import {ArticleInterface} from "../../../interfaces/article.interface.ts";

import styles from "./ListItem.module.css"
import parseDescription from "../../../util/parse-description.util.ts";
import {Link} from "react-router";
import slug from "slug";
import dummyImage from "@assets/img/dummy.jpg";
import {prettyDate} from "../../../util/pretty-date.util.ts";
import randomPastelColor from "../../../util/random-color.util.ts";
import {useEffect, useState} from "react";

function ArticleListItem({article}: { article: ArticleInterface }) {

    const [bgColor, setBgColor] = useState('');
    const [textColor, setTextColor] = useState('');

    useEffect(() => {
        const {textColor, bgColor} = randomPastelColor();
        setBgColor(bgColor);
        setTextColor(textColor);
    }, []);

    return (
        <article className={styles.article} style={{ backgroundColor: bgColor }}>
            <div
                className={styles.listImage}
                style={{ backgroundImage: `url(${article.image ? article.image : dummyImage})` }}
            >
            </div>

            <div className={styles.listContent}>
                <div className={styles.listTitle}>
                    <h1 style={{ color: textColor }}>{article.title}</h1>
                </div>
                <div className={styles.listDate}>
                    <time dateTime={article.date} >
                        {article.date && prettyDate(article.date)}
                    </time>
                </div>

                <div className={styles.listDescription}>
                    {parseDescription(article.description.substring(0, 200).concat('...'))}
                </div>
                <div className={styles.listReadMore}>
                    <Link to={`/article/${slug(article.title)}`}>
                        <span style={{ color: `oklch(${textColor})` }}>Lees verder...</span>
                    </Link>
                </div>
            </div>


        </article>
    )
}

export default ArticleListItem;