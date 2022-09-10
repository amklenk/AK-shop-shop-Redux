// TODO: import createStore from 'redux' and the reducers from './reducers'
import { createStore } from 'redux';
import { ADD_MULTIPLE_TO_CART, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, TOGGLE_CART, UPDATE_CART_QUANTITY, UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY, UPDATE_PRODUCTS } from './actions';
import reducer from './reducers';
// TODO: setup createStore to take in the reducers and export the function

let store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(UPDATE_PRODUCTS)

// store.dispatch(ADD_TO_CART)

// store.dispatch(ADD_MULTIPLE_TO_CART)

// store.dispatch(UPDATE_CART_QUANTITY)

// store.dispatch(REMOVE_FROM_CART)

// store.dispatch(CLEAR_CART)

// store.dispatch(TOGGLE_CART)

// store.dispatch(UPDATE_CATEGORIES)

// store.dispatch(UPDATE_CURRENT_CATEGORY)

export default store;