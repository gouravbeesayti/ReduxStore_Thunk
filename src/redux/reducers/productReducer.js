import { ActionTypes } from "../contants/action-types"

const initialState ={
    products :[{
        id:1,
        title:'dipesh',
        category:'programmer',
    }]
}
export const productReducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCT:
        return state;
        default:
            return state

    }

}