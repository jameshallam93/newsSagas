

export const GET_NEWS = (url) =>{
    return ({
        type:"GET_NEWS",
        payload:{
            url
        }
    })
}
export const NEWS_RECEIVED = (news) =>{
    return ({
        type:"NEWS_RECEIVED",
        payload:{
            news
        }
    })
}