import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CHANGE_SCOPE, GET_NEWS } from "../Redux/actions"
import SourceFilter from "./SourceFilter"
import ScopeFilter from "./ScopeFilter"

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

    const handleSearch = async () => {
        try {
            dispatch(GET_NEWS(searchTerms, scope, sources))
        } catch (e) {
            console.log(e)
        }
    }  

    return(
    <div>
        <input type="text" value={searchTerms} onChange={(event) => { setSearchTerms(event.target.value) }}></input>
        <button onClick={handleSearch}>Search</button>
        <ScopeFilter />
        <div style = {{height:50}}/>
        <SourceFilter/>
    </div>
    )
}
export default SearchBar