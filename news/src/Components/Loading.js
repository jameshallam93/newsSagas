import React from "react"
import { useSelector } from "react-redux"
import image from "../circles-menu-1.gif"

const Loading = () => {
    const isLoading = useSelector(state =>
        state.news.loading
    )
    const imgStyle = {
        height:100,
        width:100
    }
    if (isLoading) {
        return (
            <>
                <h1>Loading</h1>
                <img src = {image} alt = "loading" style = {imgStyle}></img>
            </>
        )
    }
    return null
}

export default Loading

