

export const GET_NEWS = (searchTerms, scope) => {
    return ({
        type: "GET_NEWS",
        payload: {
            searchTerms,
            scope
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