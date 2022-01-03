import { ADD_TO_CART, DECREASE_THE_ITEM, INCREASE_THE_ITEM } from '../ActionType';

export const AddToCart = (state = {cart: []}, action) => {
    const{type, payload, flag} = action;
    console.log(flag);
    switch(type){
        case ADD_TO_CART:
            return{
                ...state,
                cart: [...state.cart, payload]
            }
        case INCREASE_THE_ITEM:
            var newArr = [];
            for(var i=0; i<state.cart.length; i++){
                if(state.cart[i].id === payload.id){
                    state.cart[i].count += 1;
                }
                newArr.push(state.cart[i]);
            }
            return{
                ...state,
                cart: newArr
            }
        case DECREASE_THE_ITEM:
            console.log("AAAAAAAAAAAAAAAAAAAAAAAa");
            var newArr_1 = [];
            for(var j=0; j<state.cart.length; j++){
                if(state.cart[j].id === payload.id){
                    state.cart[j].count -= 1;
                }
                newArr_1.push(state.cart[j]);
            }
            newArr_1 = newArr_1.filter((item) => item.count > 0);
            return{
                ...state,
                cart: newArr_1
            }
        default: return state
    }
}