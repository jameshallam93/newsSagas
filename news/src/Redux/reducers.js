import { combineReducers } from "redux";

const initialState = {
    loading: false,
    news: []
}

const newsReducer = (state = initialState, action) => {
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

const rootReducer = combineReducers({
    news: newsReducer
})

export default rootReducer