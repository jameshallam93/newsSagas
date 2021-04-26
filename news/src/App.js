import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Loading from "./Components/Loading"
import News from "./Components/News"
import { GET_NEWS } from "./Redux/actions"

function App() {
    const dispatch = useDispatch()
    const [searchTerms, setSearchTerms] = useState("")

    const handleSearch = async () => {
        try {
            dispatch(GET_NEWS(searchTerms))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div>
                <h1>Search for keywords</h1>

                <input type="text" value={searchTerms} onChange={(event) => { setSearchTerms(event.target.value) }}></input>
                <button onClick={handleSearch}>Search</button>

            </div>
            <div>
                <Loading />
                <News />
            </div>
        </>
    );
}

export default App;
