import * as actionsType from "./constant";
import { Map } from 'immutable'
const defaultState = Map({
  topBanners: [],
  hotRecommends: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionsType.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners)
    case actionsType.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends)
    default:
      return state
  }
}


export default reducer