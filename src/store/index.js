import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import products from './products.js';
import categories from './categories.js';
import cart from './cart.js';



let reducers = combineReducers({ products, categories, cart });

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
