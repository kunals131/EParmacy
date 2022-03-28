import {USER_ACTIONS, PRODUCT_ACTIONS} from '../actionTypes';

const INITAL_STATE = {
    list : []
}

const productReducer = (state = INITAL_STATE, action)=>{
    switch(action.type) {
        case PRODUCT_ACTIONS.FILL_PRODUCTS : return {...state,list : action.payload}
        default : return state;
    }
}
export default productReducer;