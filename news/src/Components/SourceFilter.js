import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { sourceIds } from "./constants"
import { ADD_SOURCE, REMOVE_SOURCE } from "../Redux/actions"

const SourceFilter = () =>{
    const dispatch = useDispatch()
    const sources = useSelector(state =>{
        return state.parameters.sources
    })

    const handleSourceChange = (event) =>{
        const source = event.target.value
        if (sources.includes(source)){
            dispatch(REMOVE_SOURCE(source))
            return;
        }
        dispatch(ADD_SOURCE(source))
    }

    return(
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
    )
}
export default SourceFilter