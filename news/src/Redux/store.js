import { applyMiddleware, createStore } from "redux"
import rootReducer from "./reducers"
import createSagaMiddleware from "redux-saga"
import { logger } from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
import rootSaga from "./sagas"
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(
    sagaMiddleware, logger
)))

sagaMiddleware.run(rootSaga)

export default store