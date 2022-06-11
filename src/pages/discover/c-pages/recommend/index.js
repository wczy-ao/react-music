import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannerActions } from './store/actionCreators'

const WanRecom = memo((props) => {

  const dispatch = useDispatch()
  const { topBanners } = useSelector((state) => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual)

  useEffect(() => {
    dispatch(getTopBannerActions())
  }, [dispatch]);


  return (
    <div>WanRecom；length:{topBanners.length}</div>
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