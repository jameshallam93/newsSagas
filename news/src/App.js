import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loading from "./Components/Loading"
import News from "./Components/News"
import newsRequests from "./controllers/news"
import { GET_NEWS } from "./Redux/actions"

function App() {
  const dispatch = useDispatch()
  const [searchTerms, setSearchTerms] = useState("")
  const [newsArticles, setNewsArticles] = useState([])
  const [loading, setLoading] = useState(false)

  const article = useSelector(state =>{
    console.log(state)
    if (!state.news.news[0]){
      return null
    }
    return state.news.news[0].title
  })

  const handleSearch = async () =>{
    const baseUrl = `https://newsapi.org/v2/everything?q=`
    const requestUrl = `${baseUrl}${searchTerms}&apiKey=${process.env.REACT_APP_API_KEY}`

    dispatch(GET_NEWS(requestUrl))
  }

  return (
    <>
    <div>
      <h1>Search for keywords</h1>

      <input type = "text" value = {searchTerms} onChange = {(event)=>{setSearchTerms(event.target.value)}}></input>
      <button onClick = {handleSearch}>Search</button>
    </div>
    <div>
      <p>{article}</p>
      <Loading loading = {loading} />
      <News newsArticles = {newsArticles} />
    </div>
    </>
  );
}

export default App;
