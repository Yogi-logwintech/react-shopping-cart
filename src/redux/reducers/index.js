import { combineReducers } from 'redux'
import { productReducer, selectedProductReducer, addToCartReducer } from './productReducer'

const reducers = combineReducers({
    Products: productReducer,
    ProductDetail: selectedProductReducer,
    AddToCart: addToCartReducer,
})

export default reducers;