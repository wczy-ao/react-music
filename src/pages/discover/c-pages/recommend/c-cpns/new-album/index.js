import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import { AlbumWrapper } from './style'
import { getNewAlbumAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import WanRecomHeader from '@/components/theme-header'
import WanAlbumCover from '@/components/album-cover';

const WanAlbum = memo(() => {
  // state

  // redux hooks
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)


  // other hooks
  const pageRef = useRef()
  // 业务逻辑
  return (
    <AlbumWrapper>
      <WanRecomHeader title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02"
          onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div className="page" key={item}>
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(itemX => {
                        return (
                          <WanAlbumCover
                            key={itemX.id}
                            info={itemX}
                            size={100}
                            width={118}
                            bgp="-570px" />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
          onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})

export default WanAlbum