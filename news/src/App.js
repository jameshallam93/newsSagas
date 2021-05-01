import React from "react"

import Loading from "./Components/Loading"
import News from "./Components/News"
import SearchBar from "./Components/SearchBar/SearchBar"
import Header from "./Components/Header"

function App() {

    return (
        <div className = "app">
            <Header/>
            <div className = "news">
                <h2>Search for keywords</h2>
                <SearchBar />
                <Loading />
                <News />
            </div>
        </div>
    );
}

export default App;
