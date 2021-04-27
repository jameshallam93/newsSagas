import React from "react"

const removeHtmlTags = (string) => {
    return string.replace(/(<([^>]+)>)/ig, '* ')
}
const formatDate = (date) =>{
    const splitByDayAndTime = date.split("T")
    const splitDate = splitByDayAndTime[0].split("-")
    const orderedDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
    return orderedDate
}
const Article = ({ article }) => {

    const description = removeHtmlTags(article.description)

    const imageStyle = {
        maxHeight:500,
        maxWidth:800
    }
    const formattedDate = formatDate(article.publishedAt)

    return (
        <div>
            <h1>{article.title}</h1>
            <img src = {article.urlToImage} style = {imageStyle}  alt = "not found"/>
            <h3 className = "article-description">{description}</h3>
            <a href={article.url}>Link to the full story</a><p>Brought to you by {article.source.name}</p>
            <p>Published {formattedDate}</p>
        </div>
    )
}

export default Article