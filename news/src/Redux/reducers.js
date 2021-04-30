import { combineReducers } from "redux";

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

const initialSourceState = {
    sources:[],
    scope:"everything"
}

const sourceReducer = (state = initialSourceState, action) =>{
    switch (action.type) {
        case "ADD_SOURCE":
            return ({
                ...state,
                sources: [...state.sources, action.payload.source]
            })
        case "REMOVE_SOURCE":
            let newSources = []
            const sourceToRemove = action.payload.source
            state.forEach(source =>{
                if (source !== sourceToRemove){
                    newSources.push(source)
                }
            })
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
        default:
            return state
    }
}

const rootReducer = combineReducers({
    news: newsReducer,
    sources: sourceReducer
})

export default rootReducer