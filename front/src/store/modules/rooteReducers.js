import { combineReducers } from 'redux';
import counter from './reducers/Counter';
import auth from './reducers/AuthReducers';
import product from './reducers/ProductReducers';


const rootReducer = combineReducers({
    counter,
    auth,
    product
})

export default rootReducer;