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

const initialSourceState = []

const sourceReducer = (state = initialSourceState, action) =>{
    switch (action.type) {
        case "ADD_SOURCE":
            return ([
                ...state,
                action.payload.source
            ])
        case "REMOVE_SOURCE":
            let newState = []
            const sourceToRemove = action.payload.source
            state.forEach(source =>{
                if (source !== sourceToRemove){
                    newState.push(source)
                }
            })
            return newState
        default:
            return state
    }
}

const rootReducer = combineReducers({
    news: newsReducer,
    sources: sourceReducer
})

export default rootReducer