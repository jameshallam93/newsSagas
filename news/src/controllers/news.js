import axios from "axios"
const baseUrl = `https://newsapi.org/v2/`
const KEY = process.env.REACT_APP_API_KEY

const getScopeModifier = (scope) =>{
    if (scope === "everything")
        { return "everything?q="
    }
    return "top-headlines?q="
}

const newsRequests = {
    async getNews(searchTerms, scope) {

        const scopeModifier = getScopeModifier(scope)
        const request = `${baseUrl}${scopeModifier}${searchTerms}&apiKey=${KEY}`
        console.log(request)
        const response = await axios.get(request)
        return (response.data)
    }
}
export default newsRequests