import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopListAction } from '../store/actionCreators'

import { getTopList } from '@/services/recommend'


const WanRecommendRank = memo(() => {
  // state
  // redux hooks
  const dispatch = useDispatch()
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual)
  // other hooks
  // 其他逻辑
  // useEffect(() => {
  //   dispatch(getTopListAction(0))
  // }, [dispatch])
  useEffect(() => {
    getTopList(0).then(res => {
      console.log(res);
    })
  }, [])
  console.log(originRanking);
  return (
    <div>WanRecommendRank</div>
  )
})

export default WanRecommendRank