import {USER_ACTIONS, PRODUCT_ACTIONS, LOADING_ACTIONS} from '../actionTypes';

const INITAL_STATE = true

const loadingReducer = (state = INITAL_STATE, action)=>{
    switch(action.type) {
        case LOADING_ACTIONS.SET_LOADING_STATE : return action.payload
        default : return state;
    }
}
export default loadingReducer;