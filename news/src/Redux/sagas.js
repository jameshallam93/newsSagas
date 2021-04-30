import { put, takeLatest, all, call } from "redux-saga/effects"
import newsRequests from "../controllers/news"

function* fetchNews(action) {
    const news = yield call(newsRequests.getNews, action.payload.searchTerms, action.payload.scope, action.payload.sources)
    yield put({ type: "NEWS_RECEIVED", payload: news })
}

function* newsWatcher() {
    yield takeLatest("GET_NEWS", fetchNews)
}

export default function* rootSaga() {
    yield all([
        newsWatcher(),
    ]);
}