import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { CHANGE_SCOPE } from "../Redux/actions"

const ScopeFilter = () =>{

    const dispatch = useDispatch()
    const scope = useSelector(state =>
        state.parameters.scope
    )
    const handleScopeChange = (event) =>{
        dispatch(CHANGE_SCOPE())
    }

    return(
        <div className = "scope-filter">
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
export default ScopeFilter