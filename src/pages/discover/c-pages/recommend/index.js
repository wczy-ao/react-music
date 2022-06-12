import React, { memo } from 'react'

import { RecommendWrapper, Content, RecommendLeft } from './style'

import WanTopBanner from './c-cpns/top-banner'
import WanAlbum from './c-cpns/new-album'
import WanRecommend from './c-cpns/hot-recommend'
import WanRecommendRank from './recommend-ranking'

const WanRecom = memo((props) => {

  return (
    <RecommendWrapper>
      <WanTopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <WanRecommend />
          <WanAlbum />
          <WanRecommendRank />
        </RecommendLeft>

      </Content>
    </RecommendWrapper>
  )
})

export default WanRecom



// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerActions())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(WanRecom)