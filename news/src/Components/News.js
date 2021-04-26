import React from "react"

const News = ({newsArticles}) =>{
    if (newsArticles.length === 0){
      return(
        null
      )
    }
    return(
      <h1>{newsArticles[0].heading}</h1>
    )
  }
  
  export default News