import {ArticleInterface} from "../interfaces/article.interface.ts";

const parseArticles = (rssString: string): ArticleInterface[] => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(rssString, 'text/xml');
    const items = xml.getElementsByTagName('item');

    return Array.from(items).map(item => ({
        image: item.querySelector('enclosure')?.getAttribute('url') || '',
        date: item.querySelector('pubDate')?.textContent || '',
        title: item.querySelector('title')?.textContent || '',
        description: item.querySelector('description')?.textContent || '',
        link: item.querySelector('link')?.textContent || '',
    }))
}

export default parseArticles;