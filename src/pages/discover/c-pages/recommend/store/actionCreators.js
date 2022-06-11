import * as actionsType from './constant'
import { getTopBanners, getHotRecommends } from '@/services/recommend'

// 同步
const changeTopBannerAction = (res) => ({
  type: actionsType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionsType.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})


// 异步
export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getTopBannerActions = () => {
  return (dispatch, getState) => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}