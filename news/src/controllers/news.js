import axios from "axios"

import { getScopeModifier } from "./getScopeModifier"
const baseUrl = `https://newsapi.org/v2/`
const KEY = process.env.REACT_APP_API_KEY


const getSourceModifier = sources =>{
    let baseString = `&sources=`
    sources.forEach(source=>{
        baseString = `${baseString}${source},`
    })
    return baseString
}

const getSearchTypeModifier = (searchType) =>{
    const modifier = searchType === "article" ?
        "?q=" :
        "?qInTitle="
    return modifier
}

const getSortByModifier = (orderBy) =>{
    return `&sortBy=${orderBy}`
}

const newsRequests = {
    async getNews(searchParameters) {
        const {searchTerms, scope, sources, searchType, orderBy} = searchParameters

        const scopeModifier = getScopeModifier(scope)
        const sourceModifier = getSourceModifier(sources)
        const searchTypeModifier = getSearchTypeModifier(searchType)
        const sortByModifier = getSortByModifier(orderBy)

        const request = `${baseUrl}${scopeModifier}${searchTypeModifier}${searchTerms}${sourceModifier}&language=en${sortByModifier}&apiKey=${KEY}`

        const response = await axios.get(request)
        return (response.data)
    }
}
export default newsRequests