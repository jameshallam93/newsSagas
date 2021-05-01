import axios from "axios"

import { getScopeModifier, getSourceModifier, getSearchTypeModifier, getSortByModifier } from "./requestModifiers"
const baseUrl = `https://newsapi.org/v2/`
const KEY = process.env.REACT_APP_API_KEY

const generateRequest = (searchParameters) => {
    const { searchTerms, scope, sources, searchType, orderBy } = searchParameters

    const scopeModifier = getScopeModifier(scope)
    const sourceModifier = getSourceModifier(sources)
    const searchTypeModifier = getSearchTypeModifier(searchType)
    const sortByModifier = getSortByModifier(orderBy)

    return `${baseUrl}${scopeModifier}${searchTypeModifier}${searchTerms}${sourceModifier}&language=en${sortByModifier}&apiKey=${KEY}`
}

const newsRequests = {
    async getNews(searchParameters) {
        const request = generateRequest(searchParameters)
        const response = await axios.get(request)
        return (response.data)
    }
}
export default newsRequests