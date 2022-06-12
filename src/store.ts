import rootReducer from './Reducers';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState:any = {};
const middleware:any = [thunk];

export const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));


