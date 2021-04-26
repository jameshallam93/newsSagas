import React from "react"

const removeHtmlTags = (string) => {
    return string.replace(/(<([^>]+)>)/ig, '* ')
}

const Article = ({ article }) => {

    const description = removeHtmlTags(article.description)

    const imageStyle = {
        maxHeight:500,
        maxWidth:800
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <img src = {article.urlToImage} style = {imageStyle}  alt = "not found"/>
            <h3>{description}</h3>
            <a href={article.url}>Link to the full story</a><p>Brought to you by {article.source.name}</p>
        </div>
    )
}

export default Article