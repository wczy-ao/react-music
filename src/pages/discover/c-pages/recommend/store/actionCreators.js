import * as actionsType from './constant'
import { getTopBanners, getHotRecommends, getNewAlbums, getTopList } from '@/services/recommend'

// 同步
const changeTopBannerAction = (res) => ({
  type: actionsType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionsType.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionsType.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpRankingAction = (res) => ({
  type: actionsType.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionsType.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionsType.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})


// 异步
export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    })
  }
}

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

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}