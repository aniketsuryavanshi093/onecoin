import { combineReducers, createStore, applyMiddleware } from "redux";
import * as reducers from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * for logging store data
 */
//  const logger = (storeData) => (next) => (action) => {
//     const result = next(action);
//     return result;
// };

const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    ...reducers,
});
const middlewareEnhancer = applyMiddleware(sagaMiddleware); //Logger if needed (sagaMiddleware, logger)
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer,composedEnhancers);
sagaMiddleware.run(rootSaga);

export default store;