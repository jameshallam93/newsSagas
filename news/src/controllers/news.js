import axios from "axios"

import { getScopeModifier } from "./getScopeModifier"
const baseUrl = `https://newsapi.org/v2/`
const KEY = process.env.REACT_APP_API_KEY


const newsRequests = {
    async getNews(searchTerms, scope, sources) {
        console.log(sources)
        const scopeModifier = getScopeModifier(scope)

        const sourceModifier = sources =>{
            let baseString = `&sources=`
            sources.forEach(source=>{
                baseString = `${baseString}${source},`
            })
            console.log(baseString)
            return baseString
        }
        const sourceString = sourceModifier(sources)
        const request = `${baseUrl}${scopeModifier}${searchTerms}${sourceString}&apiKey=${KEY}`

        const response = await axios.get(request)
        return (response.data)
    }
}
export default newsRequests