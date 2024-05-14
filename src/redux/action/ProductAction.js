import { ActionTypes } from "../contants/action-types"

export  const setProducts= (products)=>{
    return{
        type :ActionTypes.SET_PRODUCT,
        payload: products,
    }
}

export const selectedProducts =()=>{
    return {
        type :ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    }
}