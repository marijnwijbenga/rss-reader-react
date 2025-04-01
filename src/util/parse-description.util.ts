import sanitizeHtml from "sanitize-html";
import parse from "html-react-parser";

//  todo error handling
const parseDescription = (p: string) => {
    const clean = sanitizeHtml(p, {
        allowedTags: ['p', 'h2'],
        allowedAttributes: {
            'p': [],
            'h2': []
        }
    });

    return parse(clean);
}

export default parseDescription;