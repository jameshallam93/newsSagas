import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GET_NEWS, ADD_SOURCE, REMOVE_SOURCE } from "../Redux/actions"

const sourceIds = ["abc-news", "associated-press", "axios", "bbc-news", "cbs-news", "cnn", "fox-news","independent", "nbc-news", "the-huffington-post", "the-wall-street-journal"]

const SearchBar = () =>{

    const dispatch = useDispatch()
    const [searchTerms, setSearchTerms] = useState("")
    const [scope, setScope] = useState("everything")
    const sources = useSelector(state =>{
        return state.sources
    })
    const handleSearch = async () => {
        try {
            dispatch(GET_NEWS(searchTerms, scope, sources))
        } catch (e) {
            console.log(e)
        }
    }  
    const handleSourceChange = (event) =>{
        const source = event.target.value
        if (sources.includes(source)){
            dispatch(REMOVE_SOURCE(source))
            return;
        }
        dispatch(ADD_SOURCE(source))
    }

    const handleScopeChange = (event) =>{
        setScope(event.target.value)
    }
    return(
    <div>
        <input type="text" value={searchTerms} onChange={(event) => { setSearchTerms(event.target.value) }}></input>
        <button onClick={handleSearch}>Search</button>
        <form>
            <label>
                <input type = "radio"
                value = "everything"
                checked = {scope === "everything"}
                onChange = {handleScopeChange}
                />
                All articles
            </label>
            <label>
                <input type = "radio"
                value = "top-articles"
                checked = {scope === "top-articles"}
                onChange = {handleScopeChange}
                />
                Top articles
            </label>
        </form>
        <div style = {{height:50}}/>
        <div className = "sources">
            <form>
                {
                    sourceIds.map(source =>{
                        return(
                            <label>
                                <input type = "checkbox"
                                value = {source}
                                id = {source}
                                name = {source}
                                checked = {sources.includes(source)}
                                onChange = {handleSourceChange}
                                />
                                {source}
                            </label>
                        )
                    })
                }
            </form>
        </div>

    </div>
    )
}
export default SearchBar