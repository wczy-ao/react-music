import * as actionsType from './constant'
import { getTopBanners } from '@/services/recommend'
export const getTopBannerActions = () => {
  return (dispatch, getState) => {
    getTopBanners().then(res => {
      dispatch({
        type: actionsType.CHANGE_TOP_BANNERS,
        topBanners: res.banners
      })
    })
  }
}