import { combineReducers } from "redux";
import { reducer as recommenReducer } from "@/pages/discover/c-pages/recommend/store";



const cReducer = combineReducers({
    recommend: recommenReducer
})

export default cReducer