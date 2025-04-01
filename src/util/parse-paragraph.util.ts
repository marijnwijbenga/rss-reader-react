import sanitizeHtml from "sanitize-html";
import parse from "html-react-parser";

const parseParagraphs = (p: string) => {
    const clean = sanitizeHtml(p, {
        allowedTags: ['p', 'h2']
    });

    return parse(clean);
}

export default parseParagraphs;