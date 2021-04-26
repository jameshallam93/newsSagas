import React from "react"
import { useSelector } from "react-redux"
const Loading = () => {
    const isLoading = useSelector(state =>
        state.news.loading
    )
    if (isLoading) {
        return (
            <h1>Loading</h1>
        )
    }
    return null
}

export default Loading

