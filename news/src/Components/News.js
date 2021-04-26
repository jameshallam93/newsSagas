import React from "react"
import { useSelector } from "react-redux"
import Article from "./Article"


const News = () => {
    const articles = useSelector(state =>
        state.news.news
    )

    const isLoading = useSelector(state =>
        state.news.loading
    )

    if (articles.length === 0 || isLoading) {
        return null
    }
    return (
        <div>
            {
                articles.map(article =>
                    <Article article = {article}
                    key = {article.url} />
                )
            }
                
        </div>
    )
}

export default News