import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GET_NEWS } from "../Redux/actions"
import SourceFilter from "./SourceFilter"
import ScopeFilter from "./ScopeFilter"
import SearchTypeFilter from "./SearchTypeFilter"

const SearchBar = () =>{

    const dispatch = useDispatch()
    //todo custom fields hook
    const [searchTerms, setSearchTerms] = useState("")
    const scope = useSelector(state =>{
        return state.sources.scope
    })
    const sources = useSelector(state =>{
        return state.sources.sources
    })
    const searchType = useSelector(state =>{
        return state.sources.searchType
    })

    const generateSearchParameters = () =>{
        return ({
            searchTerms,
            scope,
            sources,
            searchType
        })
    }

    const handleSearch = async () => {
        try {
            const searchParameters = generateSearchParameters()
            dispatch(GET_NEWS(searchParameters))
        } catch (e) {
            console.log(e)
        }
    }  

    return(
    <div>
        <input type="text" value={searchTerms} onChange={(event) => { setSearchTerms(event.target.value) }}></input>
        <button onClick={handleSearch}>Search</button>
        <ScopeFilter />
        <SearchTypeFilter />
        <div style = {{height:50}}/>
        <SourceFilter/>

    </div>
    )
}
export default SearchBar