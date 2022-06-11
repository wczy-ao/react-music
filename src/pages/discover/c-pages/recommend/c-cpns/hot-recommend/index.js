import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import { HotRecommendWrapper } from './style'
import { getHotRecommendAction } from '../../store/actionCreators'

import WanRecomHeader from '@/components/theme-header'
import WanSongCover from '@/components/songs-cover'


const WanRecommend = memo(() => {
  // state

  // redux hooks
  const dispatch = useDispatch()
  const { hotRecommends } = useSelector((state) => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)


  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch]);


  // 其他逻辑


  return (
    <HotRecommendWrapper>
      <WanRecomHeader title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <WanSongCover key={item.id} info={item} />
            )
          })
        }
      </div>

    </HotRecommendWrapper>
  )
})

export default WanRecommend