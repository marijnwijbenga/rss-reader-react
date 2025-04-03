import {createContext, ReactNode, useContext} from "react";
import {ArticleInterface} from "../interfaces/article.interface.ts";

interface ArticleContextInterface {
    articles: ArticleInterface[];
    loading: boolean;
    error: boolean;
}

interface ArticleProviderProps {
    children: ReactNode;
    value: ArticleContextInterface
}

const ArticleContext = createContext<ArticleContextInterface | undefined>(undefined);

export const useArticleContext = () => {
    const context = useContext(ArticleContext);
    if(!context) {
        throw new Error(`useArticleContext must be used within ArticleProvider`);
    }
    return context;
};

export const ArticleProvider = ({ children, value }: ArticleProviderProps) => {

    return (
        <ArticleContext.Provider value={ value }>
            {children}
        </ArticleContext.Provider>
    )
}