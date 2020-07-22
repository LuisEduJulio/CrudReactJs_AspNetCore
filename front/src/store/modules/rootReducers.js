import { combineReducers } from 'redux';
import counter from './reducers/Counter';
import auth from './reducers/AuthReducers';
import product from './reducers/ProductReducers';
import category from './reducers/CategoryReducers';


const rootReducer = combineReducers({
    counter,
    auth,
    product,
    category
})

export default rootReducer;