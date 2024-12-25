// src/store/store.js
import { createStore, combineReducers } from 'redux';
import companyReducer from '../reducers/companyReducer';

const rootReducer = combineReducers({
    company: companyReducer
});

const store = createStore(rootReducer);

export default store;
