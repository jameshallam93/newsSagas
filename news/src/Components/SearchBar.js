import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GET_NEWS, CHANGE_ORDER_BY } from "../Redux/actions"
import SourceFilter from "./SourceFilter"
import ScopeFilter from "./ScopeFilter"
import SearchTypeFilter from "./SearchTypeFilter"

const SearchBar = () =>{

    const dispatch = useDispatch()
    //todo custom fields hook
    const [searchTerms, setSearchTerms] = useState("")
    const scope = useSelector(state =>{
        return state.parameters.scope
    })
    const sources = useSelector(state =>{
        return state.parameters.sources
    })
    const searchType = useSelector(state =>{
        return state.parameters.searchType
    })
    const orderBy = useSelector(state =>{
        return state.parameters.orderBy
    })
    const generateSearchParameters = () =>{
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
    const handleOrderChange = (event) =>{
        dispatch(CHANGE_ORDER_BY(event.target.value))
    }  

    return(
    <div>
        <input type="text" value={searchTerms} onChange={(event) => { setSearchTerms(event.target.value) }}></input>
        <button onClick={handleSearch}>Search</button>
        <ScopeFilter />
        <SearchTypeFilter />
        <div style = {{height:50}}/>
        <p>Choose Sources:</p>
        <SourceFilter/>
        <div className = "sort-by">
            <p>Order By:</p>
            <form>
                <label>
                    <input type = "radio"
                    value = "popularity"
                    id = "popularity"
                    name = "popularity"
                    onChange = {handleOrderChange}
                    checked = {orderBy === "popularity"}
                    />
                Popularity
                </label>
                <label>
                    <input type = "radio"
                    value = "publishedAt"
                    id = "publishedAt"
                    name = "publishedAt"
                    onChange = {handleOrderChange}
                    checked = {orderBy === "publishedAt"}
                    />
                Date
                </label>
                <label>
                    <input type = "radio"
                    value = "relevancy"
                    id = "relevancy"
                    name = "relevancy"
                    onChange = {handleOrderChange}
                    checked = {orderBy === "relevancy"}
                    />
                Relevancy
                </label>
            </form>
        </div>
    </div>
    )
}
export default SearchBar