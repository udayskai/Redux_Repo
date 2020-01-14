
import {combineReducers} from 'redux'
import UserData from "./userdata.js"

const RootReducer=()=>{
    combineReducers({data:UserData})
    console.log("im reducer",)
   
}
 
export default RootReducer;