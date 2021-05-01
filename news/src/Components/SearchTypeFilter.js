import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { CHANGE_SEARCH_TYPE } from "../Redux/actions"

const SearchTypeFilter = () =>{
    
    const searchType = useSelector(state =>{
        return state.sources.searchType
    })

    const dispatch = useDispatch()
    const handleSearchTypeChange = () =>{
        dispatch(CHANGE_SEARCH_TYPE())
    }

    return(
        <div className = "headline-or-article">
        Search by:
            <form>
                <label>
                    <input type = "radio"
                    value = "headline"
                    name = "headline"
                    onChange = {handleSearchTypeChange}
                    checked = {searchType === "headline"}
                    />
                Headline
                </label>
                <label>
                    <input type = "radio"
                    value = "article"
                    name = "article"
                    onChange = {handleSearchTypeChange}
                    checked = {searchType === "article"}
                    />
                Article
                </label>
            </form>
    </div>
    )
}
export default SearchTypeFilter