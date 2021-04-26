import axios from "axios"
const baseUrl = `https://newsapi.org/v2/everything?q=`
const KEY = process.env.REACT_APP_API_KEY


const newsRequests = {
    async getNews(searchTerms) {
        const request = `${baseUrl}${searchTerms}&apiKey=${KEY}`
        const response = await axios.get(request)
        return (response.data)
    }
}
export default newsRequests