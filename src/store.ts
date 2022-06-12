import rootReducer from './Reducers';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const initialState:any = {};
const middleware:any = [thunk];

export const store = createStore(rootReducer, initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
    ));


