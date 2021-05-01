import { combineReducers } from "redux";
import { removeElementFromArray } from "./removeElementFromArray"

const initialNewsState = {
    loading: false,
    news: []
}

const newsReducer = (state = initialNewsState, action) => {
    switch (action.type) {
        case "GET_NEWS":
            return ({
                ...state,
                loading: true
            })
        case "NEWS_RECEIVED":
            return ({
                ...state,
                news: action.payload.articles,
                loading: false
            })
        default:
            return state
    }
}

const initialParameterState = {
    sources:[],
    scope:"everything",
    searchType: "headline",
    orderBy: "popularity"
}

const parameterReducer = (state = initialParameterState, action) =>{
    switch (action.type) {
        case "ADD_SOURCE":
            return ({
                ...state,
                sources: [...state.sources, action.payload.source]
            })
        case "REMOVE_SOURCE":
            const sourceToRemove = action.payload.source
            const newSources = removeElementFromArray(state.sources, sourceToRemove)
            return ({
                ...state,
                sources:newSources
            })
        case "CHANGE_SCOPE":
            const newScope = state.scope === "everything" ? 
                "top-articles" :
                "everything"
            return {
                ...state,
                scope:newScope
            }
        case "CHANGE_SEARCH_TYPE":
            const newSearchType = state.searchType === "headline" ?
                "article" :
                "headline"
            return ({
                ...state,
                searchType: newSearchType
            })
        case "CHANGE_ORDER_BY":
            return ({
                ...state,
                orderBy: action.payload.ordering
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    news: newsReducer,
    parameters: parameterReducer
})

export default rootReducer