import{combineReducers,createStore}from "redux";
import { deletesReducer } from "./deletesReducer";
import { listReducer } from "./listReducer";
import { tamamReducer } from "./tamamReducer";
const state=combineReducers({
list:listReducer,
tamam:tamamReducer,
deletes:deletesReducer
})
 export const Globalstore=createStore(
    state
 )