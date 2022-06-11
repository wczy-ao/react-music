import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import { getTopBannerActions } from '../../store/actionCreators'

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'


const WanTopBanner = memo(() => {
  // 组件状态代码
  const [currentIndex, setIndex] = useState(0);
  // hook 代码
  const bannerRef = useRef()
  const carouselChaneg = useCallback((from, to) => {
    setIndex(to)
  }, [])

  // 组件redux代码
  const dispatch = useDispatch()
  const { topBanners } = useSelector((state) => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getTopBannerActions())
  }, [dispatch]);

  // 其他业务代码
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")



  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay ref={bannerRef} beforeChange={carouselChaneg}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} className="image" alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft >
        <BannerRight>2</BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div >
    </BannerWrapper >
  )
})

export default WanTopBanner