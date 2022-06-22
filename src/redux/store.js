import {createStore ,  applyMiddleware, compose} from 'redux'
import rootReducers from './rootReducer'
 import logger from 'redux-logger';

let con = compose(
    applyMiddleware(logger)
);
if (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) {
    con = compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
const store = createStore(rootReducers , con)
export default store 