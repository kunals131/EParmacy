import {USER_ACTIONS} from '../actionTypes';

const INITAL_STATE = {
    email : '',
    state :false,
    phoneNumber : '',
    fullName : '',
    cart : []
}

const userReducer = (state = INITAL_STATE, action)=>{
    switch(action.type) {
        case USER_ACTIONS.LOGIN_USER  : {
            const newState = {...state,...action.payload}
            return newState;
        }
        case  USER_ACTIONS.UPDATE_USER :{
            const newState = {...state,...action.payload}
            return newState;
        }
        case USER_ACTIONS.LOGOUT_USER : return INITAL_STATE;
        default : return state;
        case USER_ACTIONS.SET_DETAILS : return {...state,...action.payload};
       
    }
}
export default userReducer;