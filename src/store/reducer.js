import { combineReducers } from "redux-immutable";
import { reducer as recommenReducer } from "@/pages/discover/c-pages/recommend/store";
import { reducer as playerReducer } from "@/pages/player/store"


const cReducer = combineReducers({
    recommend: recommenReducer,
    player: playerReducer
})

export default cReducer