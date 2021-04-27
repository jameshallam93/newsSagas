import React from "react"

import Loading from "./Components/Loading"
import News from "./Components/News"
import SearchBar from "./Components/SearchBar"

function App() {

    return (
        <>
            <div className = "collum1">
                <h1>Search for keywords</h1>
                <SearchBar />
            </div>
            <div className = "collum2">
                <Loading />
                <News />
            </div>
        </>
    );
}

export default App;
