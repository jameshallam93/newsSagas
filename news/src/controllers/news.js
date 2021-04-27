import axios from "axios"

import { getScopeModifier } from "./getScopeModifier"
const baseUrl = `https://newsapi.org/v2/`
const KEY = process.env.REACT_APP_API_KEY


const newsRequests = {
    async getNews(searchTerms, scope) {
        const scopeModifier = getScopeModifier(scope)
        const request = `${baseUrl}${scopeModifier}${searchTerms}&apiKey=${KEY}`

        const response = await axios.get(request)
        return (response.data)
    }
}
export default newsRequests