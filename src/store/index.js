
import { createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from '../rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeData= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the store
const store = createStore(
    reducer,
    composeData(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store
// run the saga
