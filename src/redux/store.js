import { createStore, applyMiddleware } from 'redux';
import { postReducer } from './postReducer';
import thunk from "redux-thunk";
export const store = createStore(postReducer, applyMiddleware(thunk));