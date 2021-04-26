import React from "react"
import { useSelector } from "react-redux"

const removeHtmlTags = (string) => {
    return string.replace(/(<([^>]+)>)/ig, '* ')
}

const Article = ({ article }) => {

    const description = removeHtmlTags(article.description)

    return (
        <div>
            <h1>{article.title}</h1>
            <h3>{description}</h3>
            <a href={article.url}>Link to the full story</a><p>Brought to you by {article.source.name}</p>
        </div>
    )
}

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
            <Article article={articles[0]} />
        </div>
    )
}

export default News