import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { GET_NEWS } from "../Redux/actions"

const SearchBar = () =>{

    const dispatch = useDispatch()
    const [searchTerms, setSearchTerms] = useState("")
    const [scope, setScope] = useState("everything")

    const handleSearch = async () => {
        try {
            dispatch(GET_NEWS(searchTerms, scope))
        } catch (e) {
            console.log(e)
        }
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
    </div>
    )
}
export default SearchBar