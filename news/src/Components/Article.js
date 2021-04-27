import React from "react"
import { removeHtmlTags } from "./utils/removeHtmlTags"
import { formatDate } from "./utils/formatDate"

const Article = ({ article }) => {

    const description = removeHtmlTags(article.description)

    const formattedDate = formatDate(article.publishedAt)

    const imageStyle = {
        maxHeight: 500,
        maxWidth: 800
    }
    
    return (
        <div>
            <h1 className="article-title">{article.title}</h1>
            <img src={article.urlToImage} style={imageStyle} alt="not found" />
            <h3 className="article-description">{description}</h3>
            <div className="incidentals">
                <a href={article.url}>Link to the full story</a><p>Brought to you by {article.source.name}</p>
                <p>Published {formattedDate}</p>
            </div>
        </div>
    )
}

export default Article