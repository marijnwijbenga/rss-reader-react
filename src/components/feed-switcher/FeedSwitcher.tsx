import styles from "./FeedSwitcher.module.css";
import {RSSFeeds} from "../../enums/rss-urls.enum.ts";
import {useNavigate} from "react-router-dom";

function FeedSwitcher({ onFeedSwitch, feed } : { onFeedSwitch: (feed: RSSFeeds) => void, feed: RSSFeeds }) {
    const navigate = useNavigate();

    const switchFeed = (newFeed: RSSFeeds) => {
        onFeedSwitch(newFeed);
        navigate("/");
    };
    return (
        <>
            <div className={styles.menu}>
                <button
                    onClick={() => switchFeed(RSSFeeds.Jeugdjournaal)}
                    tabIndex={0}
                >Jeugd Journaal</button>
                <button
                    tabIndex={0}
                    onClick={() => switchFeed(RSSFeeds.NosNieuwsTech)}
                >Nos Nieuws Tech</button>
                <button
                    tabIndex={0}
                    onClick={() => switchFeed(RSSFeeds.NosNieuwsOpmerkelijk)}
                >Nos Nieuws Opmerkelijk</button>
            </div>
            <div className={styles.title}>
                <h1>
                    <span>N<span style={{color: 'var(--pastel-red-800)'}}>O</span>S </span>
                    <span>
                        {feed === RSSFeeds.Jeugdjournaal && ('Jeugd Journaal')}
                        {feed === RSSFeeds.NosNieuwsTech && ('Tech Nieuws')}
                        {feed === RSSFeeds.NosNieuwsOpmerkelijk && ('Opmerkelijk Nieuws')}
                    </span>
                </h1>
            </div>
        </>
    );
}

export default FeedSwitcher;

