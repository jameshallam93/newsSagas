

export const GET_NEWS = (searchTerms, scope, sources) => {
    return ({
        type: "GET_NEWS",
        payload: {
            searchTerms,
            scope,
            sources
        }
    })
}
export const NEWS_RECEIVED = (news) => {
    return ({
        type: "NEWS_RECEIVED",
        payload: {
            news
        }
    })
}

export const ADD_SOURCE = (source) =>{
    return ({
        type:"ADD_SOURCE",
        payload : {
            source
        }
    })
}

export const REMOVE_SOURCE = (source) =>{
    return({
        type:"REMOVE_SOURCE",
        payload:{
            source
        }
    })
}