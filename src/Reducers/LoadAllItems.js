import { LOAD_ALL } from "../ActionType";

export const LoadItems = (state = {Foods: []}, action) => {
    console.log("ABCD");
    const{type, payload} = action;
    switch(type){
        case LOAD_ALL:
            return{
                ...state,
                Foods: payload
            }
        default: return state;
    }
}