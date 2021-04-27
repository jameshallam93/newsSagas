import React from "react"

import Loading from "./Components/Loading"
import News from "./Components/News"
import SearchBar from "./Components/SearchBar"

function App() {

    return (
        <>
            <div className = "collum1">
                <div className = "header">
                    <h1>Custom News</h1>
                    <h2>News your way</h2>
                </div>


            </div>
            <div className = "news">
                <h2>Search for keywords</h2>
                <SearchBar />
                <Loading />
                <News />
            </div>
        </>
    );
}

export default App;
