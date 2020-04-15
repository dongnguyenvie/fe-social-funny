import { applyMiddleware, createStore, Store, compose } from "redux";
import createSagaMiddlewre from "redux-saga";
import rootReducer from "../redux/RootReducer";
import rootSaga from "../redux/RootSaga";

const sagaMiddleware = createSagaMiddlewre();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(sagaMiddleware)
    : composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, devTools);
export default store;
sagaMiddleware.run(rootSaga);
