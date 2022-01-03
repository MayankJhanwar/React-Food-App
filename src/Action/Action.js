import { ADD_TO_CART, INCREASE_THE_ITEM, DECREASE_THE_ITEM, LOAD_ALL } from '../ActionType'

export const load_all_items = (item) => (dispatch) => {
    console.log("A");
    try {
        dispatch({
            type: LOAD_ALL,
            payload: item
        })
    } catch (error) {
        console.log(error);
    }
}

export const add_to_cart_action = (item, flag) => (dispatch) =>{
    console.log(item);
    
    try {
        dispatch({
            type: ADD_TO_CART,
            payload: item,
            flag: flag
        })
    } catch (error) {
        console.log("*",error);
    }
}

export const increase_number = (item, flag) => (dispatch) => {
    try {
        dispatch({
            type: INCREASE_THE_ITEM,
            payload: item,
            flag: flag
        })
    } catch (error) {
        console.log(error);
    }
}

export const decrease_number = (item, flag) => (dispatch) => {
    console.log(item);
    try {
        dispatch({
            type: DECREASE_THE_ITEM,
            payload: item,
            flag: flag
        })
    } catch (error) {
        console.log(error);
    }
}