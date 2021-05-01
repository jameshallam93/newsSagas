

export const GET_NEWS = (searchParameters) => {
    return ({
        type: "GET_NEWS",
        payload: {
            searchParameters
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

export const CHANGE_SCOPE = () =>{
    return ({
        type:"CHANGE_SCOPE"
    })
}

export const CHANGE_SEARCH_TYPE = () =>{
    return ({
        type:"CHANGE_SEARCH_TYPE"
    })
}