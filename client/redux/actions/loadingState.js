import { LOADING_ACTIONS } from "../actionTypes"
export const setLoading = (state)=>{
    return {
       type : LOADING_ACTIONS.SET_LOADING_STATE,
       payload :  state
    }
}