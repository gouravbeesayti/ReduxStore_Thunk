import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import reducers from '../redux/reducers/index'

const store = createStore(reducers,{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // this is for see the redux indide of google extaintion
)
export  default store
