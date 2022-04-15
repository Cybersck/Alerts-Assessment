import { createStore, compose } from 'redux';
import { reducer } from '@state/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//initialize redux store
export default createStore(
    reducer,
    composeEnhancers()
);