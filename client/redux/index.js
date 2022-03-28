import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productsReducer";
import loadingReducer from "./reducers/loadingReducer";
const reducers = combineReducers({
    user : userReducer,
    products : productReducer,
    loadingState : loadingReducer
})

export default createStore(reducers, applyMiddleware(thunk));