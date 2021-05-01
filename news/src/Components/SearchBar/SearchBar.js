import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GET_NEWS } from "../../Redux/actions"
import SourceFilter from "./SourceFilter"
import ScopeFilter from "./ScopeFilter"
import SearchTypeFilter from "./SearchTypeFilter"
import OrderBy from "./OrderBy"
const SearchBar = () => {

    const dispatch = useDispatch()
    //todo custom fields hook
    const [searchTerms, setSearchTerms] = useState("")
    const scope = useSelector(state => {
        return state.parameters.scope
    })
    const sources = useSelector(state => {
        return state.parameters.sources
    })
    const searchType = useSelector(state => {
        return state.parameters.searchType
    })
    const orderBy = useSelector(state => {
        return state.parameters.orderBy
    })
    const generateSearchParameters = () => {
        return ({
            searchTerms,
            scope,
            sources,
            searchType,
            orderBy
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

    return (
        <div>
            <input type="text" value={searchTerms} onChange={(event) => { setSearchTerms(event.target.value) }}></input>
            <button onClick={handleSearch}>Search</button>
            <ScopeFilter />
            <SearchTypeFilter />
            <div style={{ height: 50 }} />
            <p>Choose Sources:</p>
            <SourceFilter />
            <OrderBy />
        </div>
    )
}
export default SearchBar